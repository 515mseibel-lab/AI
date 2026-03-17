# CoPilot Newsletter Process Documentation

This document outlines the end-to-end process used to create, format, and automate the CoPilot Newsletter.

## 1. Repository Setup
The project is structured within the `515mseibel-lab/AI` GitHub repository to keep instructions and outputs organized:
- **Instructions:** Stored in `Instructions/Features-CoPilot/` and `Instructions/Features-Claude/`.
- **Outputs:** Stored in `Newsletters/CoPilot/` and `Newsletters/Claude/`.

## 2. Instruction Definition
A core instruction file (`newsletter-instructions.md`) was created to guide the AI agent. It enforces:
- **Output Location:** `Newsletters/CoPilot/edition-XXX.md`
- **Historical Review:** Always check the past 20 editions to avoid duplicate content.
- **Content Structure:** 
  - Top 2 New Features (Windows)
  - 1 Cool Tip or Trick (Windows)
  - 1 "Now on Mobile" Feature (iOS/Android)
- **Data Sources:** Strict adherence to official Microsoft sources (Microsoft Copilot Blog, Tech Community, Microsoft 365 Roadmap, Microsoft Learn Release Notes, Windows Experience Blog).

## 3. Content Generation (Edition 001)
For the first edition, the agent performed deep research across official Microsoft release notes and blogs (specifically the February 2026 updates). 
- **Extracted Features:**
  - Edit Documents by Default with Copilot in Word
  - Copilot is Agentic in PowerPoint
  - Search for Meetings by Organizer using Copilot Chat
  - Copilot Mobile Widgets and Action Button
- **Drafting:** The content was drafted in Markdown format, focusing on plain-English explanations, "why it's useful" summaries, and step-by-step instructions suitable for basic users.

## 4. HTML Email Formatting
To make the newsletter easy to distribute via email, an HTML version (`edition-001.html`) was generated alongside the Markdown version.
- The HTML uses inline CSS and table-based layouts to ensure compatibility with major email clients (Outlook, Gmail, etc.).
- It features a professional design with a header, distinct feature cards, highlighted tips, and a clear footer with source citations.

## 5. Automation (GitHub Actions)
*Note: The GitHub Actions workflow file was drafted but could not be pushed automatically due to GitHub App permission restrictions regarding the `.github/workflows` directory.*

To fully automate the emailing process, a GitHub Actions workflow can be manually added to the repository. The workflow is designed to trigger whenever a new `.html` file is pushed to the `Newsletters/CoPilot/` directory.

### Manual Setup Instructions for Automation:
1. Create a file at `.github/workflows/auto-email-newsletter.yml` in your repository.
2. Paste the following code into the file:

```yaml
name: Auto-Email Newsletter

on:
  push:
    paths:
      - 'Newsletters/CoPilot/*.html'
    branches:
      - main

jobs:
  send-email:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 2

      - name: Get the newly added HTML file
        id: getfile
        run: |
          FILE=$(git diff --name-only HEAD^ HEAD | grep 'Newsletters/CoPilot/.*\.html$' | head -n 1)
          echo "file=$FILE" >> $GITHUB_OUTPUT
          if [ -z "$FILE" ]; then exit 1; fi
          EDITION=$(basename "$FILE" .html | sed 's/edition-//')
          echo "edition=$EDITION" >> $GITHUB_OUTPUT

      - name: Send email
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 465
          username: ${{ secrets.MAIL_USERNAME }}
          password: ${{ secrets.MAIL_PASSWORD }}
          subject: "New Copilot Updates: Edition ${{ steps.getfile.outputs.edition }}"
          to: ${{ secrets.MAIL_TO }}
          from: "Copilot Newsletter Bot"
          html_body: file://${{ steps.getfile.outputs.file }}
```

3. Go to your GitHub repository **Settings > Secrets and variables > Actions**.
4. Add the following repository secrets:
   - `MAIL_USERNAME`: Your sending email address (e.g., your Gmail address).
   - `MAIL_PASSWORD`: Your email app password (for Gmail, generate an App Password in your Google Account settings).
   - `MAIL_TO`: The email address(es) you want to send the newsletter to (comma-separated).

Once configured, any new HTML newsletter pushed to the repository will automatically be emailed to your list!
