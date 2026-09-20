# Agent Guardrails & Operating Guidelines

This document outlines mandatory rules, command restrictions, and safety guardrails for this portfolio repository. The agent must strictly observe these directives during all operations.

---

## 1. Command Safety & Prohibited Operations

### ⛔ Strictly Prohibited (Never Run Under Any Circumstances)
- **Destructive Deletions**:
  - PowerShell: `Remove-Item -Recurse -Force`, `del /s /q`, `rmdir /s /q`
  - Bash: `rm -rf`, `rm -r`
- **Destructive Git Operations**:
  - `git push --force` or `git push -f`
  - `git reset --hard`
  - `git clean -fd` (force deleting untracked files)
  - `git branch -D` (force deleting branches)
- **Remote & Execution Vulnerabilities**:
  - Never execute arbitrary downloaded scripts (e.g. `curl ... | bash`, `Invoke-Expression (Invoke-WebRequest ...)`).
  - Never modify system credentials, SSH keys, or git auth managers.

### ⚠️ Review Required (Confirm Before Executing)
- Pushing to remote repositories (`git push`) unless the user explicitly prompted to push.
- Deleting files or removing directories.
- Installing global software or tools outside project dependencies.

---

## 2. Workspace & Sensitive Data Protection

- **Workspace Boundary**:
  - Confine all file creations, edits, and terminal commands strictly within this project repository.
  - Never read, write, or delete files outside the repository without explicit instruction.
- **Sensitive Files & Secrets**:
  - Never inspect, log, or commit sensitive files (`.env`, `id_rsa`, `*.pem`, `*.key`, personal access tokens).
  - Never stage credentials or secrets into git.
- **Non-Destructive Edits**:
  - Use precise, targeted file edits rather than replacing entire files.
  - Preserve existing documentation, comments, and unrelated project content.

---

## 3. Portfolio & Jekyll Site Integrity

- **Frontmatter & Liquid Syntax**:
  - Maintain valid YAML frontmatter syntax (`---` header) on all Markdown pages in `_pages/` and `_projects/`.
  - Ensure Liquid tags (e.g. `{% include figure.liquid %}`) and LaTeX math formulas (`$...$`, `$$...$$`) remain syntactically valid.
- **Core Site Configuration**:
  - Do not alter `_config.yml` `url` or `baseurl` unless explicitly instructed (to avoid breaking live asset paths on GitHub Pages).
  - Protect `.github/workflows/deploy.yml` from unintended changes.
- **Git Commit Discipline**:
  - Check `git status` before committing to avoid staging unintended files.
  - Write concise, descriptive commit messages describing the changes made.
