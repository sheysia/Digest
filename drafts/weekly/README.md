# Weekly Drafts

This folder supports the weekly Syneira Digest editorial workflow.

Tracked files:

- `_template/` contains reusable weekly planning templates.
- `.gitignore` keeps real dated draft folders local by default.

Local working folders should look like:

```text
drafts/weekly/2026-W21/
```

Create one with:

```powershell
.\scripts\digest\new-week.cmd -Week 2026-W21 -Issue 006 -Start 2026-05-18 -End 2026-05-24
```

Do not put sensitive material in committed files. This repository powers a public static site.
