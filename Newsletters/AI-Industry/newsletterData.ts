/* ═══════════════════════════════════════════════════════════════════
   AI SIGNAL — Newsletter Data
   Design: Terminal Intelligence | Cyberpunk Editorial
   ═══════════════════════════════════════════════════════════════ */

export type SignalTier = 'pure' | 'grounded' | 'mixed' | 'speculative' | 'hearsay';

export interface Tag {
  label: string;
  type: 'conflict' | 'missing' | 'confirmed' | 'hype' | 'regulatory' | 'peer-reviewed' | 'source-interest';
}

export interface Callout {
  type: 'note' | 'warning' | 'conflict';
  title: string;
  body: string;
}

export interface Story {
  id: string;
  number: number;
  type?: string;
  headline: string;
  deck: string;
  signal: SignalTier;
  signalLabel: string;
  signalBars: number;
  tags: Tag[];
  body: string[];
  callouts: Callout[];
  sources: string;
}

export interface PipelineItem {
  topic: string;
  status: 'under-reported' | 'watch' | 'active' | 'verify';
  statusLabel: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  sources: string;
}

export interface Edition {
  number: string;
  date: string;       // Human-readable, e.g. "March 13, 2026"
  isoDate: string;    // ISO format for sorting, e.g. "2026-03-13"
  tagline: string;
  editorNote: string;
  stories: Story[];
  pipeline: PipelineItem[];
}

export const SIGNAL_TIERS: Record<SignalTier, { color: string; bg: string; border: string; glow: string }> = {
  pure:        { color: '#00e5b0', bg: 'rgba(0,229,176,0.08)', border: 'rgba(0,229,176,0.4)',  glow: '0 0 12px rgba(0,229,176,0.3)' },
  grounded:    { color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.4)', glow: '0 0 12px rgba(56,189,248,0.3)' },
  mixed:       { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.4)', glow: '0 0 12px rgba(251,191,36,0.3)' },
  speculative: { color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.4)', glow: '0 0 12px rgba(251,146,60,0.3)' },
  hearsay:     { color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.4)', glow: '0 0 12px rgba(192,132,252,0.3)' },
};

export const TAG_STYLES: Record<Tag['type'], { color: string; bg: string; border: string }> = {
  conflict:      { color: '#fb923c', bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.3)' },
  missing:       { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)' },
  confirmed:     { color: '#00e5b0', bg: 'rgba(0,229,176,0.08)',   border: 'rgba(0,229,176,0.3)' },
  hype:          { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.3)' },
  regulatory:    { color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.3)' },
  'peer-reviewed': { color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.3)' },
  'source-interest': { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)' },
};

// ── ALL EDITIONS (newest last — nav sorts by isoDate) ─────────────────────────
// To add a new edition: append a new Edition object to this array.
// The app always displays the LAST entry by default.

export const allEditions: Edition[] = [
  // ── EDITION 001 — Week of March 13, 2026 ─────────────────────────────────────
  {
    number: '001',
    date: 'March 13, 2026',
    isoDate: '2026-03-13',
    tagline: 'Lawsuits, layoffs, and a keynote that could reshape the stack.',
    editorNote: `This week the AI industry collided with three forces it has long preferred to avoid: the federal government, the energy grid, and its own workforce. Anthropic is suing the Pentagon. Senate Democrats are probing eight AI companies over gas-powered data centers. Block just cut 40% of its staff and called it a feature, not a bug. Meanwhile, NVIDIA is about to take the stage at GTC 2026 — and Meta quietly delayed its most important model of the year. Five stories. One spectrum. Let's get into it.`,
    stories: [
      {
        id: 'anthropic-pentagon-lawsuit',
        number: 1,
        headline: 'Anthropic vs. the Pentagon: The Lawsuit That Could Reshape the AI-Defense Relationship',
        deck: 'After refusing to give the DoD unrestricted access to Claude, Anthropic was designated a "supply chain risk." Now it\'s fighting back in federal court — and the stakes extend far beyond one contract.',
        signal: 'grounded',
        signalLabel: 'Grounded',
        signalBars: 4,
        tags: [
          { label: '✓ Confirmed', type: 'confirmed' },
          { label: '🏛 Government / Regulatory', type: 'regulatory' },
          { label: '⚖ Source Conflict', type: 'conflict' },
        ],
        body: [
          'On March 9, 2026, Anthropic filed two simultaneous federal lawsuits against the Department of Defense, challenging the Pentagon\'s decision to designate the company a "supply chain risk" and ordering all federal agencies to stop using Claude within six months. The underlying dispute is straightforward: Anthropic refused to grant the DoD unrestricted access to its frontier model, insisting on contractual prohibitions against mass surveillance of U.S. citizens and autonomous lethal weapons without human oversight. The Pentagon\'s response was to cancel a $200 million contract signed just eight months prior and label the company a national security liability.',
          'The legal arguments Anthropic is advancing are substantive. The company cites 10 U.S.C. § 3252 procedural limitations, First Amendment and due process claims, and the Luokung and Xiaomi precedents — cases where courts struck down similar national security designations as procedurally defective. The inherent contradiction in the government\'s position — Anthropic is dangerous, but you have six months to phase it out — may itself be the strongest argument.',
          'What makes this story more than a contract dispute is the commercial blast radius. Anthropic\'s Claude runs on classified military networks and is embedded across AWS, Google Cloud, Accenture, Deloitte, and hundreds of defense contractors. A sustained "supply chain risk" designation could force every federal contractor to certify zero exposure to Anthropic products — a requirement that would cascade through the entire enterprise software ecosystem. OpenAI has already moved to fill the void.',
          'The geopolitical dimension is equally uncomfortable. Both Anthropic and OpenAI have publicly accused Chinese labs of distilling their models; those open-source derivatives, including DeepSeek, are now available to the PLA with zero guardrails. The question the lawsuit forces into the open: does restricting your own frontier AI company while adversaries train on pirated versions of the same technology actually improve national security?',
        ],
        callouts: [
          {
            type: 'conflict',
            title: 'The key conflict',
            body: 'The DoD has not publicly released the technical basis for its safety determination. Without that documentation, it is impossible to evaluate whether the blacklisting reflects a genuine safety assessment or a procurement dispute dressed up in safety language.',
          },
        ],
        sources: 'Reuters (March 9, 2026), Fortune (March 12, 2026), Washington Post (March 9, 2026), The Nation (March 11, 2026), court filings (PACER)',
      },
      {
        id: 'nvidia-gtc-2026-preview',
        number: 2,
        headline: 'GTC 2026: Jensen Huang Takes the Stage Monday — Here\'s What the Stack Actually Looks Like',
        deck: 'NVIDIA\'s annual developer conference opens in San Jose on March 16. The keynote will cover chips, software, models, and agentic AI — a buildout measured in gigawatts. What\'s confirmed, what\'s rumored, and what to watch.',
        signal: 'mixed',
        signalLabel: 'Mixed',
        signalBars: 3,
        tags: [
          { label: '✓ Confirmed (conference)', type: 'confirmed' },
          { label: '🔥 Hype Alert (timelines)', type: 'hype' },
          { label: '🏢 Source Interest', type: 'source-interest' },
        ],
        body: [
          'NVIDIA CEO Jensen Huang will deliver the GTC 2026 keynote at the SAP Center in San Jose on Monday, March 16 at 11 a.m. PT, to an audience arriving from 190 countries. The conference runs through March 20 and spans more than 700 sessions covering physical AI, AI factories, agentic AI, and inference infrastructure.',
          'What is confirmed: Huang will address the full stack — chips, software, models, and applications. The pregame show at 8 a.m. PT features the CEOs of Perplexity, LangChain, Mistral, Skild AI, and OpenEvidence. On Wednesday, March 18, Huang will moderate a panel on open models with Harrison Chase of LangChain and leaders from A16Z, AI2, Cursor, and Thinking Machines Lab — a conversation framed around where open models stand against closed frontier systems.',
          'NVIDIA has described this year\'s GTC through the lens of a "five-layer foundation" for AI infrastructure, with agentic AI and inference receiving particular emphasis. The company has been signaling a significant CPU push alongside its GPU dominance, with specialized processors for agentic workloads expected to be a central announcement. NVIDIA\'s partnership with Thinking Machines Lab on a gigawatt-scale strategic partnership was announced this week, signaling the scale of infrastructure ambition on display.',
          'What to watch carefully: the gap between what NVIDIA announces and what ships. GTC keynotes are masterclasses in roadmap theater — announced architectures routinely take 12–18 months to reach customer hands. Any specific chip timeline announced Monday should be treated as speculative until delivery dates are confirmed by customers, not press releases.',
        ],
        callouts: [
          {
            type: 'warning',
            title: 'Signal note',
            body: 'GTC is NVIDIA\'s own conference. All performance claims are vendor-sourced until independently benchmarked. Treat roadmap announcements as aspirational until third-party confirmation.',
          },
        ],
        sources: 'NVIDIA Blog (March 11, 2026), Yahoo Finance (March 13, 2026), Reuters (March 13, 2026), Seeking Alpha (March 13, 2026)',
      },
      {
        id: 'ai-layoffs-block-atlassian',
        number: 3,
        headline: 'The AI Layoff Template: Block Cut 40%, Atlassian Cut 5% — And Both Called It a Strategy',
        deck: 'Jack Dorsey didn\'t just lay off 4,000 people. He published a manifesto. The pattern of companies using AI capability gains as cover for workforce restructuring is accelerating — and the framing deserves scrutiny.',
        signal: 'grounded',
        signalLabel: 'Grounded',
        signalBars: 4,
        tags: [
          { label: '✓ Confirmed', type: 'confirmed' },
          { label: '🔥 Hype Alert', type: 'hype' },
          { label: '🕵 Missing Context', type: 'missing' },
        ],
        body: [
          'On February 26, 2026, Jack Dorsey announced Block would reduce its workforce from over 10,000 employees to just under 6,000 — a cut of more than 40%. The stated rationale was not financial distress. Block had just delivered Q4 gross profit of $2.87 billion, up 26% year-over-year, with Cash App gross profit up 33%. Dorsey\'s explanation was explicit: "Intelligence tools have changed what it means to build and run a company. A significantly smaller team, using the tools we\'re building, can do more and do it better."',
          'He went further: "Within the next year, I believe the majority of companies will reach the same conclusion and make similar structural changes." The catalyst he cited was a December 2025 capability leap — "the models just got an order of magnitude more capable." Block\'s internal agentic coding tool, Goose, has reportedly delivered a greater than 40% increase in production code shipped per engineer since September.',
          'Atlassian followed weeks later with a 5% reduction — approximately 1,600 employees — citing similar reasoning. The pattern is now visible across the industry: Meta is concentrating talent on elite AI researchers while flattening other roles; Salesforce closed 3,000 Agentforce customers in Q4 while framing AI as augmentation rather than replacement.',
          'The missing context that most coverage omits: the December capability leap Dorsey references is not publicly documented. No model release from any major lab in December 2025 was announced as an "order of magnitude" improvement. The honest read is that Block made a financial and organizational bet — a reasonable one — and AI provided the narrative frame. That framing matters because it shapes how regulators, workers, and investors interpret what is happening. Calling a restructuring an "AI pivot" is not the same as proving AI caused it.',
        ],
        callouts: [
          {
            type: 'conflict',
            title: 'What\'s missing',
            body: 'Block\'s Q4 gross profit was up 26% YoY when Dorsey announced the 40% cut. This was not a distressed company. The AI framing is plausible but not independently verifiable — no third-party audit of Block\'s internal AI productivity claims has been published.',
          },
        ],
        sources: 'Yahoo Finance (March 11, 2026), Business Insider (March 13, 2026), AOL/AP (March 13, 2026)',
      },
      {
        id: 'senate-ai-data-centers-gas',
        number: 4,
        headline: 'Senate Democrats Open Probe Into AI\'s Gas-Powered Data Center Buildout',
        deck: 'Senators Whitehouse, Heinrich, and Van Hollen sent letters to Meta, OpenAI, xAI, and five other companies over 12 planned gas-powered data center projects. One proposed plant alone would emit 30 million tons of CO₂ annually.',
        signal: 'pure',
        signalLabel: 'Pure Signal',
        signalBars: 5,
        tags: [
          { label: '✓ Confirmed', type: 'confirmed' },
          { label: '🏛 Government / Regulatory', type: 'regulatory' },
        ],
        body: [
          'On March 13, 2026, Senators Sheldon Whitehouse (D-RI), Martin Heinrich (D-NM), and Chris Van Hollen (D-MD) launched a formal investigation into eight AI companies — Meta, OpenAI, xAI, Fermi America, American Intelligence & Power Corporation, Joule, Crusoe, and Fundamental Data — over twelve planned data center projects that would be powered by new gas plants.',
          'The scale of what is being proposed is not incremental. The gas plants under review are, in many cases, ten or more times the size of the average gas plant currently operating on the U.S. grid. One project — Pacifico Energy\'s GW Ranch, a 7.65 GW gas plant — would, if permitted, become one of the largest single emissions sources in the world. Its air pollution permit, the largest ever issued in the United States, authorizes 12,000 tons of health-harming pollutants and over 30 million tons of greenhouse gases annually.',
          'The senators\' letter is direct about the cumulative math: "If all the gas projects currently under development in the United States are completed, they will add a combined 12.1 billion tons of carbon dioxide emissions in their lifetimes, double the annual emissions from all other sources in the U.S. today."',
          'The companies have until March 27, 2026 to respond with answers about their decisions to rely primarily on gas, whether carbon capture is planned, and the expected rate of return on the projects. This is a minority investigation — Senate Democrats do not control committee chairmanships in the current Congress — which limits its immediate enforcement power. But the documentation it generates will be consequential for permitting battles, investor ESG disclosures, and future legislation.',
        ],
        callouts: [
          {
            type: 'note',
            title: 'The number that matters',
            body: '12.1 billion tons of lifetime CO₂ emissions if all planned AI gas data center projects are completed — double the current annual emissions from all other U.S. sources combined. That figure comes from the senators\' own letter, citing public permit filings.',
          },
        ],
        sources: 'Senate EPW Committee press release (March 13, 2026, primary), Bloomberg Law (March 13, 2026), Politico Pro (March 13, 2026)',
      },
      {
        id: 'meta-avocado-delay',
        number: 5,
        headline: 'Meta\'s "Avocado" Model Is Delayed to May — and the Competitive Gap Is Showing',
        deck: 'Meta\'s next-generation foundational model has been pushed back at least two months after internal performance benchmarks fell short. The delay is a data point in a larger story about Meta\'s position in the frontier model race.',
        signal: 'grounded',
        signalLabel: 'Grounded',
        signalBars: 4,
        tags: [
          { label: '✓ Confirmed', type: 'confirmed' },
          { label: '🕵 Missing Context', type: 'missing' },
        ],
        body: [
          'Meta has delayed the release of its next-generation foundational AI model, internally codenamed "Avocado," to at least May 2026, pushed back from a planned March release. The New York Times first reported the delay, citing people familiar with the matter who said performance benchmarks fell short of internal targets and that leaders of Meta\'s AI division were briefed on the setback.',
          'The delay is notable for several reasons. Meta has been investing at extraordinary scale — the company is guiding for $115–135 billion in 2026 capital expenditure, with AI infrastructure as the primary driver. Zuckerberg has publicly framed 2026 as the year Meta catches up to or surpasses OpenAI and Google on frontier models. Avocado was meant to be the proof point.',
          'The competitive context is unforgiving. Google, OpenAI, and Anthropic are all widely regarded as ahead on foundational models. Meta\'s Llama series has been successful as an open-weight model — widely deployed, heavily fine-tuned — but open-weight leadership and frontier model leadership are different things. The gap between what Llama can do and what GPT-4o or Claude 3.5 can do on complex reasoning tasks remains visible in enterprise benchmarks.',
          'What is missing from most coverage: the specific nature of the performance shortfall. "Fell short of internal targets" could mean anything from a 2% gap on a specific benchmark to a fundamental architectural problem. Without that detail, the severity of the delay is impossible to assess. Meta stock slipped on the news but did not crater — suggesting investors are treating this as a timing issue, not a structural one.',
        ],
        callouts: [
          {
            type: 'warning',
            title: 'What\'s missing',
            body: 'The specific nature of the benchmark shortfall has not been disclosed. "Fell short of internal targets" is not a technical description. Until Meta publishes details or a third party benchmarks the model, the severity of this delay cannot be independently assessed.',
          },
        ],
        sources: 'Reuters (March 12, 2026), Investors.com (March 13, 2026), Yahoo Finance (March 13, 2026)',
      },
    ],
    pipeline: [
      { topic: 'NVIDIA GTC 2026 Keynote Recap — What Jensen Actually Announced', status: 'watch', statusLabel: '◐ Watch (March 16)', priority: 'HIGH', sources: 'NVIDIA Blog, TechCrunch, Reuters' },
      { topic: 'Anthropic Pentagon Lawsuit — DoD Response Due April 15', status: 'active', statusLabel: '● Active', priority: 'HIGH', sources: 'Reuters, Washington Post, PACER' },
      { topic: 'Senate AI Data Center Probe — Company Responses Due March 27', status: 'active', statusLabel: '● Active', priority: 'HIGH', sources: 'Senate EPW, Bloomberg Law' },
      { topic: 'Meta Avocado — May Release Confirmed or Further Delayed?', status: 'watch', statusLabel: '◐ Watch', priority: 'MEDIUM', sources: 'NYT, Reuters, The Verge' },
      { topic: 'AI Layoff Wave — Which Companies Follow Block and Atlassian?', status: 'watch', statusLabel: '◐ Watch', priority: 'MEDIUM', sources: 'TechCrunch, Bloomberg, Layoffs.fyi' },
      { topic: 'International AI Safety Report — Capabilities vs. Governance Gap', status: 'under-reported', statusLabel: '↓ Under-Reported', priority: 'LOW', sources: 'Nature, AI Safety Institute' },
    ],
  },
];

// Convenience export — always points to the most recent edition
export const currentEdition = allEditions[allEditions.length - 1];
