# Microsoft 365 Copilot Newsletter Instructions

This document contains the complete instructions, requirements, and process for generating the monthly **DCN Tech Corner: Microsoft 365 Copilot Update** newsletter.

## 1. Core Requirements & Focus

*   **Primary Focus:** The newsletter MUST focus **exclusively on Microsoft 365 Copilot** (the enterprise/work version that requires a paid license and integrates with M365 apps like Word, Excel, PowerPoint, Teams, and Outlook). Do NOT include features for the free consumer version of Copilot or Copilot Pro unless they also apply to the enterprise version.
*   **Target Audience:** Basic users at Dental Crafters Network (DCN). The tone should be friendly, energetic, approachable, and jargon-free.
*   **Branding:** The newsletter must use the DCN color palette (Teal `#00C1CF`, Deep Teal `#0097A7`, Purple `#8D6DC4`, Crimson `#B03A2E`) and include the DCN header/footer branding.
*   **Historical Review:** Always review the past 20 newsletters in the `Newsletters/CoPilot/` folder to ensure no features, tips, or tricks are repeated.

## 2. Newsletter Structure (5 Sections)

Each edition must contain exactly 5 content items, prioritized as follows:

1.  **💬 Copilot Chat Feature 1:** A high-profile new feature specifically for Microsoft 365 Copilot Chat (web or Teams).
2.  **💬 Copilot Chat Feature 2:** Another new feature or advanced capability for Copilot Chat.
3.  **🆕 Also New in Microsoft 365:** A new Copilot feature integrated into a specific M365 app (e.g., Outlook, Word, PowerPoint).
4.  **💡 Cool Tip of the Month:** A lesser-known tip, trick, or prompt that users can try right away.
5.  **📱 Now on Mobile:** A feature or tip specific to the Microsoft 365 or Copilot mobile apps (must include both iOS and Android instructions if applicable).

## 3. Content Format for Each Section

Every section must include:
*   **Catchy Title**
*   **💡 What's New / The Trick:** A plain-English explanation of the feature.
*   **🌟 Why You'll Love It:** The practical benefit or time-saving value for the user.
*   **Screenshot:** A high-quality image demonstrating the feature (see Image Guidelines below).
*   **📋 How To Use It — Step by Step:** Numbered, easy-to-follow instructions.
*   **💬 Example Prompt:** A specific prompt the user can copy and paste to try it out.
*   **Source & Status:** A footnote indicating rollout status and linking to the official Microsoft source.

## 4. Image Guidelines

*   **Real Screenshots First:** Always attempt to source real product screenshots from official Microsoft blogs or documentation.
*   **AI Generation as Fallback:** If a real screenshot cannot be found, generate a clean, realistic UI illustration using AI.
*   **Embedding:** All images MUST be converted to base64 and embedded directly into the final HTML file so the newsletter functions as a standalone artifact that can be emailed without broken image links.

## 5. Approved Official Sources

Do not use rumors or third-party blogs. Only source features from:
1.  [Microsoft 365 Copilot Blog (Tech Community)](https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog)
2.  [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
3.  [Microsoft Learn - Copilot Release Notes](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes)
4.  [Official Microsoft Copilot Blog](https://www.microsoft.com/en-us/microsoft-copilot/blog/)

## 6. Output & Delivery

*   **File Location:** Save all final HTML newsletters to `Newsletters/CoPilot/edition-XXX.html`.
*   **Format:** A single, self-contained HTML file with inline CSS and base64 embedded images.
*   **Delivery:** The HTML file can be opened in any web browser. The user can then select all (Ctrl+A / Cmd+A), copy, and paste directly into an Outlook or Gmail compose window to send to the team with perfect formatting.

## 7. Automation (Optional)

A GitHub Actions workflow (`.github/workflows/auto-email-newsletter.yml`) has been drafted to automatically email new editions when they are pushed to the repository. To enable this:
1.  Ensure the workflow file is committed to the repository.
2.  Add the following repository secrets in GitHub: `MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_TO`.
