// AI Signal Newsletter — Edition 002 Data
// Design: Terminal Intelligence | Cyberpunk Editorial

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

export interface EditionHistoryItem {
  edition: string;
  date: string;
  leadStory: string;
  status: 'published' | 'current';
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

export const edition: { number: string; date: string; tagline: string; editorNote: string } = {
  number: '002',
  date: 'March 13, 2026',
  tagline: 'Hearsay & Conjecture vs. Reality — Ground News for AI',
  editorNote: `This week, the AI industry's collision with U.S. national security policy moved from background noise to front-page litigation. Anthropic's lawsuit against the Pentagon — and the industry-wide response it triggered — is the defining story of the week. Meanwhile, NVIDIA's GTC 2026 conference opens Monday with the Vera Rubin architecture expected to formally debut, ByteDance found a legal workaround to access frontier compute, and a new Anthropic labor study added nuance to the AI-jobs debate that most headlines are getting wrong. We also cover the Morgan Stanley 'intelligence explosion' report — and explain why you should read it with caution.`,
};

export const stories: Story[] = [
  {
    id: 'anthropic-pentagon',
    number: 1,
    type: 'FOLLOW-UP',
    headline: 'Anthropic vs. Pentagon — The Industry Unites',
    deck: 'Microsoft, OpenAI, and Google employees file amicus briefs as Anthropic\'s lawsuit escalates into a sector-wide confrontation with the Trump administration.',
    signal: 'grounded',
    signalLabel: 'Grounded',
    signalBars: 4,
    tags: [
      { label: '⚖ Source Conflict', type: 'conflict' },
      { label: '🕵 Missing Context', type: 'missing' },
      { label: '✓ Independently Confirmed', type: 'confirmed' },
    ],
    body: [
      'On March 9, Anthropic filed two federal lawsuits against the U.S. Department of Defense and related agencies, challenging the Pentagon\'s decision to designate the company a "supply chain risk" — a label that effectively bans it from federal contracts. The designation followed a breakdown in negotiations over whether Claude could be used in autonomous weapons systems and government surveillance programs, both of which Anthropic\'s usage policy explicitly prohibits.',
      'The industry response was swift and unusually unified. Within hours of the filing, more than 30 employees from OpenAI and Google DeepMind — including Google\'s chief scientist Jeff Dean — filed an amicus brief in support of Anthropic. Microsoft followed on March 10 with its own amicus brief, urging the court to issue a temporary restraining order against the Pentagon\'s designation. The Hill and Reuters both independently confirmed Microsoft\'s filing.',
      'The core legal dispute centers on whether the Pentagon\'s designation constitutes unlawful retaliation for Anthropic\'s refusal to remove safety guardrails from its models. Anthropic argues the designation is "legally unsound" and would cause irreparable harm to its existing federal contracts. The DOD has not publicly responded to the lawsuit\'s specific claims.',
    ],
    callouts: [
      {
        type: 'note',
        title: 'Editor\'s Note',
        body: 'This is a follow-up to Edition 001\'s lead story on the Anthropic vs. Pentagon dispute. New developments: Microsoft amicus brief (March 10), OpenAI/Google employee brief (March 9), and escalation to formal federal lawsuit.',
      },
      {
        type: 'warning',
        title: 'What\'s still missing',
        body: 'Reporting on Claude\'s alleged use in the Iran strikes — hours after the supply chain risk designation was announced — remains thin. The Intercept flagged this angle; mainstream outlets have not followed up. This is the most significant underreported element of the story.',
      },
    ],
    sources: 'Reuters, Wired (Maxwell Zeff), TechCrunch, The Hill, Forbes, NPR, WSJ, CNN, Anthropic (primary filings)',
  },
  {
    id: 'nvidia-gtc',
    number: 2,
    headline: 'NVIDIA GTC 2026: Vera Rubin Debuts, NemoClaw Rumored, and the Agentic Pivot',
    deck: 'NVIDIA\'s biggest conference of the year opens Monday. Vera Rubin is expected to formally launch — and a new open-source AI agent platform called NemoClaw may steal the show.',
    signal: 'mixed',
    signalLabel: 'Mixed',
    signalBars: 3,
    tags: [
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '🕵 Missing Context', type: 'missing' },
      { label: '🏢 Source Interest', type: 'source-interest' },
    ],
    body: [
      'NVIDIA\'s GTC 2026 conference runs March 16–19 in San Jose, California, with CEO Jensen Huang\'s keynote scheduled for Monday at 2 p.m. ET. The event is widely expected to serve as the formal debut of the Vera Rubin architecture — NVIDIA\'s next-generation AI chip platform succeeding Blackwell.',
      'Leaked specifications circulating ahead of the event describe Vera Rubin as delivering approximately 50 petaflops of inference performance, roughly 5x faster than Blackwell, with 10x cheaper inference token costs and a claimed ability to train frontier models with 4x fewer GPUs. These figures have not been independently verified and should be treated as promotional until confirmed by third-party benchmarks.',
      'Separately, Wired and CNBC reported that NVIDIA is planning to announce an open-source AI agent platform called NemoClaw at GTC. According to people familiar with the plans, NemoClaw is designed to help enterprise software companies deploy AI agents — and has already been pitched to major enterprise vendors. The platform is described as similar in concept to OpenClaw but built on NVIDIA\'s NeMo framework. NVIDIA has not officially confirmed NemoClaw\'s existence.',
      'The GTC conference is also expected to include announcements related to NVIDIA\'s $20 billion acquisition of Groq — a move that would give NVIDIA access to Groq\'s LPU (Language Processing Unit) architecture, which uses on-die SRAM to deliver dramatically faster inference for agentic workloads. An announcement is rumored but not confirmed.',
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Signal Note',
        body: 'GTC is NVIDIA\'s own event. All announcements should be treated as vendor-sourced until independently benchmarked. The Vera Rubin performance claims are particularly subject to marketing inflation — compare against IEEE Spectrum and ArXiv benchmarks when they emerge.',
      },
    ],
    sources: 'Wired (Zoë Schiffer, Lauren Goode), CNBC, Fortune, The Register, Forbes (Jon Markman), NVIDIA Blog (primary), DataCenter Dynamics',
  },
  {
    id: 'bytedance-malaysia',
    number: 3,
    headline: 'ByteDance Finds a Legal Workaround: 36,000 Blackwell GPUs via Malaysia',
    deck: 'TikTok\'s parent company is accessing a $2.5 billion NVIDIA Blackwell cluster — physically located in Malaysia — while U.S. export controls technically permit it.',
    signal: 'pure',
    signalLabel: 'Pure Signal',
    signalBars: 5,
    tags: [
      { label: '✓ Independently Confirmed', type: 'confirmed' },
      { label: '🏛 Government / Regulatory', type: 'regulatory' },
      { label: '🕵 Missing Context', type: 'missing' },
    ],
    body: [
      'ByteDance, the Chinese parent company of TikTok, is set to access a cluster of approximately 36,000 NVIDIA B200 Blackwell GPUs through Aolani Cloud, a Malaysia-based cloud operator. The cluster — consisting of roughly 500 NVL72 GB200 rack-scale systems and valued at approximately $2.5 billion — will be physically located in Malaysia and formally owned by Aolani, according to reporting by the Wall Street Journal confirmed by Tom\'s Hardware.',
      'NVIDIA confirmed to Tom\'s Hardware that the arrangement is compliant with current U.S. export control rules: "By design, the export rules allow clouds to be built and operated outside controlled countries," an NVIDIA spokesperson stated. ByteDance is not on the Bureau of Industry and Security\'s Entity List or Military End Use list, meaning its use of the cluster does not automatically trigger export control violations.',
      'The arrangement highlights a structural gap in the 2023 U.S. export control framework: the rules regulate where hardware is shipped, not where its compute is used. ByteDance has reportedly been leasing NVIDIA H100 GPUs from Aolani in Malaysia since February 2025, suggesting the Blackwell deployment is an expansion of an existing arrangement.',
    ],
    callouts: [
      {
        type: 'warning',
        title: 'What\'s missing',
        body: 'The funding source for the cluster expansion is unclear — Aolani currently operates approximately $100 million in hardware, making the proposed $2.5 billion expansion a 25x scale-up. Who is financing this, and whether ByteDance is the effective economic owner of the hardware, are questions the current reporting does not resolve.',
      },
    ],
    sources: 'Wall Street Journal (primary), Tom\'s Hardware (Anton Shilov), The Decoder, NVIDIA (on-record statement)',
  },
  {
    id: 'ai-jobs',
    number: 4,
    headline: 'The AI Jobs Debate Gets a Reality Check — From Anthropic\'s Own Economists',
    deck: 'A new Anthropic research paper maps AI\'s actual labor market impact — and finds a significant gap between what AI could automate and what it is actually automating today.',
    signal: 'grounded',
    signalLabel: 'Grounded',
    signalBars: 4,
    tags: [
      { label: '🎓 Peer-Reviewed', type: 'peer-reviewed' },
      { label: '🏢 Source Interest', type: 'source-interest' },
      { label: '⚖ Source Conflict', type: 'conflict' },
    ],
    body: [
      'Anthropic economists Maxim Massenkoff and Peter McCrory published a research paper this week measuring AI\'s actual versus potential labor market impact across U.S. occupations. The paper introduces a distinction between "theoretical exposure" (the percentage of tasks in a field that AI could potentially automate) and "observed exposure" (the percentage of tasks where AI is currently being used).',
      'The findings are more nuanced than most headlines suggest. Office administration has the highest observed exposure at approximately 40%, against a theoretical exposure of 90%. Computer programmers show 75% observed exposure; customer service representatives, 70%; data entry workers, 67%. However, fields like life sciences and healthcare — despite high theoretical exposure — show relatively low observed exposure today. Construction, agriculture, and skilled trades show near-zero exposure on both measures.',
      'Critically, the paper finds little evidence of actual job losses even in the most-exposed fields. The researchers note that AI "may be slow to diffuse due to legal constraints, specific software requirements, human verification steps, or other hurdles." A Stanford study cited in the paper found signs of a hiring slowdown among younger software programmers — but could not fully disentangle this from post-pandemic overhiring corrections.',
      'Separately, Atlassian announced on March 11 that it is cutting 10% of its global workforce — approximately 1,600 employees — citing the need to redirect resources toward AI. This follows Block\'s February announcement of 4,000 cuts. However, as with Block, the causal link between AI efficiency gains and the specific headcount reductions is CEO framing, not independently verified.',
    ],
    callouts: [
      {
        type: 'conflict',
        title: 'The conflict',
        body: 'Forbes published a pointed critique noting that Anthropic\'s study measures AI\'s impact on tasks, not on employment outcomes — and that AI could reduce hiring, slow promotions, and compress wages without triggering visible layoffs. The Brookings Institution published a concurrent analysis calling labor market AI research "still in the first inning."',
      },
    ],
    sources: 'Anthropic Research (primary paper), Fortune/Eye on AI (Jeremy Kahn), Forbes (Hamilton Mann), Brookings Institution (Jed Kolko), TechCrunch, Bloomberg, The Guardian',
  },
  {
    id: 'morgan-stanley',
    number: 5,
    headline: 'Morgan Stanley\'s \'Intelligence Explosion\' Report — Read It, But Read It Carefully',
    deck: 'The investment bank warns of a transformative AI leap in H1 2026, a 9–18 GW power shortfall, and mass workforce disruption. The signal is real. The framing needs scrutiny.',
    signal: 'speculative',
    signalLabel: 'Speculative',
    signalBars: 2,
    tags: [
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '🏢 Source Interest', type: 'source-interest' },
    ],
    body: [
      'Morgan Stanley published a sweeping report this week predicting a "transformative AI" breakthrough in the first half of 2026, driven by unprecedented compute accumulation at U.S. AI labs. The report cites Elon Musk\'s claim that applying 10x compute to LLM training effectively doubles model "intelligence" — and argues that scaling laws supporting this claim are holding firm.',
      'The report\'s most concrete claim is an infrastructure one: Morgan Stanley\'s "Intelligence Factory" model projects a net U.S. power shortfall of 9 to 18 gigawatts through 2028 — a 12% to 25% deficit in power needed to run planned AI infrastructure. This is consistent with independent analysis from Morgan Stanley\'s own energy research team (published February 2026) and Stanford HAI\'s recent grid infrastructure warning.',
      'The report also cites OpenAI\'s GPT-5.4 scoring 83.0% on the GDPVal benchmark — placing it "at or above the level of human experts on economically valuable tasks." This claim requires verification: the GDPVal benchmark is OpenAI-developed, and the 83% figure comes from OpenAI\'s own system card. No independent replication of this benchmark result has been published.',
    ],
    callouts: [
      {
        type: 'conflict',
        title: 'Why to read with caution',
        body: 'Morgan Stanley is an investment bank with significant financial exposure to AI infrastructure stocks. The report\'s framing — "the coin of the realm is becoming pure intelligence" — reads as market-moving commentary as much as neutral analysis. The xAI co-founder prediction of "recursive self-improvement loops" by H1 2027 is unverified speculation from a company with direct financial interest in AI hype. The power grid analysis is the most independently supportable element of the report.',
      },
    ],
    sources: 'Fortune (Nick Lichtenberg), Morgan Stanley Research (primary), Stanford HAI, Morgan Stanley Energy Research (Feb 2026)',
  },
];

export const pipeline: PipelineItem[] = [
  { topic: 'Claude use in Iran strikes post-ban', status: 'under-reported', statusLabel: '● Under-reported', priority: 'HIGH', sources: 'The Intercept, MIT Tech Review' },
  { topic: 'Vera Rubin benchmark reality vs. claims', status: 'watch', statusLabel: '◐ Watch (post-GTC)', priority: 'HIGH', sources: 'IEEE Spectrum, ArXiv, AnandTech' },
  { topic: 'Anthropic DOD lawsuit outcome', status: 'active', statusLabel: '● Active', priority: 'HIGH', sources: 'Court filings, CNN, CNBC' },
  { topic: 'ByteDance Malaysia cluster — funding source', status: 'verify', statusLabel: '? Verify', priority: 'MEDIUM', sources: 'WSJ, BIS filings, Reuters' },
  { topic: 'GPT-5.4 GDPVal 83% — independent replication', status: 'verify', statusLabel: '? Verify', priority: 'HIGH', sources: 'OpenAI system card, ArXiv, HELM' },
  { topic: 'EU AI Act enforcement timeline 2026', status: 'watch', statusLabel: '◐ Watch', priority: 'MEDIUM', sources: 'EU AI Office, The Guardian' },
];

export const editionHistory: EditionHistoryItem[] = [
  { edition: '001', date: 'March 13, 2026', leadStory: 'Anthropic vs. Pentagon (initial filing)', status: 'published' },
  { edition: '002', date: 'March 13, 2026', leadStory: 'Anthropic Follow-Up + NVIDIA GTC + ByteDance', status: 'current' },
];
