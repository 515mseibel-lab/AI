// AI Signal Newsletter — Edition 003 Data
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
  date: string;          // Human-readable, e.g. "March 13, 2026"
  isoDate: string;       // ISO format for sorting, e.g. "2026-03-13"
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
  number: '003',
  date: 'March 13, 2026',
  tagline: 'Hearsay & Conjecture vs. Reality — Ground News for AI',
  editorNote: `This week the AI industry's internal contradictions are on full display. Meta's third consecutive flagship model delay exposes the gap between $135 billion in capital commitments and actual frontier performance. OpenAI is integrating Sora into ChatGPT — a move that reads less like product strategy and more like a defensive response to Claude's surge. The Trump administration's AI executive order has set up a constitutional collision with 38 states that enacted their own AI laws in 2025. NVIDIA's GTC 2026 opens Monday with Vera Rubin's confirmed specs now public. And Sam Altman's "intelligence as utility" framing at the BlackRock Infrastructure Summit deserves a closer read than most outlets gave it.`,
};

export const stories: Story[] = [
  {
    id: 'meta-avocado-delay',
    number: 1,
    headline: 'Meta\'s Avocado AI Model Delayed — The Third Consecutive Flagship Miss',
    deck: 'Internal testing showed Avocado lagging behind GPT-5.4, Claude, and Gemini 3.1 Pro. Meta has now delayed three flagship models in a row while committing $135 billion in AI capex for 2026.',
    signal: 'mixed',
    signalLabel: 'Mixed',
    signalBars: 3,
    tags: [
      { label: '🕵 Missing Context', type: 'missing' },
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '⚖ Source Conflict', type: 'conflict' },
    ],
    body: [
      'Meta has postponed the release of its next-generation AI model, internally codenamed "Avocado," from its planned March debut to at least May 2026. According to The New York Times, citing multiple people with knowledge of the matter, internal assessments found Avocado lagging behind leading systems from OpenAI, Google, and Anthropic across reasoning, coding, and writing benchmarks.',
      'This is the third consecutive delay of a Meta flagship AI model. Llama 4 was delayed after failing internal benchmarks; Behemoth was pushed back due to engineering challenges in achieving meaningful performance improvements. Following those setbacks, Meta reorganized its AI projects under a single division. Avocado was meant to be the product of that reorganization — a model that would reestablish Meta as a peer to frontier labs.',
      'The stakes are significant. Meta has committed between $115 billion and $135 billion in capital expenditure for 2026, with a substantial portion directed at AI infrastructure. Despite this investment, the company has not produced a model that independently benchmarks as competitive with GPT-5.4 or Claude Opus 4.5. Internally, discussions have reportedly taken place about temporarily licensing a competitor\'s AI to power some Meta products while Avocado development continues — an extraordinary admission for a company that has staked its AI strategy on open-weights self-sufficiency. The company is already looking beyond Avocado to a successor reportedly named "Watermelon."',
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Signal note',
        body: 'All sourcing on this story is anonymous. The New York Times has a strong track record on Meta internal reporting, and Reuters independently confirmed the delay, but neither Meta nor any named executive has commented on the record. The performance gap claims — specifically that Avocado "lags behind" competitors — are based on internal benchmark results that have not been publicly disclosed.',
      },
      {
        type: 'conflict',
        title: 'The missing context',
        body: 'Meta\'s open-weights strategy is not just about frontier performance — it\'s about ecosystem control and enterprise adoption. Even a model that benchmarks below GPT-5.4 could be commercially significant if it\'s open-source and deployable on-premise. Most coverage of this delay frames it purely as a competitive loss without addressing this strategic dimension.',
      },
    ],
    sources: 'The New York Times (primary, anonymous sources), Reuters, Barron\'s, CNET, IndexBox Market Intelligence',
  },
  {
    id: 'openai-sora-chatgpt',
    number: 2,
    headline: 'OpenAI Integrates Sora into ChatGPT — A Competitive Response Wrapped in a Product Launch',
    deck: 'OpenAI plans to fold its AI video generator directly into ChatGPT. The move comes as ChatGPT uninstalls surged 295% following OpenAI\'s Pentagon deal — and as Claude\'s popularity reaches a new peak.',
    signal: 'grounded',
    signalLabel: 'Grounded',
    signalBars: 4,
    tags: [
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '🕵 Missing Context', type: 'missing' },
      { label: '🏢 Source Interest', type: 'source-interest' },
    ],
    body: [
      'OpenAI is planning to integrate its Sora AI video generator directly into ChatGPT, according to The Information, citing people with knowledge of the effort. Sora is currently only available as a standalone mobile and web app, which has fallen well short of ChatGPT\'s user numbers since its September 2025 launch. The integration would make video generation a built-in ChatGPT feature, similar to how image generation was added to the chatbot last year.',
      'The timing is notable. ChatGPT uninstalls surged 295% in the weeks following OpenAI\'s decision to agree to the Pentagon\'s terms — terms that Anthropic refused, triggering a federal lawsuit. Anthropic\'s Claude has been experiencing a significant boom in popularity during the same period. Adding Sora to ChatGPT appears to be at least partly a defensive move to retain and re-attract users who have migrated to Claude.',
      'The integration carries real risks. When Sora launched as a standalone app, users almost immediately generated realistic deepfakes of historical figures including Martin Luther King Jr., and produced videos containing copyrighted content. Making Sora accessible inside ChatGPT — which has a vastly larger user base — will substantially increase the scale of these problems. OpenAI is already showing ads in ChatGPT on its cheapest plans, and adding Sora would increase compute costs, potentially leading to further pricing changes. The company also recently backed out of a planned Stargate data center expansion in Texas due to financing issues.',
    ],
    callouts: [
      {
        type: 'note',
        title: 'Editor\'s Note',
        body: 'The Information\'s reporting is based on unnamed sources. OpenAI has not officially confirmed the integration or provided a timeline. The 295% uninstall surge figure comes from TechCrunch citing app analytics data — it measures app removals, not active user loss, and should be interpreted cautiously.',
      },
      {
        type: 'warning',
        title: 'What\'s missing',
        body: 'Most coverage frames this as a product expansion. The more important story is what it reveals about OpenAI\'s competitive position: the company that defined the consumer AI market is now reacting to Anthropic\'s momentum rather than leading it. The deepfake and content moderation implications of a Sora-ChatGPT integration are receiving almost no coverage.',
      },
    ],
    sources: 'The Information (primary, paywalled), The Verge (Stevie Bonifield), Reuters, PCMag, Gizmodo, TechCrunch',
  },
  {
    id: 'trump-ai-preemption',
    number: 3,
    headline: 'Trump\'s AI Executive Order vs. 50 State Laws — A Constitutional Collision in Progress',
    deck: 'The administration\'s "Ensuring a National Policy Framework for AI" order asserts broad federal preemption of state AI regulation. Legal experts say the theory faces significant obstacles. Meanwhile, states are not waiting.',
    signal: 'grounded',
    signalLabel: 'Grounded',
    signalBars: 4,
    tags: [
      { label: '🏛 Government / Regulatory', type: 'regulatory' },
      { label: '⚖ Source Conflict', type: 'conflict' },
      { label: '🕵 Missing Context', type: 'missing' },
    ],
    body: [
      'The Trump administration\'s executive order "Ensuring a National Policy Framework for Artificial Intelligence" asserts broad federal authority to preempt state AI laws, establishing what the administration calls a "minimally burdensome national standard." The order directs the Department of Justice to create an AI Litigation Task Force with the "sole responsibility" of challenging state AI laws on constitutional grounds — including Commerce Clause violations, federal preemption, and First Amendment arguments. The Commerce Department is required to publish an evaluation of "onerous" state laws, particularly those requiring AI models to "alter their truthful outputs."',
      'The legal theory faces substantial obstacles. Congress has already rejected two legislative attempts to preempt state AI regulation: a 10-year moratorium provision in the "One Big Beautiful Bill Act" was stripped by a 99-1 Senate vote, and a similar provision in the 2025 NDAA was also rejected. Legal analysts at Ropes Gray note that the administration\'s preemption arguments — particularly the claim that state anti-discrimination requirements force AI models to produce "false results" — are novel and likely to face significant judicial scrutiny.',
      'States are not waiting for the federal government to act. Washington state passed two significant AI bills this week: HB 1170 (AI disclosure requirements) and HB 2225 (chatbot safety for children, including self-harm protocols). Utah passed nine AI-related bills in its short session. Virginia passed three. Florida\'s Governor DeSantis introduced an "AI Bill of Rights" (SB 482) that passed the Senate 35-2 but is stalling in the House. In 2025 alone, all 50 states introduced AI legislation, and 38 enacted laws. The Commerce Department report identifying "onerous" state laws — due by March 11, 2026 — had not been publicly released as of this writing.',
    ],
    callouts: [
      {
        type: 'conflict',
        title: 'The core tension',
        body: 'The administration frames state AI laws as creating a "patchwork" that harms innovation and start-ups. State advocates frame the same laws as essential consumer protections that the federal government has refused to provide. Both framings contain truth. The administration\'s specific argument — that anti-discrimination requirements force AI models to produce "false results" — is a contested legal and technical claim that has not been adjudicated.',
      },
      {
        type: 'warning',
        title: 'What\'s missing',
        body: 'The Commerce Department report identifying specific state laws for DOJ challenge was due March 11 but has not been released. Until that report is public, the actual scope of the federal preemption effort remains unclear. Coverage of this story has largely focused on the executive order\'s text without tracking the implementation deadlines.',
      },
    ],
    sources: 'Ropes Gray (legal analysis), Transparency Coalition AI (legislative tracker), Bloomberg Government, Mondaq, White House (primary EO text), Florida Bar News',
  },
  {
    id: 'nvidia-gtc-confirmed',
    number: 4,
    headline: 'NVIDIA GTC 2026 — What\'s Confirmed, What\'s Rumored, and What the Specs Actually Mean',
    deck: 'Vera Rubin\'s architecture is now public: 288 GB HBM4, 35–50 petaFLOPS, 5x over Blackwell. The Groq acquisition\'s strategic logic is becoming clear. NemoClaw remains unconfirmed. GTC opens Monday.',
    signal: 'mixed',
    signalLabel: 'Mixed',
    signalBars: 3,
    tags: [
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '🕵 Missing Context', type: 'missing' },
      { label: '🏢 Source Interest', type: 'source-interest' },
    ],
    body: [
      'NVIDIA\'s GTC 2026 conference opens Monday, March 16 in San Jose, with CEO Jensen Huang\'s keynote at 11 a.m. PT. The Vera Rubin GPU architecture — first teased at CES in January — has now been publicly detailed: 288 GB of HBM4 memory, 22 TB/s of memory bandwidth, and 35–50 petaFLOPS of dense NVFP4 performance depending on configuration. This represents a 5x throughput improvement over Blackwell. The chip\'s thermal design power is estimated at approximately 1.8 kW, making liquid cooling a requirement rather than an option — a potential adoption barrier for some data center operators.',
      'The strategic context for GTC is NVIDIA\'s $20 billion acquisition of Groq, completed in December 2025. Groq\'s LPU (Language Processing Unit) architecture uses on-die SRAM rather than HBM, enabling token generation rates exceeding 500–1,000 tokens per second — dramatically faster than GPU-based architectures for latency-sensitive agentic workloads. This is precisely the capability gap that allowed Cerebras to win OpenAI\'s Codex model business earlier this year. At GTC, NVIDIA is expected to announce how it will integrate Groq\'s dataflow architecture into its CUDA software stack, though full integration is a multi-year engineering effort.',
      'NVIDIA is also expected to detail its standalone Vera CPU — 88 custom Arm cores with simultaneous multithreading and confidential computing features. Meta has been confirmed as the first partner to evaluate Vera CPUs for datacenter deployment. Looking further out, Huang is expected to preview Kyber racks (2027, 600 kW, 144 GPU sockets) and Feynman GPUs (2028, expected to exceed 1 MW per rack). NVIDIA has also invested $2 billion in Nebius AI cloud and is backing former OpenAI CTO Mira Murati\'s new startup, signaling continued expansion beyond chip hardware.',
    ],
    callouts: [
      {
        type: 'warning',
        title: 'Signal note',
        body: 'GTC is NVIDIA\'s own conference. All performance claims should be treated as vendor-sourced until independently benchmarked by IEEE Spectrum, AnandTech, or ArXiv. The 35–50 petaFLOPS figure is NVIDIA\'s own specification; real-world inference performance will depend heavily on workload type and memory utilization patterns. NemoClaw — the rumored open-source AI agent platform — has not been officially confirmed by NVIDIA as of this writing.',
      },
      {
        type: 'note',
        title: 'What to watch at the keynote',
        body: 'The most important announcement will not be raw GPU specs — those are already public. Watch for: (1) how NVIDIA frames the Groq integration timeline and what "limited support" means in practice; (2) whether a standalone air-cooled Rubin variant is announced for buyers who cannot accommodate liquid cooling; (3) any confirmation or denial of NemoClaw.',
      },
    ],
    sources: 'The Register (Tobias Mann), Fortune, TradingKey, NVIDIA Blog (primary), Seeking Alpha, SemiAnalysis InferenceX benchmarks',
  },
  {
    id: 'altman-intelligence-utility',
    number: 5,
    headline: 'Sam Altman\'s "Intelligence as Utility" Speech — What He Said, What He Meant, and What He Left Out',
    deck: 'At the BlackRock Infrastructure Summit, OpenAI\'s CEO called AI "too cheap to meter" and admitted the labor-capital balance is fundamentally breaking. Read the full context before accepting the framing.',
    signal: 'speculative',
    signalLabel: 'Speculative',
    signalBars: 2,
    tags: [
      { label: '🔥 Hype Alert', type: 'hype' },
      { label: '🏢 Source Interest', type: 'source-interest' },
    ],
    body: [
      'Speaking at BlackRock\'s U.S. Infrastructure Summit on Wednesday, OpenAI CEO Sam Altman offered what he described as a vision for AI\'s future: "We see a future where intelligence is a utility, like electricity or water, and people buy it from us on a meter." He expanded on the "too cheap to meter" framing — a phrase borrowed from early nuclear energy advocates who predicted electricity would eventually be free — as the goal for AI compute costs. Altman also predicted that by late 2028, the cognitive capacity inside data centers will eclipse human capacity outside them.',
      'The labor market comments were more candid than most of Altman\'s public appearances. He acknowledged that the traditional balance between labor and capital is "fundamentally changing" and admitted that if it is "hard in many of our current jobs to outwork a GPU, then that changes" the basis of capitalism. He described the next few years as "a painful adjustment" with "very intense and uncomfortable debates" over how to reshape society. He noted that AI has become a widespread scapegoat for corporate downsizing — "almost every company that does layoffs is blaming AI, whether or not it really is about AI" — while simultaneously confirming that the underlying structural threat to employment is real.',
      'The context the speech omits is significant. Altman was speaking to Adebayo Ogunlesi, who is both a BlackRock executive and a member of OpenAI\'s board of directors — a setting that creates obvious incentives for optimistic framing. The "too cheap to meter" analogy is historically ironic: nuclear power never achieved that status, and AI\'s energy consumption is currently a major pain point for communities near data centers. OpenAI recently backed out of a planned Stargate expansion in Texas due to financing issues. OpenAI CFO Sarah Friar previously called for a federal "backstop" to guarantee the company\'s infrastructure investments — a comment both she and Altman later walked back. The utility framing implicitly revives that suggestion.',
    ],
    callouts: [
      {
        type: 'conflict',
        title: 'The framing problem',
        body: 'Describing AI as a utility carries a specific regulatory implication: utilities are typically subject to public oversight, rate regulation, and universal service obligations. Altman almost certainly does not intend to invite that kind of regulatory framework. The utility metaphor is being deployed to suggest abundance and accessibility while avoiding the accountability structures that come with actual utility status.',
      },
      {
        type: 'warning',
        title: 'What\'s missing from coverage',
        body: 'Most coverage of this speech focused on the "too cheap to meter" soundbite. The more substantive admission — that Altman genuinely does not know how society will manage the labor displacement AI is causing — received far less attention. His statement that "if there was an easy consensus answer, we\'d have done it by now, so I don\'t think anyone knows what to do" is a remarkable admission from the CEO of the company most responsible for accelerating that displacement.',
      },
    ],
    sources: 'Gizmodo (primary transcript analysis), Fortune (Sharon Goldman), BlackRock Infrastructure Summit (video, public), Reuters, OpenAI (board disclosure)',
  },
];

export const pipeline: PipelineItem[] = [
  { topic: 'Vera Rubin benchmark reality vs. claims (post-GTC)', status: 'active', statusLabel: '● Active (GTC this week)', priority: 'HIGH', sources: 'IEEE Spectrum, ArXiv, AnandTech' },
  { topic: 'Anthropic DOD lawsuit outcome', status: 'active', statusLabel: '● Active', priority: 'HIGH', sources: 'Court filings, CNN, CNBC' },
  { topic: 'NemoClaw open-source agent platform — confirmation', status: 'watch', statusLabel: '◐ Watch (GTC keynote)', priority: 'HIGH', sources: 'NVIDIA Blog, Wired, CNBC' },
  { topic: 'Commerce Dept AI state law evaluation (due March 11, unreleased)', status: 'verify', statusLabel: '? Verify', priority: 'HIGH', sources: 'Commerce Dept, Bloomberg Government' },
  { topic: 'Meta Avocado performance benchmarks — when released', status: 'watch', statusLabel: '◐ Watch (May release)', priority: 'HIGH', sources: 'Hugging Face, ArXiv, HELM' },
  { topic: 'OpenAI Sora → ChatGPT integration timeline', status: 'watch', statusLabel: '◐ Watch', priority: 'MEDIUM', sources: 'The Information, The Verge, OpenAI Blog' },
  { topic: 'ByteDance Malaysia cluster — funding source', status: 'verify', statusLabel: '? Verify', priority: 'MEDIUM', sources: 'WSJ, BIS filings, Reuters' },
  { topic: 'GPT-5.4 GDPVal 83% — independent replication', status: 'verify', statusLabel: '? Verify', priority: 'HIGH', sources: 'OpenAI system card, ArXiv, HELM' },
  { topic: 'Claude use in Iran strikes post-ban', status: 'under-reported', statusLabel: '● Under-reported', priority: 'HIGH', sources: 'The Intercept, MIT Tech Review' },
  { topic: 'EU AI Act enforcement timeline 2026', status: 'watch', statusLabel: '◐ Watch', priority: 'MEDIUM', sources: 'EU AI Office, The Guardian' },
];

export const editionHistory: EditionHistoryItem[] = [
  { edition: '001', date: 'March 13, 2026', isoDate: '2026-03-13', leadStory: 'Anthropic vs. Pentagon (initial filing)', status: 'published' },
  { edition: '002', date: 'March 13, 2026', isoDate: '2026-03-13', leadStory: 'Anthropic Follow-Up + NVIDIA GTC + ByteDance', status: 'published' },
  { edition: '003', date: 'March 13, 2026', isoDate: '2026-03-13', leadStory: 'Meta Avocado Delay + OpenAI Sora + Trump AI EO', status: 'current' },
];
