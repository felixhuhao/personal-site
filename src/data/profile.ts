export const profile = {
  name: "Hao Hu",
  initials: "HH",
  role: "AI & Agentic Systems Engineer",
  tagline: "Hands-on Engineering Leader",
  location: "Wuhan, China",
  email: "felixhuhao@gmail.com",
  github: "https://github.com/felixhuhao",
  resumeUrl: "/resume.pdf",
  heroLead:
    "I build production AI you can trust — RAG, multi-agent, and MCP tool systems with deterministic guardrails, grounding, human-in-the-loop approval, and evaluation suites. Backed by 10+ years across Google, Uber, and Microsoft.",
  stats: [
    { num: "10+", label: "years building large-scale systems" },
    { num: "ex-", accent: "Google · Uber · Microsoft", label: "senior engineering pedigree" },
    { num: "3", label: "production AI systems shipped as one ERP AI layer" },
  ],
};

export const about = {
  paragraphs: [
    "I'm an engineering leader and hands-on builder. After a decade shipping large-scale systems at <strong>Google, Uber, and Microsoft</strong>, I now design production AI and agentic systems as a startup CTO — leading small teams where LLMs and agents are teammates that help us build fast and reliably.",
    "My focus is <strong>AI that holds up in production</strong>: retrieval and agent systems with deterministic guardrails, citation grounding, human-in-the-loop approval, and real evaluation — not demos. Deep CS fundamentals and architecture judgment underpin everything I ship.",
  ],
  pillars: [
    {
      title: "Safety & governance",
      body: "Deterministic SQL guards, citation grounding with refusal, approval-gated writes, and least-privilege tool access.",
    },
    {
      title: "Measurability",
      body: "Golden sets, result-equivalence and LLM-judge regression suites — agent behavior you can measure and ship.",
    },
    {
      title: "Whole-package depth",
      body: "Distributed systems, data infrastructure, and full-stack delivery from a senior engineering background.",
    },
  ],
};

export const experience = [
  {
    when: "Feb 2025 — Present",
    role: "Chief Technology Officer",
    company: "Yuanbao Creative Technology",
    detail:
      "Architected a unified, agentic AI layer for an enterprise ERP SaaS platform — operations, analytics, and knowledge (see projects above).",
  },
  {
    when: "2022 — 2023",
    role: "Senior Software Engineer",
    company: "Uber",
    detail:
      "Led backend development of CPG Ads and designed a multi-location ad-campaign model on a high-traffic microservices platform.",
  },
  {
    when: "2018 — 2021",
    role: "Software Engineer",
    company: "Google",
    detail:
      "Cloud SQL: enabled reliable point-in-time recovery and raised backup health from 99.992% to 99.997%.",
  },
  {
    when: "2014 — 2017",
    role: "Software Development Engineer",
    company: "Microsoft",
    detail:
      "Exchange/Outlook: built communication-signal and migration tooling supporting 400M+ Hotmail users moving to Outlook.",
  },
  {
    when: "2011 — 2013",
    role: "Software Developer / Data Engineer",
    company: "Epic Systems · HCR ManorCare",
    detail:
      "Release-automation tooling, plus SSIS ETL pipelines and advanced SSRS reporting.",
  },
];

export const skills = [
  {
    cat: "LLM & Agents",
    items: ["LangChain", "LangGraph", "DeepAgents", "MCP", "Multi-agent", "Tool calling", "Prompt engineering", "OpenAI / DeepSeek / Qwen"],
  },
  {
    cat: "RAG & Retrieval",
    items: ["RAG (multimodal)", "Hybrid retrieval", "Reranking", "Milvus", "Qdrant"],
  },
  {
    cat: "Evaluation & Safety",
    items: ["RAGAS", "Golden-set evals", "Regression evals", "Guardrails", "Human-in-the-loop"],
  },
  {
    cat: "ML / Data Science",
    items: ["PyTorch", "CatBoost / LightGBM / XGBoost", "Feature engineering", "Time-series"],
  },
  { cat: "Languages", items: ["Java", "Go", "Python", "SQL", "C++", "C#"] },
  { cat: "Backend & Microservices", items: ["FastAPI", "Spring AI", "Microservices", "gRPC", "Thrift", "REST", "SSE"] },
  { cat: "Data / Monitoring", items: ["PostgreSQL", "MySQL", "MongoDB", "DuckDB", "ClickHouse", "SQL Server", "Kafka", "Flink", "ETL", "BI", "Prometheus", "Grafana"] },
  { cat: "Cloud / DevOps", items: ["Google Cloud", "Cloud SQL", "BigQuery", "Spanner", "IAM", "Docker", "Kubernetes", "CI/CD"] },
];

export const labProjects = [
  {
    title: "Multimodal RAG",
    repo: "https://github.com/felixhuhao/multimodel_rag",
    blurb:
      "Multimodal RAG with hybrid retrieval (dense + BM25), a LangGraph quality loop, RAGAS evaluation, and quality-gated human approval.",
    tags: ["Multimodal", "RAGAS", "LangGraph", "Milvus"],
  },
  {
    title: "Multi-Agent Travel Assistant",
    repo: "https://github.com/felixhuhao/ctrip_assistant",
    blurb:
      "A supervisor-pattern multi-agent customer-service system (flights, hotels, car rental) with business-rule validation and session memory.",
    tags: ["Multi-agent", "Supervisor", "LangGraph"],
  },
  {
    title: "Vehicle Price Prediction",
    repo: "https://github.com/felixhuhao/vehicle_price_prediction",
    blurb:
      "Competition-grade regression: gradient-boosting ensemble evolving to a multi-seed MLP, with rigorous feature engineering.",
    tags: ["PyTorch", "Gradient boosting", "Feature engineering"],
  },
];
