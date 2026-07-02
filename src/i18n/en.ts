import { profile, about, experience, skills, labProjects, education } from "../data/profile";
import { projects } from "../data/projects";

const en = {
  profile,
  about,
  experience,
  skills,
  education,
  labProjects,
  projects,

  meta: {
    siteDescription:
      "Production AI & agentic systems engineer with 10+ years building distributed systems, including at Google, Uber, and Microsoft.",
  },

  nav: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    resume: "Résumé",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Open menu",
    primary: "Primary",
    home: "Home",
    toggleTheme: "Toggle theme",
    switchLanguage: "Switch to Chinese",
    imagePreview: "preview",
  },

  home: {
    heroViewWork: "View work",
    heroResume: "Résumé (PDF)",
    aboutEyebrow: "About",
    aboutHeading: "Leader who builds.",
    povLabel: "How I build AI that holds up",
    workEyebrow: "Selected work",
    workHeading: "One ERP AI layer: knowledge, analytics, operations.",
    workIntro:
      "Three production systems built for one enterprise ERP client, sharing one safety and evaluation practice: Operations Copilot, NL2SQL Data Agent, and Knowledge Assistant.",
    workCta: "Read the full case study →",
    cardDeepDive: "Deep dive →",
    cardDemo: "Live demo (login-gated)",
    xpEyebrow: "Experience",
    xpHeading: "10+ years, top to bottom of the stack.",
    eduEyebrow: "Education",
    eduHeading: "Where the fundamentals come from.",
    labEyebrow: "Lab",
    labHeading: "Personal R&D.",
    labIntro:
      "Self-directed prototypes exploring multimodal RAG, multi-agent systems, and classical ML.",
    labGithub: "GitHub →",
    skillsEyebrow: "Skills",
    skillsHeading: "Technical toolkit.",
    contactEyebrow: "Contact",
    contactHeading: "Let's build something reliable.",
    contactBody:
      "Open to AI/agentic engineering and staff-level roles, and consulting engagements.",
  },

  detail: {
    back: "← Back to projects",
    howItWorks: "How it works",
    capabilities: "Capabilities",
    evidence: "Evidence",
    tryThis: "Try this",
    source: "Source",
    demo: "Live demo (login-gated)",
    viewSource: "View source",
  },

  flagship: {
    metaTitle: "One ERP AI Layer",
    metaDescription:
      "A flagship case study: three production AI systems for one enterprise ERP — Operations Copilot (FastAPI + DeepAgents), NL2SQL Data Agent, and Knowledge Assistant (RAG) — built on one safety and evaluation practice.",
    back: "← Back to work",
    eyebrow: "Flagship case study",
    heading: "One ERP AI layer",
    lead: "Three production AI systems for a single enterprise ERP client — <strong>Operations Copilot</strong>, <strong>NL2SQL Data Agent</strong>, and <strong>Knowledge Assistant</strong> — built on one shared safety and evaluation practice. Independently deployed; wired together only where a real dependency exists.",
    chips: [
      "~73% prompt-context cut",
      "deterministic SQL guard",
      "single-use approved writes",
      "trace-grounded answers",
    ],
    problemHeading: "The problem",
    problemBody:
      "An ERP holds the data a business actually runs on — inventory, orders, suppliers, money. Bolting a chatbot onto that is easy; building one that can <em>act</em> on it without corrupting state or inventing numbers is the hard part. The bar for shipping was concrete: every write passes through human approval, every analytical query is safe by construction, and every answer carries grounding you can audit.",
    archHeading: "Architecture",
    archNote:
      "Operations Copilot is the centerpiece. It routes to role-scoped domain specialists and calls governed tools over MCP — including the optional NL2SQL Data Agent service. Knowledge Assistant is a <strong>sibling system</strong> in the same ERP AI layer, not orchestrated by the copilot.",
    archConsole: "Operator Console — React + ECharts",
    archHub: "Operations Copilot",
    archHubSub: "FastAPI + DeepAgents",
    archHubMeta: "auth · sessions · streaming · approvals · proactive monitors · trace grounding",
    archRouterLabel: "Router → role-scoped specialists",
    archSpecialists:
      "sales-analyst · order-manager · purchasing · inventory · customer-insights · data-warehouse-analyst*",
    archMcpLabel: "MCP clients",
    archMcpTitle: "Spring Boot MCP",
    archMcpSub: "Java 21 · Spring AI",
    archMcpMeta:
      "MySQL business data · 10 read + 4 write tools · approval execution (payload hash · actor/session/tool binding · 15-min TTL · one-time use)",
    archNl2sqlTitle: "NL2SQL MCP*",
    archNl2sqlMeta: "SQLGlot guard · Qdrant semantic layer · ClickHouse / DuckDB",
    archSupport:
      "supporting: MongoDB (sessions · traces · audits · alerts) · Docker sandbox (isolated Python analysis) · eval harnesses (routing · tool-choice · grounding · live-smoke)",
    archSiblingTag: "Sibling system · not orchestrated by the copilot",
    archSiblingTitle: "Knowledge Assistant",
    archSiblingSub: "RAG",
    archSiblingMeta:
      "LangGraph + Milvus hybrid retrieval · citation grounding + strict-evidence refusal · RBAC",
    archFoot: "* optional / read-only paths.",
    howHeading: "How it works",
    howPanels: [
      {
        title: "Operations Copilot",
        body: "A FastAPI service running a DeepAgents harness. A router classifies each request to a role-scoped specialist that receives only the tools it needs — selected from a static catalog and tags, not prompt guesswork. Answers are labeled authoritative, derived, or unverified from captured tool traces.",
      },
      {
        title: "Governed tools & approval boundary",
        body: "A Spring AI / Java 21 MCP server owns the MySQL business data and exposes 10 read + 4 write tools. Approval is deliberately <strong>not</strong> an agent tool: the model can propose a write, but execution runs through a human-controlled REST path bound to a single-use, payload-hashed, TTL'd approval.",
      },
      {
        title: "Analytics Agent (NL2SQL)",
        body: "Self-service analytics over the warehouse, reached by Operations Copilot via optional MCP. A deterministic SQLGlot guard (SELECT-only, scope/fanout checks, auto-LIMIT) and a Qdrant semantic layer that cut prompt context ~73% vs full-schema dumps; bounded SQL repair and result-equivalence regression evals across DuckDB and ClickHouse.",
      },
      {
        title: "Knowledge Assistant (RAG)",
        body: "A standalone LangGraph-orchestrated RAG system over enterprise documents: Milvus hybrid retrieval with intent-routed strategies, citation grounding with strict-evidence refusal, RBAC, and LLM-judge / citation evals with per-query observability.",
      },
    ],
    outcomesHeading: "Outcomes & evidence",
    outcomes: [
      "<strong>~73% prompt-context reduction</strong> via the Qdrant semantic layer vs full-schema dumps.",
      "<strong>Deterministic SQLGlot guard</strong> — SELECT-only, scope/fanout checks, auto-LIMIT; dangerous SQL is blocked before it reaches the warehouse.",
      "<strong>Single-use, cryptographically-bound approval</strong> on every write — validated for actor/session/tool binding, payload hash, expiry, and one-time use before execution.",
      "<strong>Trace-grounded answers</strong> marked authoritative / derived / unverified, with source evidence from tool calls.",
      "<strong>Eval harnesses</strong> for routing, tool-choice, grounding, result-equivalence, and live smoke — agent behavior you can measure before shipping.",
    ],
    stackHeading: "Stack",
    stack: [
      "Python", "FastAPI", "DeepAgents", "LangGraph", "LangChain MCP adapters",
      "Spring Boot / Spring AI", "Java 21", "MyBatis-Plus",
      "MySQL", "MongoDB", "ClickHouse", "DuckDB", "Milvus", "Qdrant",
      "SQLGlot", "React", "ECharts", "Docker",
    ],
    deepDivesHeading: "Per-system deep dives",
    deepDives: [
      { label: "Operations Copilot", slug: "ecommerce-agent" },
      { label: "Analytics Agent (NL2SQL)", slug: "nl2sql-data-agent" },
      { label: "Knowledge Assistant (RAG)", slug: "enterprise-rag" },
    ],
    sourceHeading: "Source",
    repos: [
      { label: "ecommerce-agent", href: "https://github.com/felixhuhao/ecommerce-agent" },
      { label: "ecommerce-mcp-server", href: "https://github.com/felixhuhao/ecommerce-mcp-server" },
      { label: "nl2sql-data-agent", href: "https://github.com/felixhuhao/nl2sql-data-agent" },
      { label: "enterprise_rag", href: "https://github.com/felixhuhao/enterprise_rag" },
    ],
  },
};

export default en;
