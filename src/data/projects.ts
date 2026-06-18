export type DemoStatus = "Live" | "Starting soon" | "Temporarily offline";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  status: DemoStatus;
  demoPath: string;
  image: string;
  repos: Array<{ label: string; url: string }>;
  stack: string[];
  capabilities: string[];
  architecture: string;
  proof: string[];
  tryThis: string[];
  credentials?: Array<{ username: string; password: string; note: string }>;
  deploymentNotes: string[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-rag",
    title: "Enterprise RAG Platform",
    shortTitle: "Enterprise RAG",
    summary:
      "Document intelligence platform for ingesting enterprise knowledge, retrieving evidence with explicit strategies, and answering with citations.",
    status: "Starting soon",
    demoPath: "/demos/enterprise-rag/",
    image: "/images/enterprise-rag.svg",
    repos: [
      {
        label: "felixhuhao/enterprise_rag",
        url: "https://github.com/felixhuhao/enterprise_rag",
      },
    ],
    stack: [
      "Vue 3",
      "FastAPI",
      "SSE",
      "SQLite",
      "Milvus",
      "LangGraph-style workflows",
      "Docker Compose",
    ],
    capabilities: [
      "Document ingestion for PDF, Markdown, ZIP, images, and table-heavy content.",
      "Retrieval modes for balanced Q&A, exact lookup, broad recall, and bounded discovery.",
      "Citation-grounded streaming answers with source validation and strict-evidence behavior.",
      "Admin controls for users, entity-level ACLs, runtime settings, jobs, and evaluation cases.",
      "Quality center for retrieval, answer, and judge-based regression checks.",
    ],
    architecture:
      "A Vue frontend streams chat and admin workflows from a FastAPI backend. The backend coordinates ingestion, retrieval, citation validation, jobs, and evaluation while persisting state in SQLite and vectors in Milvus.",
    proof: [
      "Inspectable chunks, source assets, retrieval traces, and citation metadata.",
      "Golden-set evaluation modes for retrieval-only, answer-lite, and full judging.",
      "Seeded demo users for admin and per-entity access flows.",
    ],
    tryThis: [
      "Look up a reimbursement or policy amount with exact retrieval.",
      "Ask a broad incident-response question with recall mode.",
      "Compare related policy and runbook evidence with citations.",
      "Enable strict evidence and ask for an unsupported fact to see refusal behavior.",
    ],
    credentials: [
      {
        username: "Admin",
        password: "admin-demo-pass",
        note: "Full demo access after seeding.",
      },
      {
        username: "Alice",
        password: "alice-demo-pass",
        note: "Entity-scoped demo user after grants are configured.",
      },
      {
        username: "Bob",
        password: "bob-demo-pass",
        note: "Entity-scoped demo user after grants are configured.",
      },
    ],
    deploymentNotes: [
      "Deploy first because the stack is self-contained through Docker Compose.",
      "Seed demo data after startup and expose only demo documents.",
      "Keep API keys demo-scoped and route backend health checks internally.",
    ],
  },
  {
    slug: "nl2sql-data-agent",
    title: "Industrial NL2SQL Data Agent",
    shortTitle: "NL2SQL Agent",
    summary:
      "OLAP-focused data agent that turns business questions into guarded SQL, executes them on DuckDB or ClickHouse, and recommends charts.",
    status: "Starting soon",
    demoPath: "/demos/nl2sql/",
    image: "/images/nl2sql-agent.svg",
    repos: [
      {
        label: "felixhuhao/nl2sql-data-agent",
        url: "https://github.com/felixhuhao/nl2sql-data-agent",
      },
    ],
    stack: [
      "Vue 3",
      "FastAPI",
      "DuckDB",
      "ClickHouse",
      "Qdrant",
      "SQLGlot",
      "Docker Compose",
    ],
    capabilities: [
      "Semantic metadata layer for tables, columns, metrics, aliases, relationships, and verified queries.",
      "Focused retrieval over schema context, rules, vectors, and value recall before SQL generation.",
      "Deterministic SQL guard for SELECT-only execution, scope checks, dangerous commands, and fanout detection.",
      "Bounded repair loop that revalidates repaired SQL before execution.",
      "Automatic visualization recommendations for line, bar, pie, dual-axis, and table views.",
    ],
    architecture:
      "A Vue interface sends questions to a FastAPI agent workflow. The workflow selects a datasource, retrieves semantic context, generates guarded SQL, executes read-only queries, and returns summaries, explanations, and chart recommendations.",
    proof: [
      "Mock smoke suite covers DuckDB and ClickHouse behavior.",
      "Dangerous SQL is blocked before execution.",
      "Multi-turn follow-up keeps unchanged filters, dimensions, metrics, and time windows.",
    ],
    tryThis: [
      "Ask for recent daily sales and order count.",
      "Break results down by region, then filter to one region.",
      "Switch the metric from sales to orders in a follow-up.",
      "Try a destructive SQL request and verify that it is blocked.",
    ],
    deploymentNotes: [
      "Deploy second because Docker Compose starts ClickHouse, Qdrant, backend, and frontend together.",
      "Use mock fallback for public demo resilience when no LLM key is configured.",
      "Set a service token for MCP endpoints in any non-local deployment.",
    ],
  },
  {
    slug: "ecommerce-agent",
    title: "E-Commerce Agent System",
    shortTitle: "E-Commerce Agent",
    summary:
      "Multi-service AI assistant for e-commerce operations with MCP business tools, approval-gated writes, analytics, charts, and sandboxed execution.",
    status: "Starting soon",
    demoPath: "/demos/ecommerce/",
    image: "/images/ecommerce-agent.svg",
    repos: [
      {
        label: "felixhuhao/ecommerce-agent",
        url: "https://github.com/felixhuhao/ecommerce-agent",
      },
      {
        label: "felixhuhao/ecommerce-mcp-server",
        url: "https://github.com/felixhuhao/ecommerce-mcp-server",
      },
      {
        label: "felixhuhao/nl2sql-data-agent",
        url: "https://github.com/felixhuhao/nl2sql-data-agent",
      },
    ],
    stack: [
      "FastAPI",
      "Python agent orchestration",
      "Spring Boot",
      "Spring AI MCP",
      "MySQL",
      "MongoDB",
      "Sandbox executor",
    ],
    capabilities: [
      "Agent-owned orchestration for conversations, streaming API, sandboxing, and frontend workflows.",
      "Spring Boot MCP server for product, inventory, order, supplier, and purchase-order tools.",
      "Human-in-the-loop approval for risky writes with payload hashing, expiry, and one-time consumption.",
      "Mongo-backed conversation state for sessions and replay.",
      "Optional analytics dependency through the NL2SQL data agent.",
    ],
    architecture:
      "The Python agent coordinates user-facing orchestration and MCP calls. The Java MCP server owns MySQL-backed business data and approval enforcement. Mongo stores agent-side threads, while sandbox and chart services are run as explicit supporting services.",
    proof: [
      "MCP read tools cover core e-commerce operational queries.",
      "Write tools require approval IDs bound to actor, session, tool, and canonical payload.",
      "Health checks verify the FastAPI service and external MCP connectivity.",
    ],
    tryThis: [
      "Ask for low-stock inventory or supplier performance.",
      "Request an order or purchase-order update and inspect the approval step.",
      "Run an analytics-style question that uses chart or sandbox support.",
      "Verify that write execution fails without a valid approval.",
    ],
    deploymentNotes: [
      "Deploy last because it requires MySQL seed data, Spring MCP, Python agent, Mongo, sandbox executor, and optional NL2SQL integration.",
      "Keep write actions approval-gated in public demos.",
      "Expose only the agent frontend/API; keep MySQL, Mongo, and MCP service ports private.",
    ],
  },
];

export const deploymentPhases = [
  "Scaffold the Astro portfolio and publish static files through Nginx.",
  "Provision Ubuntu with Docker, Docker Compose, Nginx, Certbot, firewall rules, and HTTPS.",
  "Deploy Enterprise RAG, then NL2SQL, then the E-Commerce multi-service system.",
  "Harden public demos with demo data, scoped secrets, internal health checks, and fallback screenshots.",
  "Polish project pages with demo scripts, architecture diagrams, and deployment notes.",
];

export const statusRank: Record<DemoStatus, number> = {
  Live: 0,
  "Starting soon": 1,
  "Temporarily offline": 2,
};
