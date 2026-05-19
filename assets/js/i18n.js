(() => {
const I18N = {
  zh: {
    "meta.title": "AI Digest by Syneira Lab",
    "meta.description": "AI Digest by Syneira Lab — 每周精选、实践手记、工作流洞察，以及贴近日常的 AI 应用案例。",
    "nav.about": "关于",
    "nav.latest": "最新",
    "nav.issues": "期刊",
    "nav.notes": "手记",
    "nav.tools": "工具",
    "nav.archive": "归档",
    "nav.who": "我们",
    "nav.voice": "声音",
    "nav.feedback": "反馈",
    "nav.lang": "EN",
    "hero.title": "每周精选 · AI 应用洞察",
    "hero.sub": "源于生活，立足应用",
    "hero.note": "聪明女性，真实工具，少一点噪音。",
    "hero.pill1": "工具上新",
    "hero.pill2": "趋势信号",
    "hero.pill3": "场景拆解",
    "hero.pill4": "用法洞察",
    "hero.pill5": "日报速递",
    "about.card1.title": "精选而非搬运",
    "about.card1.sub": "不是复制新闻，而是筛出真正值得看的内容",
    "about.card2.title": "贴合本地生态",
    "about.card2.sub": "扎根 DMV 社群的真实工作与生活",
    "about.card3.title": "女性增强视角",
    "about.card3.sub": "从女性专业人士的使用场景出发",
    "about.card4.title": "讨论拒绝焦虑",
    "about.card4.sub": "不制造 FOMO，只留下可判断的信息",
    "about.card5.title": "多元背景融合",
    "about.card5.sub": "技术、政策、医疗、金融、教育在这里相遇",
    "about.card6.title": "线上线下活动",
    "about.card6.sub": "从阅读到讨论，再到真实连接",
    "latest.label": "最新一期",
    "latest.summary": "6 条精选 + 6 篇手记 · AI 正在从聊天窗口走向长期任务",
    "latest.item1": "Google I/O 2026 — AI 从聊天框走向 agent 层",
    "latest.item2": "Codex in ChatGPT — 用手机遥控你的编程 AI",
    "latest.item3": "Hermes Agent — 开源 agent 的重点是长期记忆",
    "latest.item4": "CLI vs MCP — AI 工具之间怎么对话",
    "latest.item5": "GPT 和 Claude 为什么“想法不一样”？",
    "latest.item6": "成长证据库 — 不用等机会来了才整理自己",
    "latest.cta": "阅读本期 →",
    "explore.title": "把 AI 内容，延伸到真实的使用与实践",
    "explore.text": "从 Digest，到用法拆解与轻量工具，尝试把信息、判断与实际使用场景连接起来。",
    "explore.card1.text": "理解变化，建立判断",
    "explore.card2.title": "案例手记",
    "explore.card2.text": "从 prompt 到 workflow，把方法讲清楚",
    "explore.card3.title": "小工具",
    "explore.card3.text": "从真实场景里长出来的轻量实验",
    "explore.primary": "阅读最新一期 →",
    "explore.secondary": "进入 Group Salone ↗",
    "notes.label": "实例分享",
    "notes.title": "实例分享",
    "notes.lead": "把值得单独展开、值得反复参考的内容，从每期 Issue 中抽出来，沉淀成可以长期复用的案例手记与拆解。",
    "notes.card1.title": "Google I/O 2026 速报",
    "notes.card1.text": "两小时发布会筛成一条主线：Gemini 正在从聊天框变成跨产品的 agent 层。",
    "notes.card2.title": "Codex in ChatGPT — 手机遥控编程 AI",
    "notes.card2.text": "不是在手机上写代码，而是在分叉点批准、调整和接管长任务。",
    "notes.card3.title": "CLI vs MCP — AI 工具之间怎么对话",
    "notes.card3.text": "直接跑命令还是走标准协议？这决定 agent 的成本、安全和可用性。",
    "notes.card4.title": "成长证据库搭建指南",
    "notes.card4.text": "一个文件夹、五个文件，把职业成果变成随时可调用的素材库。",
    "notes.all": "查看全部手记 →",
    "issues.sub": "期刊归档与导航",
    "issues.live": "最新发布",
    "issues.archive": "归档",
    "issues.open": "打开本期 →",
    "issues.browse": "浏览本期 →",
    "tools.label": "样品小工具",
    "tools.text": "样品小工具 · 一些轻量实验页面，还在慢慢完善中",
    "tools.all": "查看全部 →",
    "archive.title": "往期归档",
    "who.label": "我们是谁 / 我们在做什么",
    "who.p1": "面向在 Washington D.C. 都会区（DMV）工作和生活的女性：有技术背景的工程师和开发者，也有非技术背景的政界、律师、医疗、金融分析等各领域专业人士。",
    "who.p2": "共同点是：高等教育背景，每天使用着 AI，审慎然而积极面对。我们研究和探讨 AI 怎么真正帮到自己的工作和生活，在时代洪流中坚持涓涓清流，不贩卖焦虑，不堆砌术语。每周十分钟，留下真实的体验。",
    "who.p3": "这里关心的是有用、可判断、能落地的 AI。我们从真实生活和工作出发，把信息翻译成行动。",
    "who.product1": "每周精选 5-10 条 AI 应用洞察，中英双语，说人话",
    "who.product2": "不定期日报，追踪当天最值得关注的 AI 动态",
    "who.product3": "社群讨论、经验分享、线下活动，彼此陪伴成长",
    "who.product4": "工具评测、工作流指南、实操 PDF，从试用到落地",
    "voice.p1": "我们从生活出发，而不是从技术出发。我们不只问“又出了什么模型”，更问“这能不能帮我省两个小时？”“不用写代码能不能用？”",
    "voice.p2": "在噪音里留下清晰信号：不炒作，不堆术语墙，不制造 FOMO。每周几分钟，只留下真正对你有用的东西。",
    "voice.p3": "这里不会有人告诉你“不学 AI 就会被淘汰”。你会看到一群聪明女性，按自己的节奏学习，把 AI 变成真正为自己工作的工具。",
    "voice.value1": "实用 > 炫酷",
    "voice.value2": "能用 > 能看",
    "voice.value3": "源于生活",
    "voice.value4": "立足应用",
    "notesIndex.meta.title": "手记 · AI Digest by Syneira Lab",
    "notesIndex.meta.description": "案例手记、用法拆解 · AI Digest by Syneira Lab",
    "notesIndex.kicker": "NOTES · 手记",
    "notesIndex.title": "从每期 Issue 里抽出来的案例手记",
    "notesIndex.lead": "从 prompt 到 workflow，从一闪而过的小技巧到完整的实操思路，这些是从日常使用 AI 过程里整理出来、值得反复回看的实例与拆解。",
    "notesIndex.googleIo.title": "Google I/O 2026 速报",
    "notesIndex.googleIo.text": "两小时发布会筛成一条主线：Gemini 正在从聊天框变成跨产品的 agent 层。",
    "notesIndex.codexMobile.title": "Codex in ChatGPT — 手机遥控编程 AI",
    "notesIndex.codexMobile.text": "不是在手机上写代码，而是在分叉点批准、调整和接管长任务。",
    "notesIndex.cliMcp.title": "CLI vs MCP — AI 工具之间怎么对话",
    "notesIndex.cliMcp.text": "直接跑命令还是走标准协议？这决定 agent 的成本、安全和可用性。",
    "notesIndex.growthBank.title": "成长证据库搭建指南",
    "notesIndex.growthBank.text": "一个文件夹、五个文件，把职业成果变成随时可调用的素材库。",
    "notesIndex.gptClaude.title": "GPT 和 Claude 为什么“想法不一样”？",
    "notesIndex.gptClaude.text": "从训练路线解释模型性格差异，帮你判断什么任务该用哪个。",
    "notesIndex.hermes.title": "Hermes Agent — 开源 agent 的长期记忆路线",
    "notesIndex.hermes.text": "一个本地运行、持久记忆、自我沉淀技能的 agent，适合观察下一代个人自动化。",
    "notesIndex.secondBrain.title": "用 AI 打造你的“第二大脑”",
    "notesIndex.secondBrain.text": "Building a Second Brain 实操版，5 步把信息变成可复用的知识系统。",
    "notesIndex.vibe.title": "Vibe Coding 前端微调神技",
    "notesIndex.vibe.text": "别让 AI 猜，让它造一个可调面板给你直接拖拽。",
    "notesIndex.mergecheck.title": "MergeCheck — 用代码验证 AI 输出",
    "notesIndex.mergecheck.text": "AI 帮你合并文件，靠不靠谱？一个用传统代码兜底的小工具诞生记。",
    "notesIndex.reminder.title": "Claude 一键推 iPhone 提醒",
    "notesIndex.reminder.text": "想到什么事直接扔过来，让 Claude 帮你推到手机日历。",
    "notesIndex.naming.title": "Claude 模型命名趣味阅读",
    "notesIndex.naming.text": "Haiku / Sonnet / Opus / Mythos：文学体裁命名背后的工程哲学。",
    "notesIndex.bots.title": "3 个 AI Bot · 5 分钟搭好就能用",
    "notesIndex.bots.text": "无代码起手的轻量 bot 配方，直接 copy 配置上手。",
    "notesIndex.ppt.title": "AI 做 PPT / Report / 配图指南",
    "notesIndex.ppt.text": "一篇打包讲清内容结构、视觉表达和配图工作流。",
    "notesIndex.jobs.title": "AI 自动求职助手指南",
    "notesIndex.jobs.text": "从岗位筛选到投递辅助，做一个长期可复用的求职 workflow。",
    "notesIndex.writing.title": "AI 写论文 / 长文工作流指南",
    "notesIndex.writing.text": "把资料整理、写作推进和定稿润色串成完整流程。",
    "notesIndex.notebook.title": "NotebookLM + Gemini + Notion 学习法",
    "notesIndex.notebook.text": "适合学习整理、知识沉淀和个人内容系统搭建。",
    "toolsIndex.meta.title": "工具 · AI Digest by Syneira Lab",
    "toolsIndex.meta.description": "轻量工具合集 · AI Digest by Syneira Lab",
    "toolsIndex.kicker": "TOOLS · 工具",
    "toolsIndex.title": "一些慢慢长出来的小工具",
    "toolsIndex.lead": "这些是从日常使用 AI 过程里长出来的小实验，有的还很粗糙，但都在往更真实的使用场景靠近。",
    "toolsIndex.ccf.text": "Claude 认证备考手账：AI 模拟题、课程追踪、视频记录、综合统计。",
    "toolsIndex.mergecheck.text": "用传统代码验证 AI 合并的文件：算指纹、对总和、防漏防错。",
    "toolsIndex.star.text": "记录状态与节奏的小工具。",
    "toolsIndex.cruise.text": "亲子出行规划（中文）。",
    "toolsIndex.birthday.text": "活动准备与清单管理。",
    "toolsIndex.style.text": "视觉风格实验场。",
    "feedback.meta.title": "反馈 · AI Digest by Syneira Lab",
    "feedback.meta.description": "留下你的想法、建议或问题——AI Digest by Syneira Lab 的留言区。",
    "feedback.eyebrow": "DMVoice · Feedback",
    "feedback.title": "留下<em>你的声音</em>",
    "feedback.lead": "一条想分享的工具、一个想被拆解的场景、一处可以更好的细节——欢迎留言。",
    "feedback.leadEn": "Tools you've been using, scenarios you'd like us to unpack, or places we can do better — leave a note below.",
    "feedback.prompt1.title": "推荐工具",
    "feedback.prompt1.text": "值得大家看一看的工具",
    "feedback.prompt2.title": "场景需求",
    "feedback.prompt2.text": "想让我们拆解的真实使用场景",
    "feedback.prompt3.title": "选题建议",
    "feedback.prompt3.text": "下一期可以写什么",
    "feedback.prompt4.title": "合作 & 反馈",
    "feedback.prompt4.text": "合作、纠错、建议都可以",
    "feedback.salonetteLead": "🤝 想跟读者直接聊聊？",
    "feedback.salonetteCta": "加入 Group Salone ↗",
    "feedback.comments": "留言",
    "feedback.commentHint": "由 Cusdis 提供 · 支持匿名留言 · 中英皆可",
    "feedback.back": "← 返回首页",
    "nav.back": "← 返回首页 / Back to Home",
    "footer.text": "由社群成员精选 · 每周一期 · 中英双语<br>筛选标准：实用 &gt; 炫酷 · 能用 &gt; 能看<br><br>Built with ❤️ in DMV<br><a href=\"https://github.com/你的用户名/ai-digest\" target=\"_blank\">GitHub</a>"
  },
  en: {
    "meta.title": "AI Digest by Syneira Lab",
    "meta.description": "AI Digest by Syneira Lab — weekly AI picks, practical notes, workflow insights, and real-life use cases.",
    "nav.about": "About",
    "nav.latest": "Latest",
    "nav.issues": "Issues",
    "nav.notes": "Notes",
    "nav.tools": "Tools",
    "nav.archive": "Archive",
    "nav.who": "Who",
    "nav.voice": "Voice",
    "nav.feedback": "Feedback",
    "nav.lang": "中文",
    "hero.title": "Weekly Picks · Practical AI Insight",
    "hero.sub": "Life first, tools that work",
    "hero.note": "Smart women, real tools, no noise.",
    "hero.pill1": "Tool Updates",
    "hero.pill2": "Trend Signals",
    "hero.pill3": "Use Cases",
    "hero.pill4": "Workflow Insights",
    "hero.pill5": "Daily Briefs",
    "about.card1.title": "Curated, Not Copied",
    "about.card1.sub": "We filter for what is actually worth your attention.",
    "about.card2.title": "Locally Grounded",
    "about.card2.sub": "Rooted in the real work and life of the DMV community.",
    "about.card3.title": "Women-First Lens",
    "about.card3.sub": "Built around how professional women actually use AI.",
    "about.card4.title": "No Anxiety Spiral",
    "about.card4.sub": "No FOMO theater, just clearer judgment.",
    "about.card5.title": "Cross-Field Learning",
    "about.card5.sub": "Tech, policy, healthcare, finance, and education in one room.",
    "about.card6.title": "Online and Offline",
    "about.card6.sub": "From reading, to discussion, to real connection.",
    "latest.label": "Latest Issue",
    "latest.summary": "6 picks + 6 notes · AI is moving from chat windows into long-running work",
    "latest.item1": "Google I/O 2026 — AI moves from chat box to agent layer",
    "latest.item2": "Codex in ChatGPT — remote-control your coding AI from your phone",
    "latest.item3": "Hermes Agent — open-source agents are becoming memory systems",
    "latest.item4": "CLI vs MCP — how AI tools talk to other tools",
    "latest.item5": "Why do GPT and Claude feel different?",
    "latest.item6": "Growth Evidence Bank — organize yourself before opportunity arrives",
    "latest.cta": "Read this issue →",
    "explore.title": "From AI Content to Real Use",
    "explore.text": "From the Digest to practical notes and lightweight tools, we connect information, judgment, and everyday use cases.",
    "explore.card1.text": "Understand change, build judgment",
    "explore.card2.title": "Practical Notes",
    "explore.card2.text": "From prompts to workflows, with the method made clear",
    "explore.card3.title": "Small Tools",
    "explore.card3.text": "Lightweight experiments grown from real use cases",
    "explore.primary": "Read Latest Issue →",
    "explore.secondary": "Access Group Salone ↗",
    "notes.label": "Practical Notes",
    "notes.title": "Practical Notes",
    "notes.lead": "We pull reusable ideas out of each issue and turn them into notes, walkthroughs, and reference pieces you can come back to.",
    "notes.card1.title": "Google I/O 2026 Recap",
    "notes.card1.text": "A two-hour keynote reduced to one line: Gemini is becoming a cross-product agent layer.",
    "notes.card2.title": "Codex in ChatGPT — Mobile Control for Coding AI",
    "notes.card2.text": "Not coding on your phone, but approving, redirecting, and taking over long-running work at the right moment.",
    "notes.card3.title": "CLI vs MCP — How AI Tools Talk",
    "notes.card3.text": "Direct commands or standardized protocol? The choice shapes agent cost, safety, and usability.",
    "notes.card4.title": "Growth Evidence Bank",
    "notes.card4.text": "One folder, five files: turn career evidence into reusable material before you need it.",
    "notes.all": "View all notes →",
    "issues.sub": "Issue archive and navigation",
    "issues.live": "Live now",
    "issues.archive": "Archive",
    "issues.open": "Open issue →",
    "issues.browse": "Browse issue →",
    "tools.label": "Sample Tools",
    "tools.text": "Small experiments and lightweight pages, still evolving.",
    "tools.all": "View All →",
    "archive.title": "Past Issues",
    "who.label": "Who We Are and What We Do",
    "who.p1": "AI Digest is for professional women living and working around the Washington D.C. metro area: engineers and developers, policy professionals, attorneys, healthcare leaders, financial analysts, educators, and more.",
    "who.p2": "What connects us is not a single job title. It is advanced education, daily contact with AI, and a careful but active desire to understand what actually helps in work and life.",
    "who.p3": "We care about useful, legible, grounded AI. We start from real situations and translate information into action.",
    "who.product1": "Weekly picks of 5-10 practical AI signals, bilingual and plainspoken",
    "who.product2": "Occasional daily signals tracking the most relevant AI updates",
    "who.product3": "Community discussion, shared experience, and offline connection",
    "who.product4": "Tool reviews, workflow guides, and hands-on resources from trial to adoption",
    "voice.p1": "We start from life, not from technology. We do not only ask what model just dropped. We ask: can this save me two hours? Can I use it without writing code?",
    "voice.p2": "A clear signal in the noise: no hype, no jargon walls, no FOMO. A few minutes a week, only what is genuinely useful.",
    "voice.p3": "No one here will tell you to learn AI or get left behind. You will find smart women learning at their own pace and turning AI into a tool that works for them.",
    "voice.value1": "Useful > Flashy",
    "voice.value2": "Usable > Impressive",
    "voice.value3": "Life First",
    "voice.value4": "Practice First",
    "notesIndex.meta.title": "Notes · AI Digest by Syneira Lab",
    "notesIndex.meta.description": "Practical notes and AI workflow walkthroughs from AI Digest by Syneira Lab.",
    "notesIndex.kicker": "NOTES",
    "notesIndex.title": "Reusable Notes Pulled From Each Issue",
    "notesIndex.lead": "From prompts to workflows, from tiny practical tricks to full operating patterns, these notes collect the AI use cases worth revisiting.",
    "notesIndex.googleIo.title": "Google I/O 2026 Recap",
    "notesIndex.googleIo.text": "A two-hour keynote reduced to one line: Gemini is becoming a cross-product agent layer.",
    "notesIndex.codexMobile.title": "Codex in ChatGPT — Mobile Control for Coding AI",
    "notesIndex.codexMobile.text": "Not coding on your phone, but approving, redirecting, and taking over long-running work at the right moment.",
    "notesIndex.cliMcp.title": "CLI vs MCP — How AI Tools Talk",
    "notesIndex.cliMcp.text": "Direct commands or standardized protocol? The choice shapes agent cost, safety, and usability.",
    "notesIndex.growthBank.title": "Growth Evidence Bank",
    "notesIndex.growthBank.text": "One folder, five files: turn career evidence into reusable material before you need it.",
    "notesIndex.gptClaude.title": "Why GPT and Claude Feel Different",
    "notesIndex.gptClaude.text": "A practical model-fit guide based on different alignment traditions and behavior patterns.",
    "notesIndex.hermes.title": "Hermes Agent and the Long-Term Memory Route",
    "notesIndex.hermes.text": "A local-first agent with persistent memory and reusable skills, useful for tracking the next personal automation wave.",
    "notesIndex.secondBrain.title": "Build Your Second Brain With AI",
    "notesIndex.secondBrain.text": "A practical five-step take on Building a Second Brain, turning scattered information into reusable knowledge.",
    "notesIndex.vibe.title": "A Frontend Fine-Tuning Trick for Vibe Coding",
    "notesIndex.vibe.text": "Stop making AI guess. Ask it to build a control panel you can adjust directly.",
    "notesIndex.mergecheck.title": "MergeCheck — Validate AI Output With Code",
    "notesIndex.mergecheck.text": "When AI merges files, how do you trust the result? A small traditional-code safety net.",
    "notesIndex.reminder.title": "Send iPhone Reminders With Claude",
    "notesIndex.reminder.text": "Drop a task into Claude and have it pushed into your phone reminders/calendar flow.",
    "notesIndex.naming.title": "A Playful Guide to Claude Model Names",
    "notesIndex.naming.text": "Haiku, Sonnet, Opus, Mythos: the engineering philosophy behind the literary names.",
    "notesIndex.bots.title": "3 AI Bots You Can Set Up in 5 Minutes",
    "notesIndex.bots.text": "Lightweight no-code bot recipes you can copy, configure, and use right away.",
    "notesIndex.ppt.title": "AI Guide for PPTs, Reports, and Visuals",
    "notesIndex.ppt.text": "A bundled guide to content structure, visual expression, and image workflows.",
    "notesIndex.jobs.title": "AI Job Search Assistant Guide",
    "notesIndex.jobs.text": "From job filtering to application support, a reusable long-term job-search workflow.",
    "notesIndex.writing.title": "AI Workflow for Papers and Long-Form Writing",
    "notesIndex.writing.text": "A complete flow for organizing sources, moving the draft forward, and polishing the final piece.",
    "notesIndex.notebook.title": "NotebookLM + Gemini + Notion Study Workflow",
    "notesIndex.notebook.text": "A workflow for study notes, knowledge capture, and building a personal content system.",
    "toolsIndex.meta.title": "Tools · AI Digest by Syneira Lab",
    "toolsIndex.meta.description": "A small collection of lightweight tools from AI Digest by Syneira Lab.",
    "toolsIndex.kicker": "TOOLS",
    "toolsIndex.title": "Small Tools Growing Out of Real Use",
    "toolsIndex.lead": "These are lightweight experiments born from everyday AI use. Some are still rough, but each points toward a real workflow.",
    "toolsIndex.ccf.text": "A Claude certification study planner with practice questions, course tracking, video logs, and stats.",
    "toolsIndex.mergecheck.text": "A traditional-code checker for AI-merged files: fingerprints, tie-outs, missing rows, and errors.",
    "toolsIndex.star.text": "A small tracker for rhythm, status, and consistency.",
    "toolsIndex.cruise.text": "A Chinese-language family cruise planning tool.",
    "toolsIndex.birthday.text": "A party preparation and checklist manager.",
    "toolsIndex.style.text": "A playground for visual style experiments.",
    "feedback.meta.title": "Feedback · AI Digest by Syneira Lab",
    "feedback.meta.description": "Leave thoughts, suggestions, questions, or topic ideas for AI Digest by Syneira Lab.",
    "feedback.eyebrow": "DMVoice · Feedback",
    "feedback.title": "Leave <em>Your Voice</em>",
    "feedback.lead": "Share a tool, a scenario you want us to unpack, or a detail we could improve.",
    "feedback.leadEn": "Tools you've been using, scenarios you'd like us to unpack, or places we can do better — leave a note below.",
    "feedback.prompt1.title": "Recommend a Tool",
    "feedback.prompt1.text": "Tools worth a look",
    "feedback.prompt2.title": "Request a Scenario",
    "feedback.prompt2.text": "Workflows you want unpacked",
    "feedback.prompt3.title": "Suggest a Topic",
    "feedback.prompt3.text": "Ideas for the next issue",
    "feedback.prompt4.title": "Collaborate or Comment",
    "feedback.prompt4.text": "Corrections, ideas, or collaboration",
    "feedback.salonetteLead": "🤝 Want to talk directly with readers?",
    "feedback.salonetteCta": "Access Group Salone ↗",
    "feedback.comments": "Comments",
    "feedback.commentHint": "Powered by Cusdis · anonymous comments supported · Chinese or English welcome",
    "feedback.back": "← Back to home",
    "nav.back": "← Back to Home",
    "footer.text": "Curated by community members · Weekly · Bilingual<br>Filter: useful &gt; flashy · usable &gt; impressive<br><br>Built with ❤️ in DMV<br><a href=\"https://github.com/你的用户名/ai-digest\" target=\"_blank\">GitHub</a>"
  }
};

const PAGE_SUMMARIES = {
  "issues/006.html": {
    title: "Issue #006",
    summary: "Google I/O 2026, Codex mobile, Hermes Agent, CLI vs MCP, model-fit differences between GPT and Claude, and a practical growth evidence bank workflow."
  },
  "issues/005.html": {
    title: "Issue #005",
    summary: "AI moves into companies, communities, and everyday workflows: Claude's enterprise and agent strategy, China Quest, the Markdown-vs-HTML debate, enterprise adoption, Salonette, Claude Code /goal, and Everything Claude Code."
  },
  "notes/google-io-2026-recap.html": {
    title: "Google I/O 2026 Recap",
    summary: "A practical recap of Google I/O 2026, focusing on Gemini 3.5, Spark, Daily Brief, Antigravity, Search, and the move from chatbot to agent layer."
  },
  "notes/codex-in-chatgpt.html": {
    title: "Codex in ChatGPT Mobile",
    summary: "How OpenAI's Codex mobile experience lets developers monitor, approve, and redirect long-running coding work from the ChatGPT mobile app."
  },
  "notes/hermes-agent-explainer.html": {
    title: "Hermes Agent",
    summary: "An explainer on Hermes Agent and why local memory, reusable skills, and always-on agent behavior matter for personal automation."
  },
  "notes/cli-vs-mcp.html": {
    title: "CLI vs MCP",
    summary: "A plain-language breakdown of two ways AI agents connect to tools: direct command-line calls and standardized MCP-style integrations."
  },
  "notes/gpt-vs-claude-design.html": {
    title: "Why GPT and Claude Feel Different",
    summary: "A practical guide to how different alignment traditions shape everyday model behavior, and when to use GPT or Claude."
  },
  "notes/growth-evidence-bank.html": {
    title: "Growth Evidence Bank",
    summary: "A career workflow for collecting quantified wins, project history, feedback, and learning records before an opportunity arrives."
  },
  "issues/004.html": {
    title: "Issue #004",
    summary: "A weekly set of AI picks and practical notes, including Claude workflows, finance agents, and hands-on ways to turn AI updates into usable judgment."
  },
  "issues/003.html": {
    title: "Issue #003",
    summary: "A previous AI Digest issue collecting practical AI signals, tools, and use cases for professional readers."
  },
  "issues/002.html": {
    title: "Issue #002",
    summary: "An archive issue with AI picks and deep-dive guides, focused on practical workflows rather than hype."
  },
  "issues/001.html": {
    title: "Issue #001",
    summary: "The first archive issue of AI Digest, establishing the site's practical, community-aware lens on AI use."
  },
  "notes/claude-suite-guide.html": {
    title: "Claude Is More Than Chat",
    summary: "A five-layer guide to Claude: Chat, Project, Cowork, Code, and Design, with practical examples for when each layer is useful."
  },
  "notes/claude-two-moves.html": {
    title: "Two Claude Moves, One Strategy",
    summary: "A read on Anthropic's paired enterprise and developer moves: AWS access on one side, multi-agent orchestration on the other."
  },
  "notes/spotlight-china-quest.html": {
    title: "China Quest",
    summary: "A community-built interactive Chinese culture game for kids, created with AI support for a school multicultural night."
  },
  "notes/digest-md-vs-html.html": {
    title: "Markdown or HTML?",
    summary: "A practical look at when AI output should stay simple in Markdown and when HTML is better for richer, shareable artifacts."
  },
  "notes/salonette-build-guide.html": {
    title: "Building Salonette",
    summary: "A build diary for creating a community platform with Supabase, Next.js, and Claude Code, with product decisions and tradeoffs."
  },
  "notes/claude-code-goal.html": {
    title: "Claude Code /goal",
    summary: "How to use goal-oriented Claude Code tasks by defining machine-checkable completion conditions."
  },
  "notes/ecc-breakdown.html": {
    title: "Everything Claude Code",
    summary: "A practical breakdown of a large Claude Code configuration pack: what to install, what to skip, and how to choose by workflow."
  },
  "notes/ai-enters-enterprise.html": {
    title: "AI Enters Enterprise Back Offices",
    summary: "Why AI companies are moving from APIs into enterprise operating systems, procurement paths, and embedded workflows."
  },
  "notes/anthropic-finance-agents.html": {
    title: "Anthropic Finance Agents",
    summary: "A practical read on finance-oriented AI agents and what they imply for analysts, operations, and knowledge work."
  },
  "notes/apple-ai-wearables.html": {
    title: "Apple AI and Wearables",
    summary: "Signals around Apple's AI direction and wearable devices, with attention to everyday use rather than launch-stage hype."
  },
  "notes/ai-job-search.html": {
    title: "AI Job Search Assistant",
    summary: "A reusable workflow for using AI in job search: filtering roles, preparing applications, and organizing the process."
  },
  "notes/ai-bots.html": {
    title: "Three AI Bots",
    summary: "No-code bot recipes that can be configured quickly for lightweight everyday tasks."
  },
  "notes/ppt-report-guide.html": {
    title: "AI for PPTs and Reports",
    summary: "A workflow for turning content structure, visual expression, and image generation into usable decks and reports."
  },
  "notes/second-brain.html": {
    title: "Build a Second Brain With AI",
    summary: "A practical workflow for turning scattered notes and sources into a reusable personal knowledge system."
  },
  "notes/notebook-workflow.html": {
    title: "NotebookLM + Gemini + Notion",
    summary: "A study and knowledge-management workflow using NotebookLM, Gemini, and Notion."
  },
  "notes/writing-guide.html": {
    title: "AI Writing Workflow",
    summary: "A long-form writing workflow that connects source organization, drafting, revision, and final polish."
  },
  "notes/mergecheck.html": {
    title: "MergeCheck",
    summary: "How a traditional-code reconciliation tool can verify AI-assisted file merges and catch missing rows or tie-out errors."
  },
  "notes/vibe-coding-tip.html": {
    title: "A Vibe Coding UI Trick",
    summary: "A frontend tuning pattern: ask AI to build adjustable controls instead of guessing visual values through repeated prompts."
  },
  "notes/claude-reminder-demo.html": {
    title: "Claude to iPhone Reminders",
    summary: "A small workflow for turning a task mentioned in conversation into a phone reminder or calendar item."
  },
  "notes/claude-naming-guide.html": {
    title: "Claude Model Names",
    summary: "A light guide to the literary naming pattern behind Claude models and what those names imply."
  },
  "notes/community-salonette.html": {
    title: "Community Salonette",
    summary: "A note about community discussion, shared learning, and lightweight coordination around AI practice."
  },
  "notes/ppt-skills-picks.html": {
    title: "PPT Skills Picks",
    summary: "A curated set of tools and workflows for presentation and report-making with AI."
  },
  "notes/outfit-ai-showdown.html": {
    title: "Outfit AI Showdown",
    summary: "A comparison-style note on AI tools for styling, outfits, and everyday visual decision support."
  },
  "notes/ai-pets-showdown.html": {
    title: "AI Pets Showdown",
    summary: "A playful comparison of AI companion products and what they reveal about consumer AI."
  },
  "notes/trend-signal-agent.html": {
    title: "Trend Signal Agent",
    summary: "A lightweight agent idea for tracking trend signals and turning scattered updates into usable summaries."
  },
  "tools/star-tracker.html": {
    title: "Star Tracker",
    summary: "A small interactive tracker for rhythm, status, and consistency."
  },
  "tools/cruise-planner-zh.html": {
    title: "Cruise Planner",
    summary: "A Chinese-language family cruise planning tool."
  },
  "tools/birthday-planner.html": {
    title: "Birthday Planner",
    summary: "A party preparation and checklist tool for planning guests, food, activities, and logistics."
  },
  "tools/style-playground.html": {
    title: "Style Playground",
    summary: "A visual style playground for experimenting with layout, color, and presentation directions."
  }
};

function normalizedPath() {
  const path = decodeURIComponent(window.location.pathname).replace(/\\/g, '/');
  const digestIndex = path.toLowerCase().lastIndexOf('/digest/');
  return digestIndex >= 0 ? path.slice(digestIndex + '/Digest/'.length) : path.replace(/^\/+/, '');
}

function ensureReaderAid() {
  if (document.querySelector('[data-full-i18n-page]')) return;
  const key = normalizedPath();
  const page = PAGE_SUMMARIES[key];
  if (!page || document.querySelector('[data-reader-aid]')) return;

  const style = document.createElement('style');
  style.textContent = `
    .i18n-reader-aid {
      display: none;
      max-width: 720px;
      margin: 18px auto 0;
      padding: 14px 18px;
      border: 1px solid rgba(126, 115, 255, 0.16);
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(126, 115, 255, 0.09), rgba(111, 199, 197, 0.07));
      color: #2a2d47;
      font-family: "Noto Sans SC", system-ui, sans-serif;
      font-size: 13px;
      line-height: 1.7;
    }
    .i18n-reader-aid strong {
      display: block;
      margin-bottom: 3px;
      color: #1A1A2E;
      font-size: 14px;
    }
    html[lang="en"] .i18n-reader-aid { display: block; }
    @media (max-width: 760px) {
      .i18n-reader-aid { margin: 14px 18px 0; }
    }
  `;
  document.head.appendChild(style);

  const aid = document.createElement('aside');
  aid.className = 'i18n-reader-aid';
  aid.setAttribute('data-reader-aid', '');
  aid.innerHTML = `<strong>${page.title}</strong><span>${page.summary}</span>`;
  document.body.prepend(aid);
}

function applyLanguage(lang) {
  const messages = I18N[lang] || I18N.zh;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && messages[titleKey]) document.title = messages[titleKey];
  const description = document.querySelector('meta[name="description"]');
  const descriptionKey = document.documentElement.getAttribute('data-i18n-description');
  if (description && descriptionKey && messages[descriptionKey]) {
    description.setAttribute('content', messages[descriptionKey]);
  }

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (messages[key]) node.textContent = messages[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const key = node.getAttribute('data-i18n-html');
    if (messages[key]) node.innerHTML = messages[key];
  });

  localStorage.setItem('syneira-digest-lang', lang);
}

function ensureLanguageToggle() {
  if (document.querySelector('[data-lang-toggle]')) return;

  const style = document.createElement('style');
  style.textContent = `
    .site-lang-toggle {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 9999;
      border: 1px solid rgba(112, 112, 196, 0.24);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      box-shadow: 0 8px 24px rgba(26, 22, 66, 0.14);
      color: #1A1A2E;
      cursor: pointer;
      font-family: "Noto Sans SC", system-ui, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      min-width: 54px;
      padding: 10px 13px;
      transition: transform 0.2s, background 0.2s, border-color 0.2s;
    }
    .site-lang-toggle:hover {
      background: #ffffff;
      border-color: rgba(112, 112, 196, 0.48);
      transform: translateY(-1px);
    }
    @media (max-width: 480px) {
      .site-lang-toggle {
        right: 12px;
        bottom: 12px;
        padding: 9px 12px;
        font-size: 11px;
      }
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'site-lang-toggle';
  button.setAttribute('aria-label', 'Switch language');
  button.setAttribute('data-lang-toggle', '');
  button.innerHTML = '<span data-i18n="nav.lang">EN</span>';
  document.body.appendChild(button);
}

ensureLanguageToggle();
ensureReaderAid();
const savedLang = localStorage.getItem('syneira-digest-lang') || 'zh';
applyLanguage(savedLang);

document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
  toggle.addEventListener('click', () => {
  const current = localStorage.getItem('syneira-digest-lang') || 'zh';
  applyLanguage(current === 'zh' ? 'en' : 'zh');
  });
});
})();
