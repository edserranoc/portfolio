// Canonical brand constants for the verbal layer of the personal brand.
// Mirror of BRAND.md (repo root). Update both in the same commit.
//
// Locked: 2026-05-01. Hierarchy: Engineering 70% / Applied Research 25% / Foundations 5%.
// Voice: formal B2B, deeply technical, Apple-style cadence — sentences as headlines,
// periods as rhythm, every word earns its place.

// Two sentences, one per line in hero rendering. Period cadence,
// no hyphens. Apple-style ("Pro. Beyond." / "Think different.").
// In prose contexts (bios), use the comma form: "Frontier AI, engineered for production."
export const TAGLINE = "Data science. Grounded in evidence.";

// Sub-tagline. Different vocabulary so it adds claim instead of repeating.
export const SUB_TAGLINE = "From data to decisions.";

export const ROLE = "Data Scientist";

export const STRAP_LINE = "Data Scientist · Applied Mathematician · Scientific Computing";

// Short bio. For Twitter/X, GitHub header, talk speaker tagline. ~30 words.
// "Frontier" lives in the tagline only — bios show facts, not adjectives.
export const BIO_50 =
  "Data Scientist working across machine learning, data analysis, and statistical modeling. " +
  "Focused on turning complex datasets into clear, useful decisions.";

// Medium bio. For LinkedIn short form, conference speaker bio.
export const BIO_100 =
  "Data Scientist focused on machine learning, data analysis, and statistical modeling.\n\n" +
  "I work with complex datasets to identify patterns, build reliable models, and " +
  "turn analysis into decisions that people can act on.\n\n" +
  "My focus is the work between raw data and useful outcomes: clear questions, " +
  "careful measurement, reproducible analysis, and models that support real decisions.";

// Long bio. For /about, full LinkedIn About, full conference bio.
export const BIO_200 =
  "Data Scientist focused on machine learning, data analysis, and statistical modeling.\n\n" +
  "I turn complex datasets into structured evidence for better decisions. My work " +
  "spans data preparation, exploratory analysis, model development, evaluation, and " +
  "the communication required to make technical findings useful.\n\n" +
  "I care about the full path from question to answer: defining the problem clearly, " +
  "choosing methods that fit the evidence, validating assumptions, and building " +
  "analysis that can be understood and reproduced.\n\n" +
  "Open to analytical projects, research collaborations, and opportunities to build " +
  "data products that make complex information easier to use.";

// Hero body. List-of-three then context. Apple period cadence, no em-dashes.
export const HERO_BODY =
  "Machine learning. Statistical modeling. Data analysis. " +
  "Evidence for better decisions.";

// Three content pillars. Order enforces the 70/25/5 hierarchy.
// `color` is a Tailwind palette key consumed by existing components.
// `icon` is the Lucide icon component name (consumer imports it from lucide-react).
export const PILLARS = [
  {
    id: "production-ai-systems",
    name: "Production AI Systems",
    oneLiner:
      "The systems themselves: RAG and GraphRAG platforms, agentic architectures, knowledge applications, LLM ops at scale.",
    homeCopy: "Production AI, shipped. Retrieval, agents, and knowledge applications in users' hands.",
    color: "blue",
    icon: "Server",
  },
  {
    id: "engineering-practice",
    name: "Engineering Practice",
    oneLiner:
      "How they ship: architecture decisions, MLOps, evaluation, governance, the engineering moves between prototype and production.",
    homeCopy: "From notebook to running system. Architecture, evaluation, and ops at scale.",
    color: "indigo",
    icon: "Cpu",
  },
  {
    id: "applied-research",
    name: "Applied Research",
    oneLiner:
      "Reading the research: paper-to-product translation, what survives contact with production.",
    homeCopy: "Research, translated. From paper to running system.",
    color: "emerald",
    icon: "BrainCircuit",
  },
];

// Hero chips replace the previous Autonomous Agents / Distributed Systems / Enterprise
// MLOps / Scalable Architecture set. These are short noun phrases for the four cards
// directly under the hero tagline.
export const HERO_CHIPS = [
  "RAG & GraphRAG",
  "Agentic Architectures",
  "Knowledge Systems",
  "LLM Ops",
];

// Anchor topics — six things the brand is being built around.
// Each maps to a potential talk topic and a potential blog series.
// Cap is six. To add a 7th, retire one.
export const ANCHOR_TOPICS = [
  {
    id: "production-rag-at-scale",
    label: "Production RAG at scale",
    claim:
      "Chunking, retrieval evaluation, hybrid search, latency under regulated constraints.",
    talkTitle: "Production RAG: what the papers leave out",
    seriesTitle: "Production RAG Field Manual",
  },
  {
    id: "agentic-architectures-in-prod",
    label: "Agentic architectures in production",
    claim: "Agent patterns that ship vs. demos, tool design, failure modes, evaluation.",
    talkTitle: "Agents that survive production: patterns and anti-patterns",
    seriesTitle: "Agent Architectures in Practice",
  },
  {
    id: "knowledge-systems-for-llms",
    label: "Knowledge systems for LLM applications",
    claim:
      "Knowledge graphs, ontologies, retrieval-grounded knowledge platforms.",
    talkTitle: "From documents to knowledge: building the substrate for LLM agents",
    seriesTitle: "Knowledge Systems for LLMs",
  },
  {
    id: "llm-ops-regulated-industries",
    label: "LLM ops in regulated industries",
    claim:
      "Compliance, governance, audit trails, evaluation under banking / healthcare constraints.",
    talkTitle: "Shipping LLM features in a regulated bank",
    seriesTitle: "LLM Ops in Regulated Industries",
  },
  {
    id: "evaluation-in-production",
    label: "Evaluation in production",
    claim:
      "Beyond static benchmarks; live evaluation harnesses, drift detection for LLM systems.",
    talkTitle: "Evaluation that survives production",
    seriesTitle: "Evals in the Wild",
  },
  {
    id: "data-foundations-for-ai",
    label: "Data foundations for AI",
    claim: "Lakehouse-to-agent pipelines; the data layer agents actually need.",
    talkTitle: "The data layer your agents actually need",
    seriesTitle: "Data Foundations for AI",
  },
];

// Hard blocklist — none of these strings should appear on any brand-facing surface.
// Includes hype words, corporate filler, intensifier filler, and the retired
// three-identity strap-line. Use as the source for a CI-style copy check (future).
export const FORBIDDEN_PHRASES = [
  // Hype words
  "cutting-edge",
  "cutting edge",
  "revolutionary",
  "game-changing",
  "leverage",
  "paradigm shift",
  "unleash",
  "supercharge",
  "holistic",
  "synergy",
  // Corporate filler
  "end-to-end solutions",
  "robust enterprise-grade",
  "driving measurable business impact",
  "scalable ML engineering",
  // Intensifier filler (Apple-style strict)
  "really",
  "super",
  "truly",
  "innovative",
  "powerful",
  // Retired strap-line
  "Computer Scientist · Mathematician · AI Researcher",
];

// Footer / contact blurb.
export const FOOTER_CONNECT_BLURB =
  "Open to analytical projects, research collaborations, and data-focused work.";

// Default SEO description. No em-dashes; periods for cadence.
export const SEO_DEFAULT_DESCRIPTION =
  "Data Scientist focused on machine learning, data analysis, and statistical modeling. " +
  "Turning complex datasets into clear, useful decisions.";

// Default SEO title. Single separator (middle dot). Tab-truncation safe.
// Stays readable when truncated to "Edison Serrano · Data Scientist".
export const SEO_DEFAULT_TITLE = "Edison Serrano · Data Scientist";
