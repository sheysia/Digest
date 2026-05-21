(() => {
  const messages = {
    zh: {
      placeholder: "粘贴网址、报名链接、资料页，或输入任意文字",
      previewEmpty: "等待输入",
      empty: "输入内容后会自动生成二维码。",
      ready: "二维码已生成。",
      contrast: "颜色对比偏低，建议换成更深的前景色以便扫码。",
      tooLong: "内容太长，当前容错级别放不下。可以缩短内容，或把容错调为“常规”。",
      copied: "PNG 已复制到剪贴板。",
      copyUnsupported: "这个浏览器暂不支持复制图片，请下载 PNG。",
      copyFailed: "复制没有成功，请改用下载 PNG。",
      downloadedPng: "PNG 已下载。",
      downloadedSvg: "SVG 已下载。",
      cleared: "已清空。",
      copyPng: "复制 PNG",
      copiedButton: "已复制",
      filename: "syneira-qr-code",
    },
    en: {
      placeholder: "Paste a URL, signup link, resource page, or any text",
      previewEmpty: "Waiting for content",
      empty: "Enter content to generate a QR code automatically.",
      ready: "QR code generated.",
      contrast: "Color contrast is low. Use a darker foreground for easier scanning.",
      tooLong: "This content is too long for the current error-correction level. Shorten it or switch reliability to Standard.",
      copied: "PNG copied to clipboard.",
      copyUnsupported: "This browser cannot copy images yet. Download the PNG instead.",
      copyFailed: "Copy did not work. Download the PNG instead.",
      downloadedPng: "PNG downloaded.",
      downloadedSvg: "SVG downloaded.",
      cleared: "Cleared.",
      copyPng: "Copy PNG",
      copiedButton: "Copied",
      filename: "syneira-qr-code",
    },
  };

  const els = {
    input: document.querySelector("#qrInput"),
    count: document.querySelector("#qrCount"),
    clear: document.querySelector("#qrClear"),
    previewText: document.querySelector("#qrPreviewText"),
    size: document.querySelector("#qrSize"),
    ecc: document.querySelector("#qrEcc"),
    foreground: document.querySelector("#qrForeground"),
    background: document.querySelector("#qrBackground"),
    canvas: document.querySelector("#qrCanvas"),
    status: document.querySelector("#qrStatus"),
    downloadPng: document.querySelector("#qrDownloadPng"),
    copyPng: document.querySelector("#qrCopyPng"),
    downloadSvg: document.querySelector("#qrDownloadSvg"),
    swatches: Array.from(document.querySelectorAll(".qr-swatch")),
  };

  if (!els.input || !els.canvas || !window.qrcode) return;

  const quietZone = 4;
  let currentQr = null;
  let currentSvg = "";

  function lang() {
    return document.documentElement.lang && document.documentElement.lang.startsWith("en") ? "en" : "zh";
  }

  function t(key) {
    return messages[lang()][key] || messages.zh[key] || key;
  }

  function normalizeHex(value) {
    return String(value || "").trim().toLowerCase();
  }

  function hexToRgb(hex) {
    const clean = normalizeHex(hex).replace("#", "");
    if (clean.length !== 6) return { r: 0, g: 0, b: 0 };
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16),
    };
  }

  function luminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const channels = [r, g, b].map((channel) => {
      const value = channel / 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function contrastRatio(a, b) {
    const lighter = Math.max(luminance(a), luminance(b));
    const darker = Math.min(luminance(a), luminance(b));
    return (lighter + 0.05) / (darker + 0.05);
  }

  function setStatus(message, tone = "neutral") {
    els.status.textContent = message;
    els.status.dataset.tone = tone;
  }

  function setActionsEnabled(enabled) {
    [els.downloadPng, els.copyPng, els.downloadSvg].forEach((button) => {
      if (button) button.disabled = !enabled;
    });
  }

  function updateCount() {
    els.count.textContent = `${els.input.value.length} / ${els.input.maxLength || 1800}`;
  }

  function summarizeValue(value) {
    if (!value) return "";
    return value.length > 88 ? `${value.slice(0, 88)}...` : value;
  }

  function drawEmpty() {
    const size = Number(els.size.value) || 768;
    const canvas = els.canvas;
    const context = canvas.getContext("2d");
    canvas.width = size;
    canvas.height = size;
      context.fillStyle = els.background.value || "#ffffff";
    context.fillRect(0, 0, size, size);
    context.strokeStyle = "rgba(112, 112, 196, 0.18)";
    context.lineWidth = Math.max(2, Math.floor(size / 160));
    context.strokeRect(context.lineWidth, context.lineWidth, size - context.lineWidth * 2, size - context.lineWidth * 2);
    currentQr = null;
    currentSvg = "";
    if (els.previewText) {
      els.previewText.textContent = t("previewEmpty");
      els.previewText.removeAttribute("title");
    }
    setActionsEnabled(false);
  }

  function buildSvg(qr, foreground, background) {
    const count = qr.getModuleCount();
    const total = count + quietZone * 2;
    const segments = [];

    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (qr.isDark(row, col)) {
          segments.push(`M${col + quietZone} ${row + quietZone}h1v1h-1z`);
        }
      }
    }

    return [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" width="${total}" height="${total}" shape-rendering="crispEdges">`,
      `<rect width="${total}" height="${total}" fill="${background}"/>`,
      `<path fill="${foreground}" d="${segments.join(" ")}"/>`,
      "</svg>",
    ].join("");
  }

  function drawQr(qr) {
    const targetSize = Number(els.size.value) || 768;
    const foreground = els.foreground.value || "#000000";
    const background = els.background.value || "#ffffff";
    const count = qr.getModuleCount();
    const total = count + quietZone * 2;
    const cell = Math.max(1, Math.floor(targetSize / total));
    const size = cell * total;
    const canvas = els.canvas;
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;
    context.imageSmoothingEnabled = false;
    context.fillStyle = background;
    context.fillRect(0, 0, size, size);
    context.fillStyle = foreground;

    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (qr.isDark(row, col)) {
          context.fillRect((col + quietZone) * cell, (row + quietZone) * cell, cell, cell);
        }
      }
    }

    currentQr = qr;
    currentSvg = buildSvg(qr, foreground, background);
    if (els.previewText) {
      els.previewText.textContent = summarizeValue(els.input.value.trim());
      els.previewText.title = els.input.value.trim();
    }
    setActionsEnabled(true);

    const lowContrast = contrastRatio(foreground, background) < 4.5;
    setStatus(lowContrast ? t("contrast") : `${t("ready")} ${count} × ${count} · ${size}px`, lowContrast ? "warning" : "good");
  }

  function generate() {
    updateCount();
    const value = els.input.value.trim();

    if (!value) {
      drawEmpty();
      setStatus(t("empty"));
      return;
    }

    try {
      const qr = window.qrcode(0, els.ecc.value || "H");
      qr.addData(value);
      qr.make();
      drawQr(qr);
    } catch (error) {
      currentQr = null;
      currentSvg = "";
      drawEmpty();
      setStatus(t("tooLong"), "warning");
    }
  }

  function setActiveSwatch() {
    const fg = normalizeHex(els.foreground.value);
    const bg = normalizeHex(els.background.value);
    els.swatches.forEach((swatch) => {
      const active = normalizeHex(swatch.dataset.fg) === fg && normalizeHex(swatch.dataset.bg) === bg;
      swatch.classList.toggle("is-active", active);
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function timestamp() {
    return new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "");
  }

  function downloadPng() {
    if (!currentQr) return;
    els.canvas.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `${t("filename")}-${timestamp()}.png`);
      setStatus(t("downloadedPng"), "good");
    }, "image/png");
  }

  async function copyPng() {
    if (!currentQr) return;
    if (!navigator.clipboard || !window.ClipboardItem) {
      setStatus(t("copyUnsupported"), "warning");
      return;
    }

    els.canvas.toBlob(async (blob) => {
      if (!blob) return;
      try {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        els.copyPng.textContent = t("copiedButton");
        setStatus(t("copied"), "good");
        setTimeout(() => {
          els.copyPng.textContent = t("copyPng");
        }, 1400);
      } catch (error) {
        setStatus(t("copyFailed"), "warning");
      }
    }, "image/png");
  }

  function downloadSvg() {
    if (!currentQr || !currentSvg) return;
    const blob = new Blob([currentSvg], { type: "image/svg+xml;charset=utf-8" });
    downloadBlob(blob, `${t("filename")}-${timestamp()}.svg`);
    setStatus(t("downloadedSvg"), "good");
  }

  function syncDynamicLanguage() {
    els.input.placeholder = t("placeholder");
    if (els.copyPng && !els.copyPng.matches(":focus")) {
      els.copyPng.textContent = t("copyPng");
    }
    generate();
  }

  els.input.addEventListener("input", generate);
  els.size.addEventListener("change", generate);
  els.ecc.addEventListener("change", generate);
  els.foreground.addEventListener("input", () => {
    setActiveSwatch();
    generate();
  });
  els.background.addEventListener("input", () => {
    setActiveSwatch();
    generate();
  });
  els.clear.addEventListener("click", () => {
    els.input.value = "";
    generate();
    setStatus(t("cleared"));
    els.input.focus();
  });
  els.downloadPng.addEventListener("click", downloadPng);
  els.copyPng.addEventListener("click", copyPng);
  els.downloadSvg.addEventListener("click", downloadSvg);
  els.swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      els.foreground.value = swatch.dataset.fg;
      els.background.value = swatch.dataset.bg;
      setActiveSwatch();
      generate();
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-lang-toggle]")) {
      setTimeout(syncDynamicLanguage, 0);
    }
  });

  setActiveSwatch();
  syncDynamicLanguage();
})();
