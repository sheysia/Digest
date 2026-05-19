# Editorial Workflow

This document defines the semi-automated weekly production workflow for Syneira Digest.

The goal is not to publish more content by volume. The goal is to make weekly curation repeatable while keeping the final editorial judgment human.

## Operating Model

Syneira Digest uses a three-stage workflow:

1. Intake
   - User-supplied links, notes, screenshots, articles, and ideas.
   - AI-sourced candidates from trusted feeds, product updates, research, and community signals.
   - Everything enters the weekly draft workspace before it becomes site content.

2. Editorial board
   - At least 10 candidates are prepared each week.
   - Each candidate gets a short summary, relevance note, score, risk note, and recommended content shape.
   - The editor chooses the final 3-5 main items, plus optional short updates.

3. Static publish
   - Selected items become a new issue cover, optional notes, optional tools, and homepage/archive updates.
   - Bilingual support, metadata, links, and visual consistency are checked before commit and push.

## Draft Privacy

This repository is connected to a public static site. Anything committed may be visible on GitHub Pages even if it is not linked from the homepage.

For that reason, dated weekly draft folders under `drafts/weekly/20*/` are ignored by git by default. Templates and workflow docs are committed; live editorial drafts should stay local unless intentionally force-added.

## Folder Layout

```text
drafts/
  weekly/
    README.md
    .gitignore
    _template/
      user-picks.md
      ai-candidates.yaml
      shortlist.md
      issue.yaml
      updates.md
      notes/README.md
      tools/README.md

scripts/
  digest/
    README.md
    new-week.cmd
    new-week.ps1
```

Run `scripts/digest/new-week.cmd` to create a local working folder for a new week.

## Weekly Cycle

### 1. Start the week

Create a local draft folder:

```powershell
.\scripts\digest\new-week.cmd -Week 2026-W21 -Issue 006 -Start 2026-05-18 -End 2026-05-24
```

This creates:

```text
drafts/weekly/2026-W21/
```

### 2. Add user picks

Put user-selected materials in `user-picks.md`.

Good input can be rough. Links, screenshots, pasted text, personal reactions, and "I think this is interesting because..." notes are all useful.

### 3. Prepare AI candidates

Use `ai-candidates.yaml` for AI-sourced options. Each week should have at least 10 serious candidates before final selection.

Candidates should be judged against Syneira's actual reader value, not general internet hype.

### 4. Build the shortlist

Use `shortlist.md` to group candidates into:

- Recommended
- Maybe
- Hold for later
- Reject

Each recommended candidate should include:

- Why it matters
- Why it fits Syneira
- Suggested format: issue card, note, tool, or update
- Verification or source risk

### 5. Editor selection

The editor chooses:

- 3-5 main issue cards
- 0-3 deep notes
- 0-2 durable tools
- any short updates

The selected structure goes into `issue.yaml`.

### 6. Generate site content

Selected material becomes:

- `issues/NNN.html`
- `notes/<slug>.html` for durable explainers or workflow guides
- `tools/<slug>.html` only for reusable interactive tools
- homepage latest issue, issue hub, and archive updates
- `assets/js/i18n.js` updates for bilingual labels or reader-aid summaries

## Scoring Rubric

Use 100 points:

| Dimension | Points | Meaning |
|---|---:|---|
| Relevance | 30 | Directly useful to Syneira readers, community, or likely workflows |
| Practicality | 25 | Reader can do something with it this week |
| Credibility | 15 | Source quality and cross-checkability |
| Freshness | 10 | Timely enough for this issue |
| Non-obviousness | 10 | Not just generic news everyone already saw |
| Tone fit | 10 | Clear, grounded, useful, not hype-driven |

Down-rank items that are pure funding news, generic launch posts, repeated themes, or hard to verify.

## Content Shape Rules

Use the smallest durable format that serves the reader:

- Issue card: core weekly signal; brief, opinionated, and connected to the reader.
- Note: reusable explanation, tutorial, workflow, or case study worth saving.
- Tool: interactive or durable utility; not a normal article.
- Update: short status change, incident, release, or useful link that does not need a full note.

## Bilingual Rules

Follow `docs/BILINGUAL.md`.

For issue covers:

- Use duplicated `.issue-zh` and `.issue-en` blocks.
- Keep ZH/EN card count and note links identical.
- Add `data-full-i18n-page="issue-NNN"` to `<body>`.
- Use the shared back-link key `nav.back`.

For individual notes:

- Keep body Chinese by default unless full translation is intentionally needed.
- Add a `PAGE_SUMMARIES` entry in `assets/js/i18n.js` for English reader-aid.

For index pages:

- Use `data-i18n` or `data-i18n-html`.
- Keep title, description, OG, Twitter, and favicon metadata complete.

## Publishing Checklist

Before major edits:

```powershell
git status
git add .
git commit -m "checkpoint before codex"
```

Before push:

- `git status -sb` is clean except intentional files.
- New issue appears on homepage Latest Issue, Issues hub, and Archive.
- All new notes are linked from the correct issue or index.
- All new pages load `assets/js/i18n.js`.
- `PAGE_SUMMARIES` includes every new Chinese-only note.
- Issue ZH/EN cards match in count, order, and links.
- No orphan duplicate files were introduced.
- OG/Twitter/favicons are present on new public pages.
- Local preview has no obvious layout break.

## Automation Roadmap

Phase 1, current:

- File-based workflow.
- Local weekly draft folders.
- Manual editorial selection.
- Codex-assisted writing, translation, assembly, and QA.

Phase 2:

- Generate `issues/NNN.html` from `issue.yaml`.
- Generate note shells from selected note drafts.
- Add an i18n/link audit script.

Phase 3:

- Maintain a source registry.
- Produce weekly candidate lists automatically.
- Keep human approval before anything becomes public site content.
