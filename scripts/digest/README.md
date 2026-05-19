# Digest Scripts

Small helper scripts for the Syneira Digest editorial workflow.

## New week

Create a local weekly draft folder from the committed template:

```powershell
.\scripts\digest\new-week.cmd -Week 2026-W21 -Issue 006 -Start 2026-05-18 -End 2026-05-24
```

Dated draft folders are ignored by git by default because they may contain unpublished editorial material.
