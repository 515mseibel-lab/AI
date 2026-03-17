# CoPilot Newsletter Instructions

## Overview

These instructions define how Microsoft CoPilot should generate and store newsletter content for this project. The goal is to create an engaging, easy-to-read artifact that can be emailed to users of Microsoft Copilot.

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

## Approved Data Sources

To ensure accuracy and reliability, **only** use the following official Microsoft sources to gather information about new features, tips, and tricks. Do not use unverified third-party blogs, rumors, or speculative sources.

1. **Microsoft Copilot Blog**
   - Homepage: [https://www.microsoft.com/en-us/microsoft-copilot/blog/](https://www.microsoft.com/en-us/microsoft-copilot/blog/)
   - Release Notes: [https://www.microsoft.com/en-us/microsoft-copilot/blog/content-type/release-notes/](https://www.microsoft.com/en-us/microsoft-copilot/blog/content-type/release-notes/)
2. **Microsoft 365 Copilot Blog (Tech Community)**
   - [https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog](https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog)
3. **Microsoft 365 Roadmap**
   - [https://www.microsoft.com/en-us/microsoft-365/roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
4. **Microsoft Learn - Copilot Release Notes**
   - [https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes)
5. **Windows Experience Blog** (For Windows-specific Copilot features)
   - [https://blogs.windows.com/windowsexperience/](https://blogs.windows.com/windowsexperience/)

## Content Requirements

The newsletter must be formatted as an easy-to-read artifact suitable for emailing to basic users. It should focus primarily on **Copilot for Windows**, with a secondary section for mobile platforms.

### 1. Historical Review (Avoid Duplication)
Before generating a new edition, **always review the past 20 newsletters** in the `Newsletters/CoPilot/` directory. 
- Ensure that the features, tips, and tricks selected for the new edition have **not** been covered in the previous 20 editions.

### 2. Top 2 New Features (Copilot for Windows)
- Highlight the **top 2 highest-profile new features** available in Copilot for Windows.
- Provide a clear, simple explanation of what each feature does and why it is useful.
- Include **step-by-step instructions** on how a basic user can access and use the feature.
- Include placeholders for images (e.g., `![Image description](image-url)`) to illustrate the steps.

### 3. Cool Tip or Trick (Copilot for Windows)
- Include one "Cool Tip or Trick" for Copilot for Windows that is lesser-known or highly practical.
- This must be a unique tip not communicated in the past 20 newsletters.
- Provide clear, step-by-step instructions with image placeholders.

### 4. Now on Mobile (iOS & Android)
- Include a small section dedicated to mobile platforms.
- Highlight **1 new item, tip, or trick** specific to the mobile Copilot app.
- If the feature is available on both Apple (iOS) and Android, include instructions for both platforms. If it differs slightly, note the differences.
- Provide clear, step-by-step instructions with image placeholders.

## Newsletter Structure

Each newsletter file should follow this consistent structure:

- **Title** — The name of the newsletter and edition number (e.g., "Copilot Updates: Edition 001")
- **Date** — Publication date of the edition
- **Introduction** — A brief, welcoming summary of what is covered in this edition.
- **Top New Features in Copilot for Windows**
  - Feature 1 (Explanation, Use Case, Step-by-Step Instructions, Image Placeholders)
  - Feature 2 (Explanation, Use Case, Step-by-Step Instructions, Image Placeholders)
- **Cool Tip or Trick**
  - Tip/Trick (Explanation, Use Case, Step-by-Step Instructions, Image Placeholders)
- **Now on Mobile**
  - Mobile Feature/Tip (Explanation, iOS/Android Instructions, Image Placeholders)
- **Closing** — A brief sign-off encouraging users to try the new features.

## Notes

- Always use Markdown formatting for all output.
- Keep the tone helpful, accessible, and encouraging for basic users.
- Ensure step-by-step instructions are numbered and easy to follow.
- Do not store output in any other folder unless explicitly instructed.
