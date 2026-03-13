#!/usr/bin/env python3
"""
AI Signal Newsletter - Edition 002 PDF Generator
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black, white, Color
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.platypus import PageBreak
import datetime

# ─── Color Palette ────────────────────────────────────────────────────────────
BRAND_DARK    = HexColor("#0D1117")   # near-black background
BRAND_ACCENT  = HexColor("#00C6FF")   # electric blue
BRAND_GOLD    = HexColor("#F5A623")   # amber/gold for ratings
BRAND_RED     = HexColor("#E74C3C")   # alert red
BRAND_GREEN   = HexColor("#27AE60")   # confirmed green
BRAND_GRAY    = HexColor("#8B949E")   # muted gray text
BRAND_LIGHT   = HexColor("#F0F6FC")   # near-white
BRAND_SECTION = HexColor("#161B22")   # section header bg
BRAND_BORDER  = HexColor("#30363D")   # subtle border
BRAND_YELLOW  = HexColor("#F0E68C")   # hype alert yellow

OUTPUT_FILE = "/home/ubuntu/AI-Industry-Newsletter/Newsletters/AI-Industry/AI_Signal_Edition_002_2026-03-13.pdf"

# ─── Document Setup ────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT_FILE,
    pagesize=letter,
    leftMargin=0.65*inch,
    rightMargin=0.65*inch,
    topMargin=0.5*inch,
    bottomMargin=0.65*inch,
    title="AI Signal — Edition 002",
    author="AI Signal Editorial",
    subject="AI Industry Newsletter — March 13, 2026",
)

styles = getSampleStyleSheet()

# ─── Custom Styles ─────────────────────────────────────────────────────────────
def make_style(name, **kwargs):
    return ParagraphStyle(name=name, **kwargs)

style_masthead_title = make_style(
    "MastheadTitle",
    fontName="Helvetica-Bold",
    fontSize=30,
    textColor=BRAND_ACCENT,
    alignment=TA_CENTER,
    spaceAfter=2,
    leading=34,
)
style_masthead_sub = make_style(
    "MastheadSub",
    fontName="Helvetica",
    fontSize=10,
    textColor=BRAND_GRAY,
    alignment=TA_CENTER,
    spaceAfter=2,
    leading=14,
)
style_masthead_tagline = make_style(
    "MastheadTagline",
    fontName="Helvetica-Oblique",
    fontSize=9,
    textColor=BRAND_GOLD,
    alignment=TA_CENTER,
    spaceAfter=4,
    leading=12,
)
style_section_header = make_style(
    "SectionHeader",
    fontName="Helvetica-Bold",
    fontSize=8,
    textColor=BRAND_ACCENT,
    alignment=TA_LEFT,
    spaceBefore=8,
    spaceAfter=4,
    leading=11,
)
style_story_headline = make_style(
    "StoryHeadline",
    fontName="Helvetica-Bold",
    fontSize=14,
    textColor=BRAND_LIGHT,
    alignment=TA_LEFT,
    spaceBefore=6,
    spaceAfter=3,
    leading=18,
)
style_story_deck = make_style(
    "StoryDeck",
    fontName="Helvetica-Oblique",
    fontSize=10,
    textColor=BRAND_GRAY,
    alignment=TA_LEFT,
    spaceAfter=5,
    leading=14,
)
style_body = make_style(
    "Body",
    fontName="Helvetica",
    fontSize=9.5,
    textColor=BRAND_LIGHT,
    alignment=TA_JUSTIFY,
    spaceAfter=6,
    leading=14,
)
style_body_small = make_style(
    "BodySmall",
    fontName="Helvetica",
    fontSize=8.5,
    textColor=BRAND_GRAY,
    alignment=TA_JUSTIFY,
    spaceAfter=4,
    leading=12,
)
style_signal_label = make_style(
    "SignalLabel",
    fontName="Helvetica-Bold",
    fontSize=8,
    textColor=BRAND_GOLD,
    alignment=TA_LEFT,
    spaceAfter=2,
    leading=11,
)
style_tag = make_style(
    "Tag",
    fontName="Helvetica",
    fontSize=8,
    textColor=BRAND_GRAY,
    alignment=TA_LEFT,
    spaceAfter=3,
    leading=11,
)
style_sources = make_style(
    "Sources",
    fontName="Helvetica-Oblique",
    fontSize=7.5,
    textColor=BRAND_GRAY,
    alignment=TA_LEFT,
    spaceAfter=2,
    leading=11,
)
style_callout = make_style(
    "Callout",
    fontName="Helvetica-Bold",
    fontSize=9,
    textColor=BRAND_ACCENT,
    alignment=TA_LEFT,
    spaceAfter=3,
    leading=13,
    leftIndent=10,
)
style_toc_item = make_style(
    "TocItem",
    fontName="Helvetica",
    fontSize=9,
    textColor=BRAND_LIGHT,
    alignment=TA_LEFT,
    spaceAfter=3,
    leading=13,
)
style_footer = make_style(
    "Footer",
    fontName="Helvetica",
    fontSize=7.5,
    textColor=BRAND_GRAY,
    alignment=TA_CENTER,
    spaceAfter=0,
    leading=11,
)
style_intro = make_style(
    "Intro",
    fontName="Helvetica",
    fontSize=9.5,
    textColor=BRAND_LIGHT,
    alignment=TA_JUSTIFY,
    spaceAfter=6,
    leading=14,
)

# ─── Helper Functions ──────────────────────────────────────────────────────────
def hr(color=BRAND_BORDER, thickness=0.5, space_before=4, space_after=4):
    return HRFlowable(
        width="100%", thickness=thickness, color=color,
        spaceBefore=space_before, spaceAfter=space_after
    )

def section_label(text):
    return Paragraph(f"▸ {text.upper()}", style_section_header)

def story_block(number, headline, deck, signal_rating, signal_bars, tags, body_paragraphs, sources_text, context_note=None):
    """Build a complete story block."""
    items = []
    
    # Story number + headline
    items.append(Paragraph(f"<font color='#8B949E'>#{number}</font>  {headline}", style_story_headline))
    items.append(Paragraph(deck, style_story_deck))
    
    # Signal rating row
    items.append(Paragraph(
        f"<b>Signal Rating:</b>  {signal_bars}  <font color='#F5A623'>{signal_rating}</font>",
        style_signal_label
    ))
    
    # Tags
    if tags:
        items.append(Paragraph("  ".join(tags), style_tag))
    
    items.append(Spacer(1, 4))
    
    # Body
    for para in body_paragraphs:
        items.append(Paragraph(para, style_body))
    
    # Context note (for follow-ups or missing context)
    if context_note:
        items.append(Paragraph(f"<b>Editor's Note:</b> {context_note}", style_callout))
    
    # Sources
    items.append(Paragraph(f"<b>Sources:</b> {sources_text}", style_sources))
    
    return items

# ─── Page Background Callback ──────────────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BRAND_DARK)
    canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)
    canvas.restoreState()

# ─── Build Content ─────────────────────────────────────────────────────────────
story = []

# ── MASTHEAD ──────────────────────────────────────────────────────────────────
story.append(Spacer(1, 0.1*inch))

# Masthead table with accent bar
masthead_data = [[
    Paragraph("📡 AI SIGNAL", style_masthead_title)
]]
masthead_table = Table(masthead_data, colWidths=[7.2*inch])
masthead_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), BRAND_SECTION),
    ("TOPPADDING", (0,0), (-1,-1), 14),
    ("BOTTOMPADDING", (0,0), (-1,-1), 10),
    ("LEFTPADDING", (0,0), (-1,-1), 12),
    ("RIGHTPADDING", (0,0), (-1,-1), 12),
    ("LINEBELOW", (0,0), (-1,-1), 2, BRAND_ACCENT),
]))
story.append(masthead_table)

story.append(Spacer(1, 4))
story.append(Paragraph("THE WEEK IN SIGNAL", style_masthead_sub))
story.append(Paragraph("Hearsay &amp; Conjecture vs. Reality — Ground News for AI", style_masthead_tagline))

# Meta info bar
meta_data = [[
    Paragraph("<b>EDITION 002</b>", make_style("m1", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
    Paragraph("March 13, 2026", make_style("m2", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_CENTER, leading=11)),
    Paragraph("Weekly · Friday Edition", make_style("m3", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_RIGHT, leading=11)),
]]
meta_table = Table(meta_data, colWidths=[2.4*inch, 2.4*inch, 2.4*inch])
meta_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), BRAND_SECTION),
    ("TOPPADDING", (0,0), (-1,-1), 5),
    ("BOTTOMPADDING", (0,0), (-1,-1), 5),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("LINEBELOW", (0,0), (-1,-1), 0.5, BRAND_BORDER),
]))
story.append(meta_table)
story.append(Spacer(1, 10))

# ── SIGNAL SPECTRUM KEY ───────────────────────────────────────────────────────
spectrum_data = [
    [
        Paragraph("<b>THE SIGNAL SPECTRUM</b>", make_style("sk0", fontName="Helvetica-Bold", fontSize=7.5, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=10)),
        Paragraph("📶📶📶📶📶  Pure Signal — Verified facts, primary sources", make_style("sk1", fontName="Helvetica", fontSize=7.5, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=10)),
        Paragraph("📶📶📶  Mixed — Facts + analyst spin", make_style("sk3", fontName="Helvetica", fontSize=7.5, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=10)),
        Paragraph("📶  Hearsay — Rumor / PR narrative", make_style("sk5", fontName="Helvetica", fontSize=7.5, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=10)),
    ],
    [
        Paragraph("", make_style("sk_blank", fontName="Helvetica", fontSize=7.5, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=10)),
        Paragraph("📶📶📶📶  Grounded — Mostly fact-based", make_style("sk2", fontName="Helvetica", fontSize=7.5, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=10)),
        Paragraph("📶📶  Speculative — Analyst opinion / projection", make_style("sk4", fontName="Helvetica", fontSize=7.5, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=10)),
        Paragraph("", make_style("sk_blank2", fontName="Helvetica", fontSize=7.5, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=10)),
    ],
]
spectrum_table = Table(spectrum_data, colWidths=[1.1*inch, 2.2*inch, 2.1*inch, 1.8*inch])
spectrum_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), BRAND_SECTION),
    ("TOPPADDING", (0,0), (-1,-1), 4),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 4),
    ("LINEBELOW", (0,-1), (-1,-1), 0.5, BRAND_BORDER),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
]))
story.append(spectrum_table)
story.append(Spacer(1, 8))

# ── EDITOR'S NOTE ─────────────────────────────────────────────────────────────
story.append(section_label("Editor's Note"))
story.append(hr())
story.append(Paragraph(
    "This week, the AI industry's collision with U.S. national security policy moved from background noise to front-page litigation. "
    "Anthropic's lawsuit against the Pentagon — and the industry-wide response it triggered — is the defining story of the week. "
    "Meanwhile, NVIDIA's GTC 2026 conference opens Monday with the Vera Rubin architecture expected to formally debut, "
    "ByteDance found a legal workaround to access frontier compute, and a new Anthropic labor study added nuance to the AI-jobs debate "
    "that most headlines are getting wrong. We also cover the Morgan Stanley 'intelligence explosion' report — and explain why you should "
    "read it with caution.",
    style_intro
))
story.append(Spacer(1, 6))

# ── THIS WEEK'S STORIES ───────────────────────────────────────────────────────
story.append(section_label("This Week's Stories"))
story.append(hr(thickness=1, color=BRAND_ACCENT))
story.append(Spacer(1, 4))

# ── STORY 1 ───────────────────────────────────────────────────────────────────
story.extend(story_block(
    number=1,
    headline="🔄 Follow-Up: Anthropic vs. Pentagon — The Industry Unites",
    deck="Microsoft, OpenAI, and Google employees file amicus briefs as Anthropic's lawsuit escalates into a sector-wide confrontation with the Trump administration.",
    signal_rating="Grounded",
    signal_bars="📶📶📶📶",
    tags=["⚖️ Source Conflict", "🕵️ Missing Context", "✅ Independently Confirmed"],
    body_paragraphs=[
        "On March 9, Anthropic filed two federal lawsuits against the U.S. Department of Defense and related agencies, challenging the Pentagon's decision to designate the company a \"supply chain risk\" — a label that effectively bans it from federal contracts. The designation followed a breakdown in negotiations over whether Claude could be used in autonomous weapons systems and government surveillance programs, both of which Anthropic's usage policy explicitly prohibits.",
        "The industry response was swift and unusually unified. Within hours of the filing, more than 30 employees from OpenAI and Google DeepMind — including Google's chief scientist Jeff Dean — filed an amicus brief in support of Anthropic. Microsoft followed on March 10 with its own amicus brief, urging the court to issue a temporary restraining order against the Pentagon's designation. The Hill and Reuters both independently confirmed Microsoft's filing.",
        "The core legal dispute centers on whether the Pentagon's designation constitutes unlawful retaliation for Anthropic's refusal to remove safety guardrails from its models. Anthropic argues the designation is \"legally unsound\" and would cause irreparable harm to its existing federal contracts. The DOD has not publicly responded to the lawsuit's specific claims.",
        "<b>What's still missing:</b> Reporting on Claude's alleged use in the Iran strikes — hours after the supply chain risk designation was announced — remains thin. The Intercept flagged this angle; mainstream outlets have not followed up. This is the most significant underreported element of the story.",
    ],
    sources_text="Reuters, Wired (Maxwell Zeff), TechCrunch, The Hill, Forbes, NPR, WSJ, CNN, Anthropic (primary filings)",
    context_note="This is a follow-up to Edition 001's lead story on the Anthropic vs. Pentagon dispute. New developments: Microsoft amicus brief (March 10), OpenAI/Google employee brief (March 9), and escalation to formal federal lawsuit."
))

story.append(hr(color=BRAND_BORDER))
story.append(Spacer(1, 4))

# ── STORY 2 ───────────────────────────────────────────────────────────────────
story.extend(story_block(
    number=2,
    headline="NVIDIA GTC 2026: Vera Rubin Debuts, NemoClaw Rumored, and the Agentic Pivot",
    deck="NVIDIA's biggest conference of the year opens Monday. Vera Rubin is expected to formally launch — and a new open-source AI agent platform called NemoClaw may steal the show.",
    signal_rating="Mixed",
    signal_bars="📶📶📶",
    tags=["🔥 Hype Alert", "🕵️ Missing Context", "🏢 Source Interest"],
    body_paragraphs=[
        "NVIDIA's GTC 2026 conference runs March 16–19 in San Jose, California, with CEO Jensen Huang's keynote scheduled for Monday at 2 p.m. ET. The event is widely expected to serve as the formal debut of the Vera Rubin architecture — NVIDIA's next-generation AI chip platform succeeding Blackwell.",
        "Leaked specifications circulating ahead of the event describe Vera Rubin as delivering approximately 50 petaflops of inference performance, roughly 5x faster than Blackwell, with 10x cheaper inference token costs and a claimed ability to train frontier models with 4x fewer GPUs. These figures have not been independently verified and should be treated as promotional until confirmed by third-party benchmarks.",
        "Separately, Wired and CNBC reported that NVIDIA is planning to announce an open-source AI agent platform called NemoClaw at GTC. According to people familiar with the plans, NemoClaw is designed to help enterprise software companies deploy AI agents — and has already been pitched to major enterprise vendors. The platform is described as similar in concept to OpenClaw but built on NVIDIA's NeMo framework. NVIDIA has not officially confirmed NemoClaw's existence.",
        "The GTC conference is also expected to include announcements related to NVIDIA's $20 billion acquisition of Groq — a move that would give NVIDIA access to Groq's LPU (Language Processing Unit) architecture, which uses on-die SRAM to deliver dramatically faster inference for agentic workloads. An announcement is rumored but not confirmed.",
        "<b>Signal note:</b> GTC is NVIDIA's own event. All announcements should be treated as vendor-sourced until independently benchmarked. The Vera Rubin performance claims are particularly subject to marketing inflation — compare against IEEE Spectrum and ArXiv benchmarks when they emerge.",
    ],
    sources_text="Wired (Zoë Schiffer, Lauren Goode), CNBC, Fortune, The Register, Forbes (Jon Markman), NVIDIA Blog (primary), DataCenter Dynamics",
    context_note=None
))

story.append(hr(color=BRAND_BORDER))
story.append(Spacer(1, 4))

# ── STORY 3 ───────────────────────────────────────────────────────────────────
story.extend(story_block(
    number=3,
    headline="ByteDance Finds a Legal Workaround: 36,000 Blackwell GPUs via Malaysia",
    deck="TikTok's parent company is accessing a $2.5 billion NVIDIA Blackwell cluster — physically located in Malaysia — while U.S. export controls technically permit it.",
    signal_rating="Pure Signal",
    signal_bars="📶📶📶📶📶",
    tags=["✅ Independently Confirmed", "🏛️ Government / Regulatory", "🕵️ Missing Context"],
    body_paragraphs=[
        "ByteDance, the Chinese parent company of TikTok, is set to access a cluster of approximately 36,000 NVIDIA B200 Blackwell GPUs through Aolani Cloud, a Malaysia-based cloud operator. The cluster — consisting of roughly 500 NVL72 GB200 rack-scale systems and valued at approximately $2.5 billion — will be physically located in Malaysia and formally owned by Aolani, according to reporting by the Wall Street Journal confirmed by Tom's Hardware.",
        "NVIDIA confirmed to Tom's Hardware that the arrangement is compliant with current U.S. export control rules: \"By design, the export rules allow clouds to be built and operated outside controlled countries,\" an NVIDIA spokesperson stated. ByteDance is not on the Bureau of Industry and Security's Entity List or Military End Use list, meaning its use of the cluster does not automatically trigger export control violations.",
        "The arrangement highlights a structural gap in the 2023 U.S. export control framework: the rules regulate where hardware is shipped, not where its compute is used. ByteDance has reportedly been leasing NVIDIA H100 GPUs from Aolani in Malaysia since February 2025, suggesting the Blackwell deployment is an expansion of an existing arrangement.",
        "<b>What's missing:</b> The funding source for the cluster expansion is unclear — Aolani currently operates approximately $100 million in hardware, making the proposed $2.5 billion expansion a 25x scale-up. Who is financing this, and whether ByteDance is the effective economic owner of the hardware, are questions the current reporting does not resolve.",
    ],
    sources_text="Wall Street Journal (primary), Tom's Hardware (Anton Shilov), The Decoder, NVIDIA (on-record statement)",
    context_note=None
))

story.append(hr(color=BRAND_BORDER))
story.append(Spacer(1, 4))

# ── STORY 4 ───────────────────────────────────────────────────────────────────
story.extend(story_block(
    number=4,
    headline="The AI Jobs Debate Gets a Reality Check — From Anthropic's Own Economists",
    deck="A new Anthropic research paper maps AI's actual labor market impact — and finds a significant gap between what AI could automate and what it is actually automating today.",
    signal_rating="Grounded",
    signal_bars="📶📶📶📶",
    tags=["🎓 Peer-Reviewed", "🏢 Source Interest", "⚖️ Source Conflict"],
    body_paragraphs=[
        "Anthropic economists Maxim Massenkoff and Peter McCrory published a research paper this week measuring AI's actual versus potential labor market impact across U.S. occupations. The paper introduces a distinction between \"theoretical exposure\" (the percentage of tasks in a field that AI could potentially automate) and \"observed exposure\" (the percentage of tasks where AI is currently being used).",
        "The findings are more nuanced than most headlines suggest. Office administration has the highest observed exposure at approximately 40%, against a theoretical exposure of 90%. Computer programmers show 75% observed exposure; customer service representatives, 70%; data entry workers, 67%. However, fields like life sciences and healthcare — despite high theoretical exposure — show relatively low observed exposure today. Construction, agriculture, and skilled trades show near-zero exposure on both measures.",
        "Critically, the paper finds little evidence of actual job losses even in the most-exposed fields. The researchers note that AI \"may be slow to diffuse due to legal constraints, specific software requirements, human verification steps, or other hurdles.\" A Stanford study cited in the paper found signs of a hiring slowdown among younger software programmers — but could not fully disentangle this from post-pandemic overhiring corrections.",
        "Separately, Atlassian announced on March 11 that it is cutting 10% of its global workforce — approximately 1,600 employees — citing the need to redirect resources toward AI. This follows Block's February announcement of 4,000 cuts. However, as with Block, the causal link between AI efficiency gains and the specific headcount reductions is CEO framing, not independently verified.",
        "<b>The conflict:</b> Forbes published a pointed critique noting that Anthropic's study measures AI's impact on tasks, not on employment outcomes — and that AI could reduce hiring, slow promotions, and compress wages without triggering visible layoffs. The Brookings Institution published a concurrent analysis calling labor market AI research \"still in the first inning.\"",
    ],
    sources_text="Anthropic Research (primary paper), Fortune/Eye on AI (Jeremy Kahn), Forbes (Hamilton Mann), Brookings Institution (Jed Kolko), TechCrunch, Bloomberg, The Guardian",
    context_note=None
))

story.append(hr(color=BRAND_BORDER))
story.append(Spacer(1, 4))

# ── STORY 5 ───────────────────────────────────────────────────────────────────
story.extend(story_block(
    number=5,
    headline="Morgan Stanley's 'Intelligence Explosion' Report — Read It, But Read It Carefully",
    deck="The investment bank warns of a transformative AI leap in H1 2026, a 9–18 GW power shortfall, and mass workforce disruption. The signal is real. The framing needs scrutiny.",
    signal_rating="Speculative",
    signal_bars="📶📶",
    tags=["🔥 Hype Alert", "🏢 Source Interest", "📶📶 Speculative"],
    body_paragraphs=[
        "Morgan Stanley published a sweeping report this week predicting a \"transformative AI\" breakthrough in the first half of 2026, driven by unprecedented compute accumulation at U.S. AI labs. The report cites Elon Musk's claim that applying 10x compute to LLM training effectively doubles model \"intelligence\" — and argues that scaling laws supporting this claim are holding firm.",
        "The report's most concrete claim is an infrastructure one: Morgan Stanley's \"Intelligence Factory\" model projects a net U.S. power shortfall of 9 to 18 gigawatts through 2028 — a 12% to 25% deficit in power needed to run planned AI infrastructure. This is consistent with independent analysis from Morgan Stanley's own energy research team (published February 2026) and Stanford HAI's recent grid infrastructure warning.",
        "The report also cites OpenAI's GPT-5.4 scoring 83.0% on the GDPVal benchmark — placing it \"at or above the level of human experts on economically valuable tasks.\" This claim requires verification: the GDPVal benchmark is OpenAI-developed, and the 83% figure comes from OpenAI's own system card. No independent replication of this benchmark result has been published.",
        "<b>Why to read with caution:</b> Morgan Stanley is an investment bank with significant financial exposure to AI infrastructure stocks. The report's framing — \"the coin of the realm is becoming pure intelligence\" — reads as market-moving commentary as much as neutral analysis. The xAI co-founder prediction of \"recursive self-improvement loops\" by H1 2027 is unverified speculation from a company with direct financial interest in AI hype. The power grid analysis is the most independently supportable element of the report.",
    ],
    sources_text="Fortune (Nick Lichtenberg), Morgan Stanley Research (primary), Stanford HAI, Morgan Stanley Energy Research (Feb 2026)",
    context_note=None
))

story.append(Spacer(1, 10))

# ── FUTURE PIPELINE ───────────────────────────────────────────────────────────
story.append(section_label("Story Pipeline — Watch List"))
story.append(hr())

pipeline_data = [
    [
        Paragraph("<b>Topic</b>", make_style("ph1", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Status</b>", make_style("ph2", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Priority</b>", make_style("ph3", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Key Sources</b>", make_style("ph4", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("Claude use in Iran strikes post-ban", make_style("p1", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🔴 Under-reported", make_style("p2", fontName="Helvetica", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("HIGH", make_style("p3", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("The Intercept, MIT Tech Review", make_style("p4", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("Vera Rubin benchmark reality vs. claims", make_style("p5", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🟡 Watch (post-GTC)", make_style("p6", fontName="Helvetica", fontSize=8, textColor=BRAND_GOLD, alignment=TA_LEFT, leading=11)),
        Paragraph("HIGH", make_style("p7", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("IEEE Spectrum, ArXiv, AnandTech", make_style("p8", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("Anthropic DOD lawsuit outcome", make_style("p9", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🟢 Active", make_style("p10", fontName="Helvetica", fontSize=8, textColor=BRAND_GREEN, alignment=TA_LEFT, leading=11)),
        Paragraph("HIGH", make_style("p11", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("Court filings, CNN, CNBC", make_style("p12", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("ByteDance Malaysia cluster — funding source", make_style("p13", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🔴 Verify", make_style("p14", fontName="Helvetica", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("MEDIUM", make_style("p15", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_GOLD, alignment=TA_LEFT, leading=11)),
        Paragraph("WSJ, BIS filings, Reuters", make_style("p16", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("GPT-5.4 GDPVal 83% — independent replication", make_style("p17", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🔴 Verify", make_style("p18", fontName="Helvetica", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("HIGH", make_style("p19", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_RED, alignment=TA_LEFT, leading=11)),
        Paragraph("OpenAI system card, ArXiv, HELM", make_style("p20", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("EU AI Act enforcement timeline 2026", make_style("p21", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("🟡 Watch", make_style("p22", fontName="Helvetica", fontSize=8, textColor=BRAND_GOLD, alignment=TA_LEFT, leading=11)),
        Paragraph("MEDIUM", make_style("p23", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_GOLD, alignment=TA_LEFT, leading=11)),
        Paragraph("EU AI Office, The Guardian", make_style("p24", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
    ],
]

pipeline_table = Table(pipeline_data, colWidths=[2.2*inch, 1.3*inch, 0.8*inch, 2.9*inch])
pipeline_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), BRAND_SECTION),
    ("BACKGROUND", (0,1), (-1,-1), BRAND_DARK),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [BRAND_DARK, BRAND_SECTION]),
    ("TOPPADDING", (0,0), (-1,-1), 5),
    ("BOTTOMPADDING", (0,0), (-1,-1), 5),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ("GRID", (0,0), (-1,-1), 0.3, BRAND_BORDER),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
]))
story.append(pipeline_table)
story.append(Spacer(1, 10))

# ── EDITION HISTORY ───────────────────────────────────────────────────────────
story.append(section_label("Edition History"))
story.append(hr())

history_data = [
    [
        Paragraph("<b>Edition</b>", make_style("hh1", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Date</b>", make_style("hh2", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Lead Story</b>", make_style("hh3", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("<b>Status</b>", make_style("hh4", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("001", make_style("hr1", fontName="Helvetica", fontSize=8, textColor=BRAND_LIGHT, alignment=TA_LEFT, leading=11)),
        Paragraph("March 13, 2026", make_style("hr2", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
        Paragraph("Anthropic vs. Pentagon (initial filing)", make_style("hr3", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
        Paragraph("🟢 Published", make_style("hr4", fontName="Helvetica", fontSize=8, textColor=BRAND_GREEN, alignment=TA_LEFT, leading=11)),
    ],
    [
        Paragraph("002", make_style("hr5", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
        Paragraph("March 13, 2026", make_style("hr6", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
        Paragraph("Anthropic Follow-Up + NVIDIA GTC + ByteDance", make_style("hr7", fontName="Helvetica", fontSize=8, textColor=BRAND_GRAY, alignment=TA_LEFT, leading=11)),
        Paragraph("🔵 This Edition", make_style("hr8", fontName="Helvetica-Bold", fontSize=8, textColor=BRAND_ACCENT, alignment=TA_LEFT, leading=11)),
    ],
]

history_table = Table(history_data, colWidths=[0.7*inch, 1.2*inch, 3.5*inch, 1.8*inch])
history_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), BRAND_SECTION),
    ("BACKGROUND", (0,1), (-1,-1), BRAND_DARK),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [BRAND_DARK, BRAND_SECTION]),
    ("TOPPADDING", (0,0), (-1,-1), 5),
    ("BOTTOMPADDING", (0,0), (-1,-1), 5),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ("GRID", (0,0), (-1,-1), 0.3, BRAND_BORDER),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
]))
story.append(history_table)
story.append(Spacer(1, 12))

# ── FOOTER ────────────────────────────────────────────────────────────────────
story.append(hr(color=BRAND_ACCENT, thickness=1))
footer_data = [[
    Paragraph(
        "AI Signal · Edition 002 · March 13, 2026 · Weekly AI Industry Intelligence · "
        "Repository: github.com/515mseibel-lab/AI · "
        "Signal Spectrum: Hearsay &amp; Conjecture vs. Reality",
        style_footer
    )
]]
footer_table = Table(footer_data, colWidths=[7.2*inch])
footer_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), BRAND_SECTION),
    ("TOPPADDING", (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
]))
story.append(footer_table)

# ─── Build PDF ─────────────────────────────────────────────────────────────────
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(f"PDF generated: {OUTPUT_FILE}")
