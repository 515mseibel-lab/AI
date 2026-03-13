<!--
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 MANUS EXECUTION PROMPT — SAY: "Run the AI-Industry-Newsletter from my Git repository"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You are Manus, an autonomous AI agent. When the user says "Run the AI-Industry-Newsletter
from my Git repository", execute the following steps precisely and completely.

GITHUB REPOSITORY: 515mseibel-lab/AI

STEP 1 — LOAD INSTRUCTIONS
  Clone or pull the latest version of the repository: 515mseibel-lab/AI
  Navigate to the Instructions folder:
    GitHub Path: 515mseibel-lab/AI / Instructions / AI-Industry-Newsletter /
    Direct URL:  https://github.com/515mseibel-lab/AI/tree/main/Instructions/AI-Industry-Newsletter
  Find the NEWEST markdown (.md) file in that folder (sort by date modified, take the most recent one).
  Load ALL instructions, source libraries, rating methodology, and formatting rules from that file.
  This file is your single source of truth — follow it completely.

STEP 2 — REVIEW PAST NEWSLETTERS (DEDUPLICATION CHECK)
  Navigate to the Newsletters folder:
    GitHub Path: 515mseibel-lab/AI / Newsletters / AI-Industry /
    Direct URL:  https://github.com/515mseibel-lab/AI/tree/main/Newsletters/AI-Industry
  Load the 10 most recent newsletter files (sort by filename/date, newest first).
  Catalog every article topic, story, and subject covered across those 10 editions.
  You will use this catalog to avoid repetition in the new edition.

STEP 3 — RESEARCH AND BUILD THE NEW EDITION
  Research and select stories for this week's edition following the source tiers,
  signal spectrum rating system, and editorial standards defined in this file.
  DEDUPLICATION RULE: Do NOT cover any topic already covered in the last 10 newsletters
  UNLESS there is meaningful new information. If new information exists on a previously
  covered topic, you MAY include it — label it as a follow-up story.
  Target: 5 stories per edition.

STEP 4 — BUILD ALL THREE OUTPUT FORMATS
  Build the newsletter in all three formats (see OUTPUT FORMAT section below):
    a) PDF  → saved to Newsletters/AI-Industry/
    b) Markdown (.md) → saved to Newsletters/AI-Industry/
    c) Web app update → update the React data file and rebuild the static site

STEP 5 — UPDATE THE WEB APP
  The live interactive newsletter web app lives at:
    Manus project: ai-signal-newsletter (at /home/ubuntu/ai-signal-newsletter)
    Live URL: https://515mseibel-lab.github.io/AI/Newsletters/AI_Signal/
  To update it for a new edition:
    a) Edit the data file: /home/ubuntu/ai-signal-newsletter/client/src/lib/newsletterData.ts
       - Update the edition object (number, date, editorNote)
       - Replace the stories array with the new edition's 5 stories
       - Replace the pipeline array with the new watch list
       - Add the new edition to the editionHistory array
    b) Run: cd /home/ubuntu/ai-signal-newsletter && pnpm build
    c) Copy build output to the AI repo:
       rm -rf ~/AI-Industry-Newsletter/docs/Newsletters/AI_Signal/assets
       rm -f ~/AI-Industry-Newsletter/docs/Newsletters/AI_Signal/index.html
       rm -f ~/AI-Industry-Newsletter/docs/Newsletters/AI_Signal/404.html
       cp -r /home/ubuntu/ai-signal-newsletter/dist/public/. ~/AI-Industry-Newsletter/docs/Newsletters/AI_Signal/
       rm -rf ~/AI-Industry-Newsletter/docs/Newsletters/AI_Signal/__manus__
    d) The 404.html SPA redirect and docs/index.html root redirect are already in place —
       do NOT delete them. Only replace index.html and assets/ inside AI_Signal/.

STEP 6 — SAVE EVERYTHING TO GITHUB
  Commit and push all new files in one commit:
    - Newsletters/AI-Industry/AI_Signal_Edition_###_YYYY-MM-DD.pdf
    - Newsletters/AI-Industry/AI_Signal_Edition_###_YYYY-MM-DD.md
    - docs/Newsletters/AI_Signal/index.html (rebuilt web app)
    - docs/Newsletters/AI_Signal/assets/ (rebuilt assets)
  Commit message: "Add AI Signal Edition ### — YYYY-MM-DD"
  Also update the STORY LOG and EDITION HISTORY sections of this instructions file
  and commit that too.

STEP 7 — UPDATE THIS INSTRUCTIONS FILE
  After each edition, update:
    - The STORY LOG section: add a new entry for the edition just published
    - The FUTURE STORY PIPELINE table: mark resolved items, add new watch items
    - The EDITION HISTORY table: add the new edition row
    - The "Last updated" line at the bottom of this file
  Commit message: "Update instructions: add Edition ### story log and pipeline"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF MANUS EXECUTION PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

# 📡 AI SIGNAL — Newsletter Project Tracker
> *Ground News–style AI industry coverage, filtered by: **Hearsay & Conjecture vs. Reality***

---

## 📁 GITHUB REPOSITORY LOCATIONS

| Folder | GitHub Path | Direct URL |
|--------|-------------|------------|
| **Instructions** (this file) | `515mseibel-lab/AI / Instructions / AI-Industry-Newsletter` | [View on GitHub](https://github.com/515mseibel-lab/AI/tree/main/Instructions/AI-Industry-Newsletter) |
| **Newsletter Archive** (PDF + Markdown editions) | `515mseibel-lab/AI / Newsletters / AI-Industry` | [View on GitHub](https://github.com/515mseibel-lab/AI/tree/main/Newsletters/AI-Industry) |
| **Live Web App** (GitHub Pages) | `515mseibel-lab/AI / docs / Newsletters / AI_Signal` | [View on GitHub](https://github.com/515mseibel-lab/AI/tree/main/docs/Newsletters/AI_Signal) |
| **Live Public URL** | GitHub Pages | [https://515mseibel-lab.github.io/AI/Newsletters/AI_Signal/](https://515mseibel-lab.github.io/AI/Newsletters/AI_Signal/) |

---

## ⚙️ NEWSLETTER BUILD INSTRUCTIONS

> These rules govern how every edition of AI Signal is produced. Follow them in order.

### 1. Always Use the Newest Instructions File
When building a new newsletter edition, clone or pull the repository `515mseibel-lab/AI` and open the **Instructions Folder** at `Instructions/AI-Industry-Newsletter`. Sort files by date modified. **Use only the newest markdown file** as your instruction source. Ignore older versions.

### 2. Deduplication — Check the Last 10 Newsletters
Before selecting stories, open the **Newsletter Archive** at `Newsletters/AI-Industry` and review the **10 most recent editions**.
- **Do NOT repeat any article topic** already covered in those 10 editions — unless there is meaningful new information on that topic.
- **If new information exists** on a previously covered topic, you MAY revisit it. Combine the new information with brief prior context to give readers continuity. Clearly label it as a follow-up (e.g., *"🔄 Follow-Up: [Original Story Title]"*).
- Build a quick internal catalog of covered topics before choosing new stories to avoid accidental repetition.

### 3. Output Formats — Build All Three Every Edition

Every edition produces three outputs, all committed to GitHub in the same commit:

| Priority | Format | Location | Filename |
|----------|--------|----------|----------|
| ✅ **1** | **PDF** | `Newsletters/AI-Industry/` | `AI_Signal_Edition_###_YYYY-MM-DD.pdf` |
| ✅ **2** | **Markdown (.md)** | `Newsletters/AI-Industry/` | `AI_Signal_Edition_###_YYYY-MM-DD.md` |
| ✅ **3** | **Web App update** | `docs/Newsletters/AI_Signal/` | Rebuilt React static site (see Step 5 above) |

### 4. Web App Architecture

The live interactive newsletter is a React + Tailwind static web app with the following structure:

```
/home/ubuntu/ai-signal-newsletter/          ← Manus project root
  client/src/lib/newsletterData.ts          ← ALL EDITION CONTENT LIVES HERE
  client/src/pages/Home.tsx                 ← Main newsletter page (do not modify for content updates)
  vite.config.ts                            ← base: '/AI/Newsletters/AI_Signal/' (do not change)
  dist/public/                              ← Build output (generated by pnpm build)

GitHub repo (AI):
  docs/
    index.html                              ← Root redirect (do not delete)
    Newsletters/
      AI_Signal/
        index.html                          ← Built web app entry point
        404.html                            ← SPA redirect (do not delete)
        assets/
          index-*.css
          index-*.js
```

**To update the web app for a new edition**, only edit `newsletterData.ts`. The data file exports:
- `edition` — edition number, date, tagline, editor's note
- `stories` — array of 5 story objects (see existing structure for schema)
- `pipeline` — watch list items for the next edition
- `editionHistory` — running log of all editions

**Signal tier values** for the `signal` field: `'pure'` | `'grounded'` | `'mixed'` | `'speculative'` | `'hearsay'`

**Tag type values** for story tags: `'conflict'` | `'missing'` | `'confirmed'` | `'hype'` | `'regulatory'` | `'peer-reviewed'` | `'source-interest'`

### 5. GitHub Pages Setup (One-Time, Already Done)
GitHub Pages is already enabled on the `515mseibel-lab/AI` repo, serving from `main` branch `/docs` folder. No further setup is needed. Every push to `docs/Newsletters/AI_Signal/` automatically updates the live URL within ~60 seconds.

---

## PROJECT OVERVIEW

**Concept:** An AI industry newsletter modeled after Ground News's multi-source aggregation and bias-scoring format — but instead of rating political Left vs. Right, we rate stories on a **Signal Spectrum**: from pure Hearsay & Conjecture to Verified Reality.

**Mission:** Cut through AI hype cycles, PR narratives, and fear-mongering to deliver what's actually happening in the AI industry.

**Cadence:** Weekly (Friday edition — "The Week in Signal")

**Target Audience:** Tech professionals, founders, investors, and thoughtful observers who are tired of both AI cheerleading and AI doomerism.

---

## THE SIGNAL SPECTRUM (Our Rating System)

Instead of Left/Right bias, each story is rated on a 5-point spectrum:

| Rating | Symbol | Meaning |
|--------|--------|---------|
| **Pure Signal** | 📶📶📶📶📶 | Verifiable facts, primary sources, documented events |
| **Grounded** | 📶📶📶📶 | Mostly fact-based with minor interpretive framing |
| **Mixed** | 📶📶📶 | Mix of verified facts and analyst projections/spin |
| **Speculative** | 📶📶 | Primarily analyst opinion, extrapolation, or projection |
| **Hearsay** | 📶 | Rumor, hype, unnamed sources, PR narrative |

**Additional Tags:**
- 🔥 **Hype Alert** — Story is likely inflated by PR or market incentives
- 🕵️ **Missing Context** — Key info omitted by most sources
- ⚖️ **Source Conflict** — Sources directly contradict each other
- 🏢 **Source Interest** — Reporting source has financial stake in the story
- ✅ **Independently Confirmed** — Multiple unaffiliated sources agree on core facts
- 🎓 **Peer-Reviewed** — Claims backed by academic / conference paper
- 🏛️ **Government / Regulatory** — Originates from official government body

---

## SOURCE LIBRARY (Rated by Factuality + Coverage Angle)

*Last updated: March 13, 2026. URLs included for direct reference checking.*

---

### ★ VENDOR SOURCE-OF-TRUTH DIRECTORY

These are the **official primary sources** for each major AI lab or product. Always check these before accepting third-party reporting as definitive. Treat vendor content as primary source material (stated positions), not independent fact.

#### Anthropic / Claude
| Source | URL | What It Covers |
|--------|-----|----------------|
| Anthropic Blog | anthropic.com/news | Research, policy, safety frameworks, product releases |
| Anthropic Safety Research | anthropic.com/research | Technical papers, Constitutional AI, interpretability |
| Claude Model Documentation | docs.anthropic.com | API specs, model capabilities, system prompts |
| Dario Amodei (CEO) on X | @DarioAmodei | Executive positions, real-time strategic commentary |
| Amanda Askell (Alignment) on X | @amandaaskell | AI alignment and safety researcher perspectives |
| Anthropic's Claude Usage Policy | anthropic.com/usage-policy | Stated red lines and restrictions |

> **Model Family (as of March 2026):** Claude Opus 4.5, Claude Sonnet 4.6, Claude Haiku 4.5 — flagship, mid-tier, and fast tiers. Claude is Anthropic's only model family.

#### OpenAI / ChatGPT
| Source | URL | What It Covers |
|--------|-----|----------------|
| OpenAI Blog | openai.com/blog | Research announcements, product news, safety postures |
| OpenAI Research | openai.com/research | Technical papers, alignment work, capability evals |
| OpenAI API Documentation | platform.openai.com/docs | Model specs, pricing, context windows |
| Sam Altman (CEO) on X | @sama | CEO public positions — high signal for strategy, watch for PR framing |
| OpenAI Safety Team Blog | openai.com/safety | Stated safety commitments (verify against independent analysis) |
| OpenAI System Card releases | openai.com/index | Per-model technical safety disclosures |

> **Model Family (as of March 2026):** GPT-5.4 (flagship reasoning/coding), GPT-5.3 Instant (fast, low-latency), o-series (reasoning). Microsoft 365 Copilot now includes GPT-5.3 Instant.

#### Microsoft / Copilot
| Source | URL | What It Covers |
|--------|-----|----------------|
| Official Microsoft Blog | blogs.microsoft.com | Executive-level product & partnership announcements |
| Microsoft 365 Copilot Blog | techcommunity.microsoft.com (M365 Copilot category) | Monthly "What's New" updates — the definitive Copilot changelog |
| Microsoft Copilot Blog (consumer) | microsoft.com/en-us/microsoft-copilot/blog | Consumer-facing Copilot, release notes, features |
| Microsoft 365 Blog | microsoft.com/en-us/microsoft-365/blog | Copilot Cowork, Wave 3, enterprise integrations |
| Microsoft Research Blog | microsoft.com/en-us/research/blog | Academic-adjacent AI research from MSR |
| Microsoft Learn / Docs | learn.microsoft.com | Technical documentation, admin guides, governance |
| Microsoft 365 Roadmap | microsoft.com/en-us/microsoft-365/roadmap | Upcoming feature releases — requires careful "in preview" vs "GA" distinction |

> **Model Architecture Note:** Microsoft 365 Copilot is **model-diverse by design** — not a single model. It runs OpenAI (GPT-5.3 Instant as of March 2026) and Anthropic (Claude available in mainline Copilot chat via the Frontier program). Copilot Cowork is specifically built in collaboration with Anthropic.

#### Google / Gemini / DeepMind
| Source | URL | What It Covers |
|--------|-----|----------------|
| Google DeepMind Blog | deepmind.google/blog | Primary source for Gemini research, AlphaFold, robotics |
| Google AI Blog | ai.google/research/blog | Broader Google AI research across teams |
| Google Research Blog | research.google/blog | Applied and foundational research |
| Google Blog (The Keyword) | blog.google | Consumer product announcements, Search AI integration |
| Google Developers Blog | developers.googleblog.com | API releases, Gemini API updates, developer tools |
| Sundar Pichai on X | @sundarpichai | CEO-level announcements |
| Demis Hassabis on X | @demishassabis | DeepMind CEO — research milestone commentary |

> **Model Family (as of March 2026):** Gemini 3.1 Pro (flagship), Gemini 3.1 Flash (fast tier), Gemini 3.1 Flash Lite (lightweight, developer-facing). Gemini Deep Think is the scientific reasoning variant.

#### xAI / Grok
| Source | URL | What It Covers |
|--------|-----|----------------|
| xAI Blog | x.ai/blog | Official model releases, research papers |
| xAI on X | @xai | Primary real-time announcement channel |
| Elon Musk on X | @elonmusk | Owner/CEO commentary — high noise, occasional signal |
| Grok Documentation | docs.x.ai | API documentation, model capabilities |

> **Model Family (as of March 2026):** Grok 4.1 (flagship), Grok 4.20 (beta). Real-time X/Twitter data integration is Grok's defining differentiator.

#### Meta / Llama
| Source | URL | What It Covers |
|--------|-----|----------------|
| Meta AI Blog | ai.meta.com/blog | Primary source for Llama releases, research |
| Meta Research | research.facebook.com | Academic AI research papers |
| PyTorch Blog | pytorch.org/blog | ML framework, training infrastructure |
| Yann LeCun on X | @ylecun | Meta Chief AI Scientist — research philosophy, architecture debates |
| Mark Zuckerberg on X/Threads | @zuck | Strategic product direction, occasionally technical |
| Hugging Face (Meta model cards) | huggingface.co/meta-llama | Model weights, documentation, community evals |

> **Model Family (as of March 2026):** Llama 3.3 (70B, open-weights flagship), Llama 3.x family (7B–70B range). Meta's strategy is open-weights release — all models are publicly downloadable.

#### Mistral AI
| Source | URL | What It Covers |
|--------|-----|----------------|
| Mistral AI Blog | mistral.ai/news | European AI lab — model releases, research |
| Mistral Documentation | docs.mistral.ai | API, model specs |
| Hugging Face (Mistral cards) | huggingface.co/mistralai | Open model weights and community benchmarks |

> **Note:** Mistral is Europe's leading independent AI lab, open-source-first philosophy. Important to follow for EU AI regulatory context and as a counterpoint to US-centric coverage.

#### Perplexity AI
| Source | URL | What It Covers |
|--------|-----|----------------|
| Perplexity Blog | perplexity.ai/hub/blog | Product announcements, model changes |
| Perplexity Help Center | perplexity.ai/help-center | Technical FAQ, model availability per plan |
| Perplexity API Docs | docs.perplexity.ai | Developer documentation |
| Aravind Srinivas (CEO) on X | @AravSrinivas | CEO commentary, product positioning |

> **PERPLEXITY MODEL ECOSYSTEM — CRITICAL CONTEXT FOR EDITORS:**
>
> Perplexity is **not** a single-model AI. It is a **multi-model aggregator and search orchestration platform**. Do not cite "Perplexity says X" as equivalent to any single model making a claim. The platform routes queries dynamically across:
>
> | Model | Source | Used For |
> |-------|--------|---------|
> | **Sonar** (Perplexity's own) | Built on Meta Llama 3.3 70B, fine-tuned by Perplexity | Default search mode — fast, cited, factual retrieval |
> | **GPT-5.4** | OpenAI API | Multi-step reasoning, professional knowledge work |
> | **GPT-5.2** | OpenAI API | Logic-heavy analysis, essays |
> | **Claude 4.6** | Anthropic API | Coding, structured analysis, math (per Perplexity usage data) |
> | **Claude 4.5** | Anthropic API | Available in Pro tier |
> | **Gemini 3.1 Pro** | Google API | Image/video tasks, multimodal prompts |
> | **Gemini Flash** | Google API | Visual outputs (most common for image queries) |
> | **Grok 4.1** | xAI API | Trending topics, social media analysis, X-native context |
> | **Kimi K2** | Moonshot AI API | Available in Pro/Max tier |
> | **NVIDIA Nemotron 3** | NVIDIA API | Available via Agent API |
>
> **Perplexity "Model Council"** (launched Feb 5, 2026): Allows users to query multiple models simultaneously and compare outputs side-by-side.
>
> **Perplexity Computer**: New agentic tool ($200/month Max tier only) using 19 different AI models, running entirely in cloud. Creates subagents for complex multi-step workflows.
>
> **Data privacy note:** Perplexity has contractual agreements with third-party model providers stating that user data from Perplexity is not used to train external models.

#### Amazon / AWS Bedrock
| Source | URL | What It Covers |
|--------|-----|----------------|
| AWS AI Blog | aws.amazon.com/blogs/machine-learning | ML services, Bedrock updates, model access |
| Amazon Science | amazon.science/blog | Amazon's AI research publications |
| AWS Bedrock Documentation | docs.aws.amazon.com/bedrock | Model access gateway — Claude, Llama, Titan, Mistral via Bedrock |

> **Note:** Amazon is not a frontier model creator but is a critical model *distribution* layer through AWS Bedrock. Also a major OpenAI investor (part of $110B raise).

#### NVIDIA
| Source | URL | What It Covers |
|--------|-----|----------------|
| NVIDIA Developer Blog | developer.nvidia.com/blog | GPU architecture, model training infrastructure |
| NVIDIA AI Blog | blogs.nvidia.com/blog/category/deep-learning | Product announcements, enterprise AI deployments |
| NVIDIA Research | research.nvidia.com | Technical papers, Nemotron model family |
| Jensen Huang on X | @Jensen_Huang | CEO commentary — treat as high-conviction promotional |

> **Model Note:** NVIDIA's Nemotron 3 Super is their open-source model family for enterprise agentic AI. Available via Perplexity's Agent API. Vera Rubin is their next-gen AI hardware platform (debuting GTC 2026).

#### DeepSeek (Chinese lab)
| Source | URL | What It Covers |
|--------|-----|----------------|
| DeepSeek Blog | deepseek.com/blog | Model releases (often open-weights) |
| Hugging Face (DeepSeek cards) | huggingface.co/deepseek-ai | Model weights, benchmarks |
| DeepSeek API Docs | platform.deepseek.com | Developer access |

> **Editorial Note:** DeepSeek R1 and V3 series caused significant industry disruption in early 2025 by matching frontier performance at dramatically lower cost. Geopolitical context (Chinese lab, US export controls) is essential framing in any DeepSeek story.

---

### TIER 1 — High Factuality, Primary/Original Reporting (Independent Press)

| Source | URL | Type | Typical Angle | Editorial Notes |
|--------|-----|------|---------------|-----------------|
| MIT Technology Review | technologyreview.com | Academic/Trade | Analytical, skeptical | Best on AI policy, safety, and ethics — strong fact standards |
| TechCrunch | techcrunch.com | Trade | Startup-forward | Good primary sourcing; investor-friendly framing — note VC relationships |
| The Intercept | theintercept.com | Investigative | Critical/adversarial | Best on government, surveillance, and national security AI angles |
| Financial Times | ft.com | Business | Market + institutional | Often breaks internal company negotiations and regulatory moves |
| Bloomberg | bloomberg.com | Business | Financial lens | Most reliable on funding rounds, M&A, and valuation accuracy |
| Reuters | reuters.com | Wire | Neutral wire | Fastest on breaking corporate and regulatory news |
| CNBC | cnbc.com | Business | Market-focused | Strong on earnings calls and corporate moves; read transcripts directly |
| NBC News | nbcnews.com | Broadcast | Consumer + policy | Strong on public policy impact and civil liberties angles |
| CNN Business | cnn.com/business | Broadcast | Consumer-facing | Solid fact-checking infrastructure; can be surface-level on technical detail |
| The Washington Post | washingtonpost.com | Newspaper | Institutional | Strong on regulatory and government AI stories |
| The New York Times | nytimes.com | Newspaper | Broad | Investigative AI pieces are excellent; daily news coverage is variable |
| Ars Technica | arstechnica.com | Tech/Science | Technical depth | Best technical depth of any consumer-facing outlet; often catches nuance others miss |
| The Guardian (Tech) | theguardian.com/technology | Newspaper | Critical/European | Strong AI ethics and labor impact coverage; European regulatory perspective |

---

### TIER 2 — Good Coverage, Notable Framing or Access Dependencies

| Source | URL | Type | Typical Angle | Editorial Notes |
|--------|-----|------|---------------|-----------------|
| The Verge | theverge.com | Consumer Tech | Product/enthusiast | Good product coverage; occasional hype-prone AI takes |
| Wired | wired.com | Tech Culture | Long-form analytical | Strong features; occasional techno-optimist bias |
| Forbes | forbes.com | Business | CEO/executive lens | Heavy PR access to executives; promotional framing common |
| VentureBeat | venturebeat.com | Trade | VC/startup angle | Investor-friendly framing; useful for funding news |
| Fortune (Eye on AI) | fortune.com | Business | C-suite angle | Eye on AI newsletter (Jeremy Kahn, Sharon Goldman) is strong; general Fortune coverage varies |
| The Information | theinformation.com | Trade (paywall) | Inside access | Expensive but often gets internal details; paywalled |
| IEEE Spectrum | spectrum.ieee.org | Technical | Engineering perspective | Reliable on technical claims; important for hardware and infrastructure stories |
| Axios | axios.com | Newsletter | Deal-focused | Good on business deals and policy; deliberately brief — check original sources |
| Tom's Hardware | tomshardware.com | Hardware | Technical/specs | Best for GPU, chip, and data center hardware accuracy |

---

### TIER 3 — Academic / Research (Highest Signal, Slowest Cycle)

| Source | URL | Type | What It Covers |
|--------|-----|------|----------------|
| ArXiv (cs.AI, cs.LG) | arxiv.org | Pre-print server | Frontier ML research before peer review — fastest but unreviewed |
| NeurIPS Proceedings | papers.neurips.cc | Conference | Premier ML conference papers (December annual) |
| ICML Proceedings | proceedings.mlr.press | Conference | International Conference on Machine Learning |
| ICLR Proceedings | openreview.net | Conference | Learning representations — critical for architecture research |
| CVPR Proceedings | openaccess.thecvf.com | Conference | Computer vision — relevant for multimodal AI |
| Nature / Nature Machine Intelligence | nature.com/natmachintell | Journal | Peer-reviewed; slower but authoritative for empirical claims |
| Science | science.org | Journal | Major AI breakthroughs occasionally published here |
| BAIR Blog (UC Berkeley) | bair.berkeley.edu/blog | Academic | Computer vision, RL, NLP from a top AI lab |
| Stanford HAI Blog | hai.stanford.edu/news | Academic | Human-Centered AI Institute — strong on policy, ethics, workforce impact |
| AI Now Institute | ainowinstitute.org | Think Tank | Critical AI research — labor, power, accountability |
| Center for AI Safety | safe.ai | Think Tank | Safety research, risk assessments — note advocacy angle |

---

### TIER 4 — Policy, Regulatory, and Government Sources

| Source | URL | Type | What It Covers |
|--------|-----|------|----------------|
| U.S. AI Safety Institute (AISI) | aisi.gov | U.S. Government | AI safety evaluations, model testing |
| NIST AI Risk Management | nist.gov/artificial-intelligence | U.S. Government | Technical AI standards and risk frameworks |
| White House OSTP | whitehouse.gov/ostp | U.S. Government | Executive branch AI policy and executive orders |
| EU AI Office | digital-strategy.ec.europa.eu | EU Government | EU AI Act implementation and enforcement |
| UK AI Safety Institute | gov.uk/government/organisations/ai-safety-institute | UK Government | British AISI — international AI safety coordination |
| FTC Technology Blog | ftc.gov/technology | U.S. Regulatory | Consumer protection and antitrust in AI |
| CNAS (Center for New American Security) | cnas.org | Think Tank | National security and AI policy — influential in DoD circles |
| Carnegie Endowment | carnegieendowment.org | Think Tank | International AI governance and geopolitics |

---

### TIER 5 — Newsletters and Curated Intelligence

| Source | URL / Access | Focus | Signal Quality |
|--------|-------------|-------|---------------|
| Eye on AI (Fortune) | fortune.com/newsletters/eye-on-ai | Business AI impact | High — Jeremy Kahn & Sharon Goldman, specialist reporters |
| Import AI (Jack Clark) | importai.substack.com | Research + policy | High — Anthropic co-founder; deep technical + policy read |
| The Batch (Andrew Ng) | deeplearning.ai/the-batch | Research + education | High — technically rigorous; pro-AI framing to note |
| Ben's Bites | bensbites.com | Daily AI news | Medium — fast aggregation; useful for trend radar |
| The Neuron | theneurondaily.com | Daily AI business | Medium — business-focused, accessible |
| Last Week in AI | lastweekin.ai | Weekly research roundup | High — curated ML research digest |
| Gradient Descent (MLOps) | mlops.community/newsletter | Technical/engineering | High — practitioner-focused, low hype |
| Stratechery (Ben Thompson) | stratechery.com | Business strategy | High for framework; subscription-only; pro-technology framing |

---

### TIER 6 — Watchlist (Track but Treat with Caution)

| Source | Notes |
|--------|-------|
| Fox Business / Fox News | Strong on political framing of AI regulation; factual accuracy variable on technical claims |
| Breitbart Tech | Far-right framing; useful for tracking one end of the regulatory debate |
| Various YouTube roundups | Useful for sentiment and framing radar; rarely primary sourced |
| Self-reported press releases (PRNewswire, BusinessWire) | Primary but purely promotional; no independent fact layer |
| LinkedIn "thought leadership" | High volume, low verification; watch for vendor-sponsored content disguised as opinion |

---

## RATING METHODOLOGY

### How We Score Each Story

**1. Source Count** — How many independent outlets covered it?
- 1-2 sources: ⚠️ thin
- 3-5 sources: acceptable
- 6+: well-documented

**2. Primary Source Verification** — Does the story cite:
- [ ] Official statements / press releases
- [ ] Court documents / filings
- [ ] On-record named sources
- [ ] Data / studies / benchmarks
- [ ] Anonymous sourcing only

**3. Hearsay Markers** (reduces Signal rating):
- Phrases like "sources familiar with," "reportedly," "could," "may"
- Analyst projections presented as fact
- No direct quotes from principals
- Circular sourcing (outlets citing each other)
- Vendor self-reported metrics without independent verification

**4. Reality Markers** (increases Signal rating):
- Named sources with verifiable credentials
- Documents, filings, or recordings cited
- Multiple independent confirmations
- Corrections issued and documented
- Peer-reviewed backing for technical claims

**5. Source Interest Check** — Ask:
- Does the reporting outlet have financial exposure to the story?
- Is the primary source the company itself? (always flag 🏢)
- Is the journalist embedded with access that might create incentive to soften coverage?

---

## STORY LOG

### Edition 001 — March 13, 2026

| # | Story | Signal | Tags |
|---|-------|--------|------|
| 1 | Anthropic vs. Pentagon | 📶📶📶📶 Grounded | ⚖️ Source Conflict, 🕵️ Missing Context |
| 2 | OpenAI $730B Valuation / Amazon+Nvidia+SoftBank Raise | 📶📶📶📶 Grounded | 🔥 Hype Alert, 🏢 Source Interest |
| 3 | AI Job Displacement (Block cuts 4,000) | 📶📶📶 Mixed | 🔥 Hype Alert, 🕵️ Missing Context |
| 4 | Perplexity "replaced $225K marketing stack" | 📶📶 Speculative | 🔥 Hype Alert, 🏢 Source Interest |
| 5 | Apple Siri / Gemini Overhaul | 📶📶📶 Mixed | 🕵️ Missing Context |

**Notes:** Core Anthropic/Pentagon facts verified. Valuation "pre-money" routinely omitted in headlines. Block layoff verified; AI causation is CEO framing. Perplexity case study is single vendor self-report. Apple has not issued primary source confirmation on all Siri/Gemini details.

---

### Edition 002 — March 13, 2026

| # | Story | Signal | Tags |
|---|-------|--------|------|
| 1 | Anthropic vs. Pentagon Follow-Up — Industry Unites | 📶📶📶📶 Grounded | ⚖️ Source Conflict, 🕵️ Missing Context, ✅ Independently Confirmed |
| 2 | NVIDIA GTC 2026: Vera Rubin Debuts, NemoClaw Rumored | 📶📶📶 Mixed | 🔥 Hype Alert, 🕵️ Missing Context, 🏢 Source Interest |
| 3 | ByteDance 36,000 Blackwell GPUs via Malaysia | 📶📶📶📶📶 Pure Signal | ✅ Independently Confirmed, 🏛️ Regulatory, 🕵️ Missing Context |
| 4 | Anthropic Labor Study — AI Jobs Reality Check | 📶📶📶📶 Grounded | 🎓 Peer-Reviewed, 🏢 Source Interest, ⚖️ Source Conflict |
| 5 | Morgan Stanley 'Intelligence Explosion' Report | 📶📶 Speculative | 🔥 Hype Alert, 🏢 Source Interest |

**Notes:** Microsoft amicus brief confirmed by Reuters + The Hill. NemoClaw not officially confirmed by NVIDIA pre-GTC. ByteDance Malaysia arrangement confirmed by NVIDIA on-record statement. Anthropic study measures task exposure, not employment outcomes — Forbes critique valid. Morgan Stanley power grid analysis is independently supportable; AI capability framing is promotional.

---

## FUTURE STORY PIPELINE

| Topic | Status | Priority | Key Sources to Watch |
|-------|--------|----------|---------------------|
| Claude use in Iran strikes post-ban | 🔴 Under-reported | HIGH | The Intercept, MIT Tech Review, Pentagon |
| Vera Rubin benchmark reality vs. claims | 🟡 Watch (post-GTC) | HIGH | IEEE Spectrum, ArXiv, AnandTech |
| Anthropic DOD lawsuit outcome | 🟢 Active | HIGH | Court filings, CNN, CNBC |
| ByteDance Malaysia cluster — funding source | 🔴 Verify | MEDIUM | WSJ, BIS filings, Reuters |
| GPT-5.4 GDPVal 83% — independent replication | 🔴 Verify | HIGH | OpenAI system card, ArXiv, HELM |
| EU AI Act enforcement timeline 2026 | 🟡 Watch | MEDIUM | EU AI Office, The Guardian |
| Microsoft Copilot Cowork (Claude-powered) launch | 🟢 Confirmed | HIGH | Microsoft 365 Blog, Anthropic Blog |
| NemoClaw open-source agent platform (post-GTC) | 🟡 Watch | HIGH | NVIDIA Blog, Wired, CNBC |

---

## MODEL ECOSYSTEM QUICK REFERENCE

*For editors fact-checking vendor claims about model capabilities.*

| Platform | Underlying Model(s) | Source of Truth |
|----------|--------------------|--------------:|
| ChatGPT (free) | GPT-5.3 Instant | openai.com/blog |
| ChatGPT (Pro/Plus) | GPT-5.4, o-series | openai.com/blog |
| Claude.ai | Claude Opus 4.5 / Sonnet 4.6 / Haiku 4.5 | anthropic.com/news |
| Microsoft Copilot (consumer) | GPT-5.3 Instant + optional Claude | microsoft.com/copilot/blog |
| Microsoft 365 Copilot (enterprise) | GPT-5.3 Instant primary; Claude (Frontier program) | techcommunity.microsoft.com |
| Copilot Cowork | Claude (Anthropic partnership) | microsoft.com/en-us/microsoft-365/blog |
| Google Gemini | Gemini 3.1 Pro / Flash / Flash Lite | deepmind.google/blog |
| Google AI Studio | Gemini 3.1 Pro (developer access) | developers.googleblog.com |
| Perplexity (free) | Sonar (Llama 3.3-based) | perplexity.ai/hub/blog |
| Perplexity (Pro) | Sonar + GPT-5.2 + Claude 4.5 + Gemini 3.1 Pro + Grok 4.1 | perplexity.ai/help-center |
| Perplexity (Max / $200/mo) | All Pro models + Perplexity Computer (19 models) | perplexity.ai/help-center |
| Grok on X | Grok 4.1 / Grok 4.20 (beta) | x.ai/blog |
| Meta AI | Llama 3.3 70B | ai.meta.com/blog |
| AWS Bedrock | Claude, Llama, Titan, Mistral (gateway) | aws.amazon.com/bedrock |
| GitHub Copilot | GPT-5.4 / o-series (coding optimized) | github.blog |

---

## EDITION HISTORY

| Edition | Date | Lead Story | Formats | Status |
|---------|------|------------|---------|--------|
| 001 | March 13, 2026 | Anthropic vs. Pentagon | PDF, Markdown | 🟢 Published |
| 002 | March 13, 2026 | Anthropic Follow-Up + NVIDIA GTC + ByteDance | PDF, Markdown, Web App | 🟢 Published |

---

*Last updated: March 13, 2026 | Version 5.0*
*Maintainer: AI Signal Editorial*
*Repository: [515mseibel-lab/AI](https://github.com/515mseibel-lab/AI)*
