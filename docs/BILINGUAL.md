# Bilingual System — How It Works & Audit Report

_Audited 2026-05-18 against commit `f7ca429` (Add full bilingual Issue 005)._

This site supports a runtime ZH/EN language toggle without any build step or
server. Switching languages happens entirely in the browser via
`/assets/js/i18n.js`, and the user's choice persists across pages via
`localStorage`.

---

## 1. Architecture at a glance

```
┌─────────────────────────────────────────────────────────────────┐
│  assets/js/i18n.js  ← single source of truth (559 lines)        │
│  ─────────────────────────────────────────────────────────────  │
│  • I18N            { zh: {…}, en: {…} }   144 keys each          │
│  • PAGE_SUMMARIES  per-page EN summary fallback (used by         │
│                    individual notes that aren't fully translated) │
│  • applyLanguage() swaps all [data-i18n] / [data-i18n-html] +   │
│                    sets <html lang="zh-CN"|"en">                 │
│  • ensureLanguageToggle()  injects fixed-position toggle button  │
│  • ensureReaderAid()       injects EN summary banner for pages   │
│                            without full bilingual content        │
│  • Persistence: localStorage key  syneira-digest-lang            │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  Every HTML page just adds:                                     │
│     <script src=".../assets/js/i18n.js"></script>               │
│  …then picks one of two integration tiers below.                │
└─────────────────────────────────────────────────────────────────┘
```

The toggle button (top-right `position: fixed`, label `EN` / `中`) is
auto-injected on every page that loads `i18n.js`. Clicking it flips the lang
and saves to localStorage. The next page you open reads the saved lang and
applies it immediately, so the toggle behaves like a global preference.

---

## 2. Two integration tiers

Pages opt into one of two tiers depending on how much translation they need.

### Tier A — **Full bilingual via `data-i18n` attributes**

Used by: `index.html`, `feedback.html`, `notes/index.html`, `tools/index.html`.

Pattern: every text node that should swap gets a `data-i18n="some.key"`
attribute. `applyLanguage()` walks the DOM and replaces `textContent`
based on the I18N dict.

```html
<html lang="zh"
      data-i18n-title="notesIndex.meta.title"
      data-i18n-description="notesIndex.meta.description">
  ...
  <h1 data-i18n="notesIndex.title">从每期 Issue 里抽出来的案例手记</h1>
  <p  data-i18n="notesIndex.lead">…</p>
```

The `<html data-i18n-title>` / `<html data-i18n-description>` also let
`applyLanguage()` swap `<title>` and `<meta name="description">` (good for
the browser tab and SEO when crawled in EN context — see caveats §6).

### Tier B — **Full bilingual via duplicated `.issue-zh` / `.issue-en` blocks**

Used by: all 5 issue covers (`issues/001`–`005.html`).

Pattern: the page contains TWO complete content blocks, only one of which
is displayed at a time via CSS:

```html
<body data-full-i18n-page="issue-005">
  <div class="wrap issue-zh">…中文版…</div>
  <div class="wrap issue-en">…English version…</div>

  <style>
    .issue-en { display: none; }
    html[lang="en"] .issue-zh { display: none; }
    html[lang="en"] .issue-en { display: block; }
  </style>
</body>
```

The `data-full-i18n-page="..."` attribute on `<body>` is the signal to
`ensureReaderAid()` that this page already provides its own EN content, so
it should NOT inject the small EN summary banner.

> **Issue 001 uses `.issue-wrapper.issue-zh` / `.issue-wrapper.issue-en`
> instead of `.wrap.…`.** Same idea, different class name; both work.

### Tier C — **Reader-aid only** (default for individual notes)

Used by: every file in `notes/` except `notes/index.html`.

Pattern: the page is Chinese-only. When the user toggles to EN, `i18n.js`
finds the page in the `PAGE_SUMMARIES` dict and prepends a small EN
summary card at the top of the page:

```js
const PAGE_SUMMARIES = {
  "notes/spotlight-china-quest.html": {
    title: "China Quest",
    summary: "A community-built interactive Chinese culture game for kids…"
  },
  …
};
```

The summary card is hidden in ZH mode (`html[lang="en"] .i18n-reader-aid {
display: block; }`) and visible only in EN mode. The Chinese article body
stays intact below.

**This is the right tier for any note that has too much body text to
realistically dual-translate.** It gives EN readers an orientation
paragraph and lets them decide whether to translate on their own (most
modern browsers have a built-in translation prompt).

---

## 3. Audit results — current state (✅ clean / ⚠️ minor / ❌ fix)

### 3.1 Coverage

| Surface | Status | Notes |
|---|---|---|
| `i18n.js` loaded on all real pages | ✅ | 38 / 38 (excludes guides/ redirect stubs and the orphan in `issues/004/files/`) |
| All 144 `data-i18n` keys referenced in HTML are defined in `i18n.js` | ✅ | Zero undefined, zero unused |
| All 25 notes have a `PAGE_SUMMARIES` entry | ✅ | Reader-aid will render for each |
| All `PAGE_SUMMARIES` entries point to existing files | ✅ | No broken keys |

### 3.2 Issue covers (`issues/001.html` – `issues/005.html`)

| Issue | `data-full-i18n-page` | ZH/EN block class | Cards (ZH) | Cards (EN) | Note links parity |
|---|---|---|---|---|---|
| 001 | ✅ `issue-001` | `.issue-wrapper.issue-zh` / `.issue-en` | 13 | 13 | n/a (no `../notes/` links — early format) |
| 002 | ✅ `issue-002` | `.wrap.issue-zh` / `.issue-en` | 8 | 8 | ✅ same 3 note links |
| 003 | ✅ `issue-003` | `.wrap.issue-zh` / `.issue-en` | 7 | 7 | ✅ same 4 note links |
| 004 | ✅ `issue-004` | `.wrap.issue-zh` / `.issue-en` | 8 | 8 | ✅ same 8 note links |
| 005 | ✅ `issue-005` | `.wrap.issue-zh` / `.issue-en` | 7 | 7 | ✅ same 7 note links |

Card title parity spot-checked on #004 and #005 — every ZH card has an
equivalent EN card at the same position. Translations read naturally.

### 3.3 Landing pages

| Page | i18n.js | data-i18n attrs | OG tags | Favicon |
|---|---|---|---|---|
| `index.html` | ✅ | 91 | ✅ | ✅ |
| `feedback.html` | ✅ | 28 | ✅ | ⚠️ missing |
| `notes/index.html` | ✅ | 24 | ❌ missing | ❌ missing |
| `tools/index.html` | ✅ | 10 | ❌ missing | ❌ missing |

---

## 4. Bugs found — fix priority

### 🔴 P1 — Should fix

1. **Orphan duplicate: `issues/004/anthropic-finance-agents.html`**
   This is the old staging file that was accidentally re-introduced in the
   "checkpoint before codex" commit. The real, in-use file is
   `notes/anthropic-finance-agents.html`. The orphan has no OG meta, broken
   `href="index.html"` nav, and isn't referenced by any cover. **Delete it.**

2. **`notes/index.html` and `tools/index.html` have no OG meta or favicon**
   Sharing either URL (e.g. to WeChat) renders a blank preview card. Add
   the same OG block we put on every note + the favicon links.

### 🟡 P2 — Polish

3. **All 5 issue covers reuse the same i18n key for the back-link**
   Every issue uses `data-i18n="issue005.back"` for the "← Back to Home"
   link. Functionally harmless (the translation is identical anyway) but
   semantically misleading. Either:
   - Rename the key to `nav.back` in i18n.js + update all 5 issues, OR
   - Just leave it (current behavior is correct).

4. **`feedback.html` missing favicon link**
   Has OG meta but no `<link rel="icon">`. Browser tab shows nothing.

5. **Issue #001 not in homepage Issues hub**
   The hub shows #005 (Live) + #004/#003/#002 (Archive) and stops there.
   Issue #001 only appears in the Archive list further down. Either:
   - Add a 5th tile for #001, OR
   - Accept that 4 tiles is the design max (current behavior).

6. **Issue #001 cover has no `../notes/` links**
   The cover lists 13 items but none of them link to standalone notes,
   even though related notes exist (`notes/notebook-workflow.html`,
   `notes/ai-bots.html`, `notes/claude-reminder-demo.html`). Wire these up
   if you want #001 readers to dig deeper.

### 🟢 P3 — Cosmetic / future

7. **Toggle button position may overlap existing top-right nav links**
   On the homepage and issue covers, the fixed `EN`/`中` button sits at
   `top:18px; right:18px` on top of the existing nav row. Z-index 9999
   means it always wins, but visually it can crowd the right side. Test
   on mobile widths; consider moving it into the nav itself if it feels
   crowded.

8. **OG/Twitter description doesn't follow language toggle**
   Social cards always render the Chinese description regardless of
   reader language. This is normal (OG is server-rendered, not JS-driven)
   and probably the desired default for our primary audience. Worth
   knowing if anyone asks why an English-shared link shows a Chinese
   subtitle.

---

## 5. Maintenance checklist

### Adding a new note (Tier C — reader-aid only)

1. Drop the article HTML at `notes/<slug>.html`.
2. Make sure `<script src="../assets/js/i18n.js"></script>` is in the page
   (usually right before `</body>`).
3. Add an entry to `PAGE_SUMMARIES` in `assets/js/i18n.js`:
   ```js
   "notes/<slug>.html": {
     title: "Short English title",
     summary: "One-sentence English summary of what this note is about."
   },
   ```
4. (Optional) Add a one-line link in `notes/index.html` and an entry to
   `notesIndex.*` keys in `I18N.zh` / `I18N.en`.
5. Create the redirect stub at `guides/<slug>.html`.

### Adding a new issue cover (Tier B — duplicated blocks)

1. Copy `issues/005.html` as the template.
2. Replace both `.wrap.issue-zh` and `.wrap.issue-en` content with the new
   issue's cards. Keep card counts and link sets identical between the
   two blocks.
3. Add `data-full-i18n-page="issue-006"` to `<body>` (use the new number).
4. Add the issue's English summary to `PAGE_SUMMARIES` in `i18n.js` (used
   as a fallback when the toggle button hasn't been clicked yet but the
   browser is asking for an EN snippet).
5. Update the homepage's Latest Issue card, Issues hub, and Archive list.
6. Make sure the back-link `data-i18n="issue005.back"` stays (it's the
   shared back-link key — see Bug #3 above).

### When translating, mind these constraints

- The toggle swaps `textContent`, so any **HTML structure inside a
  `data-i18n` element will be flattened**. If you need inline markup
  (e.g. `<strong>` inside a sentence), use `data-i18n-html` instead,
  which calls `innerHTML`.
- Translations live in `i18n.js`. Don't duplicate them across pages — add
  the key once, reference it from any HTML.
- The duplicated-block approach (`.issue-zh` / `.issue-en`) is better
  when the layout itself differs between languages (different number of
  cards, different ordering). Use it for issue covers and any long-form
  bilingual page where DOM rewriting would be brittle.

---

## 6. Caveats & known limits

- **JS required.** Users with JS off only see the Chinese content. There's
  no server-side fallback. Acceptable for our audience but worth knowing.
- **`<title>` swap only applies to pages with `data-i18n-title` on
  `<html>`.** Most note pages do NOT have this; their `<title>` stays
  Chinese even in EN mode. The reader-aid panel adds an English title
  inside the page body, so the experience still works.
- **OG / Twitter meta is not language-aware.** Social platforms read meta
  tags server-side. Sharing any URL renders the Chinese OG content. The
  per-page OG descriptions we added earlier (commit `1135b6b`) are still
  in place and unchanged by the i18n layer.
- **`PAGE_SUMMARIES` is parallel to but separate from `I18N.en`.** It
  exists specifically for the reader-aid panel on Chinese-only notes.
  When you fully translate a page via `data-i18n` attrs, you don't need a
  `PAGE_SUMMARIES` entry.
- **localStorage key.** `syneira-digest-lang` — clear it if you ever need
  to reset a tester's preference.

---

## 7. Files touched by the bilingual rollout

For reference / blame trail:

| Commit | What landed |
|---|---|
| `d64206b` | Shared bilingual framework: `assets/js/i18n.js` + script tag added to 38 pages + homepage / feedback / notes-index / tools-index refactored to use `data-i18n` |
| `a116ee5` | Full bilingual `issues/001.html` |
| `2d306be` | Full bilingual `issues/002.html` |
| `f2c2351` | Full bilingual `issues/003.html` |
| `1299b00` | Full bilingual `issues/004.html` |
| `f7ca429` | Full bilingual `issues/005.html` |
| `8ea018a`, `2a62481` | "checkpoint before codex" working states |

---

## 8. Quick verification commands

```bash
# Count translations (should match between zh and en sections)
python -c "import re; t=open('assets/js/i18n.js',encoding='utf-8').read(); \
  zh=t.split('zh: {')[1].split('en: {')[0]; en=t.split('en: {')[1]; \
  print('zh keys:', len(re.findall(r'\"[a-zA-Z0-9_.-]+\":',zh))); \
  print('en keys:', len(re.findall(r'\"[a-zA-Z0-9_.-]+\":',en)))"

# Find pages that load i18n.js
grep -l "i18n.js" index.html feedback.html issues/*.html notes/*.html tools/*.html

# Find data-i18n keys with no translation
python docs/scripts/i18n-audit.py     # (not committed; see audit script in this report)

# Verify all PAGE_SUMMARIES point to real files
python -c "import re,os; t=open('assets/js/i18n.js',encoding='utf-8').read(); \
  paths=re.findall(r'\"(notes/[a-z0-9-]+\.html|issues/[0-9]+\.html)\":', t); \
  [print('MISSING:', p) for p in paths if not os.path.isfile(p)] or print('All files exist.')"
```
