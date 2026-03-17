# CoPilot Newsletter Instructions

## Overview

These instructions define how Microsoft CoPilot should generate and store newsletter content for this project.

## Output Storage

All newsletter output produced by CoPilot **must be saved** to the following directory in this repository:

```
Newsletters/CoPilot/
```

Each newsletter edition should be stored as its own Markdown file within that folder, using a consistent naming convention such as:

```
Newsletters/CoPilot/edition-001.md
Newsletters/CoPilot/edition-002.md
```

## File Naming Convention

| Field | Format | Example |
|---|---|---|
| Prefix | `edition-` | `edition-` |
| Edition Number | Three-digit zero-padded integer | `001`, `002`, `003` |
| Extension | `.md` (Markdown) | `.md` |

## Newsletter Structure

Each newsletter file should follow a consistent structure, including at minimum:

- **Title** — The name of the newsletter and edition number
- **Date** — Publication date of the edition
- **Introduction** — A brief summary of what is covered in this edition
- **Sections** — The main content, organized into clearly labeled sections
- **Closing** — A sign-off or call to action

## Notes

- Always use Markdown formatting for all output.
- Do not store output in any other folder unless explicitly instructed.
- If a new subfolder is needed within `Newsletters/CoPilot/`, confirm with the user before creating it.
