export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  demoUrl?: string;
  image: string;
  repos: Array<{ label: string; url: string }>;
  stack: string[];
  capabilities: string[];
  architecture: string;
  proof: string[];
  tryThis: string[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-rag",
    title: "Enterprise RAG Platform",
    shortTitle: "Enterprise RAG",
    kicker: "Knowledge",
    summary:
      "Document-intelligence platform with intent-driven retrieval, a feedback-driven evaluation harness, and citation-grounded answers that refuse unsupported claims.",
    demoUrl: "http://175.27.136.242:5173/",
    image: "/images/enterprise-rag.svg",
    repos: [
      { label: "felixhuhao/enterprise_rag", url: "https://github.com/felixhuhao/enterprise_rag" },
    ],
    stack: ["Vue 3", "FastAPI", "LangGraph", "Milvus", "SSE", "Docker Compose"],
    capabilities: [
      "Intent-driven retrieval strategies (balanced, exact, recall, discovery) over hybrid search, query expansion, HyDE, and RRF reranking.",
      "Citation-grounded streaming answers with source validation and strict-evidence refusal.",
      "Feedback-driven golden set: user thumbs-up/down promoted into evaluation cases with expected chunks.",
      "Retrieval, answer, and judge-based regression checks with per-strategy breakdown.",
      "Real auth with entity-level access control over documents, citations, and sources.",
    ],
    architecture:
      "A Vue frontend streams chat and admin workflows from a FastAPI backend. LangGraph-style workflows coordinate ingestion, strategy-aware retrieval, citation validation, and evaluation, persisting state in SQLite and vectors in Milvus.",
    proof: [
      "Inspectable chunks, retrieval traces, and citation metadata — a test bench that debugs retrieval without spending LLM tokens.",
      "Golden-set evaluation for retrieval-only, answer-lite, and full judging.",
      "Strict-evidence mode refuses unsupported facts.",
    ],
    tryThis: [
      "Look up an exact policy amount with exact retrieval.",
      "Ask a broad question with recall mode.",
      "Enable strict evidence and ask for an unsupported fact to see refusal behavior.",
    ],
  },
  {
    slug: "nl2sql-data-agent",
    title: "NL2SQL Data Agent",
    shortTitle: "NL2SQL Agent",
    kicker: "Analytics",
    summary:
      "OLAP analytics agent that turns business questions into guarded SQL behind a deterministic SQLGlot safety layer, with a semantic metadata layer and bounded repair.",
    demoUrl: "http://175.27.136.242:5174/",
    image: "/images/nl2sql-agent.svg",
    repos: [
      { label: "felixhuhao/nl2sql-data-agent", url: "https://github.com/felixhuhao/nl2sql-data-agent" },
    ],
    stack: ["Vue 3", "FastAPI", "SQLGlot", "Qdrant", "DuckDB", "ClickHouse"],
    capabilities: [
      "Semantic metadata layer (tables, columns, metrics, aliases, verified queries, relationships) for scoped retrieval instead of full-schema dumps.",
      "Deterministic SQLGlot guard: SELECT-only, scope checks, dangerous-command blocking, fanout detection, and auto-LIMIT.",
      "Bounded repair loop that re-validates repaired SQL before execution.",
      "OLAP intent handling (TopN, share, YoY, moving averages) across DuckDB and ClickHouse.",
      "Automatic chart recommendations and read-only MCP servers reusing the same guard.",
    ],
    architecture:
      "A Vue interface sends questions to a FastAPI agent workflow that selects a datasource, retrieves semantic context (Qdrant-augmented), generates guarded SQL, executes read-only queries, and returns summaries, explanations, and chart recommendations.",
    proof: [
      "76-case result-equivalence smoke suite across DuckDB and ClickHouse.",
      "Dangerous SQL is blocked before execution.",
      "Qdrant-backed semantic layer cuts prompt context ~73% vs full-schema dumps.",
    ],
    tryThis: [
      "Ask for recent daily sales and order count.",
      "Break results down by region, then filter to one region.",
      "Try a destructive SQL request and verify that it is blocked.",
    ],
  },
  {
    slug: "ecommerce-agent",
    title: "ERP Operations Copilot",
    shortTitle: "Ops Copilot",
    kicker: "Operations",
    summary:
      "Agentic operations over business entities through governed MCP tools, with specialist routing and a human-in-the-loop approval boundary for risky writes.",
    demoUrl: "http://175.27.136.242:8010/",
    image: "/images/ecommerce-agent.svg",
    repos: [
      { label: "felixhuhao/ecommerce-agent", url: "https://github.com/felixhuhao/ecommerce-agent" },
      { label: "felixhuhao/ecommerce-mcp-server", url: "https://github.com/felixhuhao/ecommerce-mcp-server" },
    ],
    stack: ["DeepAgents", "FastAPI", "Spring AI MCP", "Java 21", "MySQL", "Docker"],
    capabilities: [
      "DeepAgents-based orchestration with specialist routing and role-shaped (least-privilege) tool access via a static catalog, not prompt-based guessing.",
      "Human-in-the-loop approval for risky writes: canonical-payload hashing, actor/session/tool binding, TTL, and one-time consumption.",
      "Spring Boot / Spring AI MCP server owning business data and approval enforcement (10 read / 4 write tools).",
      "Trace-grounded answers marked authoritative, derived, or unverified.",
      "Docker-sandboxed analysis per session and a proactive monitoring/alert center.",
    ],
    architecture:
      "A DeepAgents-based Python agent coordinates user-facing orchestration and MCP calls (via LangChain MCP adapters); the Java MCP server owns MySQL-backed business data and approval enforcement. Mongo stores agent threads; sandbox and chart services run as explicit supporting services; analytics questions route to the NL2SQL agent.",
    proof: [
      "Write tools require approval IDs bound to actor, session, tool, and canonical payload.",
      "Approval is deliberately excluded from the agent's own toolset — humans retain control.",
      "Routing/tool-choice evals verify the agent picks the intended specialist and tool.",
    ],
    tryThis: [
      "Ask for low-stock inventory or supplier performance.",
      "Request a purchase-order update and inspect the approval step.",
      "Verify that write execution fails without a valid approval.",
    ],
  },
];
