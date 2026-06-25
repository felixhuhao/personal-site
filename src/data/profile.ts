export const profile = {
  name: "Hao Hu",
  initials: "HH",
  role: "AI & Agentic Systems Engineer",
  tagline: "Hands-on Engineering Leader",
  location: "Wuhan, China",
  email: "felixhuhao@gmail.com",
  github: "https://github.com/felixhuhao",
  resumeUrl: "/resume-v2.pdf",
  heroEyebrow: "PRODUCTION AI · AGENTIC SYSTEMS · ENGINEERING LEADER",
  heroHeadlinePrefix: "I build ",
  heroHeadlineAccent: "production AI",
  heroHeadlineSuffix: " that holds up.",
  heroSub:
    "RAG, multi-agent & MCP systems with guardrails, grounding, human approval, and real evals — backed by 10+ years building distributed systems, including at Google, Uber & Microsoft, now as a hands-on CTO.",
  pedigree: ["Google", "Uber", "Microsoft"],
  currentRole: "builder-CTO @ Yuanbao",
  heroMetrics: ["10+ yrs", "10–30K QPS at ~140ms p99", "99.997% backup health"],
  heroSkills: ["LangGraph", "RAG", "MCP", "Go", "Java", "Python", "Google Cloud"],
};

export const about = {
  paragraphs: [
    "I'm an engineering leader and hands-on builder. After a decade building large-scale systems — including at <strong>Google, Uber, and Microsoft</strong> — I now design production AI and agentic systems as a startup CTO, leading teams where LLMs and agents are teammates that help us build fast and reliably.",
    "My focus is <strong>AI that holds up in production</strong>: retrieval and agent systems with deterministic guardrails, citation grounding, human-in-the-loop approval, and real evaluation — not demos. Deep CS fundamentals and architecture judgment underpin everything I ship.",
  ],
  pillars: [
    {
      title: "Safety lives at the boundary, not in the prompt.",
      body: "Risky actions pass through deterministic guards and human approval the model can't bypass — a SQL validator that rejects unsafe queries by construction, writes that execute only against a single-use, signed approval. “Be careful” is not a control.",
    },
    {
      title: "An answer without grounding is a guess.",
      body: "Every response traces to a source and is allowed to say “I don't know” — citation-grounded retrieval with strict-evidence refusal, answers labeled authoritative, derived, or unverified.",
    },
    {
      title: "If it isn't measured, it isn't shipped.",
      body: "Agents get golden sets and regression evals — routing, tool-choice, result-equivalence — so a prompt change is provable, not a vibe.",
    },
    {
      title: "The hard part is the systems, not the model.",
      body: "A decade of distributed-systems and data-infra work is what keeps these up under real load. The LLM is the easy 10%; the boundaries, state, and observability around it are the other 90%.",
    },
  ],
};

export const experience = [
  {
    when: "2025 — Present",
    role: "Chief Technology Officer",
    company: "Yuanbao Creative Technology",
    detail:
      "Architected a unified, agentic AI layer for an enterprise ERP SaaS platform — operations, analytics, and knowledge — leading a team of 4 (see projects above).",
  },
  {
    when: "2023 — 2025",
    role: "Independent Software Engineer & Consultant",
    company: "Independent",
    detail:
      "Shipped a cloud-native travel-guide SaaS on AWS and a portfolio of RAG/agent prototypes — bridging hands-on practice into the CTO role.",
  },
  {
    when: "2022 — 2023",
    role: "Senior Software Engineer",
    company: "Uber",
    detail:
      "Built Uber's first CPG Ads backbone (10–30K QPS at ~140 ms p99) and the GTIN-keyed multi-location campaign model.",
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
    items: ["Agent orchestration", "Agent harnesses", "Tool / function calling", "MCP", "Multi-agent routing", "Context engineering / memory", "LangChain", "LangGraph", "DeepAgents", "OpenAI / Claude / DeepSeek"],
  },
  {
    cat: "RAG & Retrieval",
    items: ["RAG (multimodal)", "Hybrid retrieval", "Embeddings", "Reranking", "Query optimization", "Milvus", "Qdrant"],
  },
  {
    cat: "Evaluation & Safety",
    items: ["LangSmith", "RAGAS", "Eval harnesses", "LLM-as-judge", "Guardrails", "Human-in-the-loop"],
  },
  {
    cat: "Programming Languages",
    items: ["Java", "Go", "Python", "SQL", "C#", "C++"],
  },
  {
    cat: "Backend & Distributed Systems",
    items: ["Microservices", "API design", "gRPC / Protobuf", "REST", "Thrift", "Spring AI", "FastAPI", "SSE"],
  },
  {
    cat: "Data Systems",
    items: ["Data modeling", "PostgreSQL", "MySQL", "Redis", "BigQuery", "ClickHouse", "Kafka", "Flink", "MongoDB"],
  },
  {
    cat: "Cloud & Platform",
    items: ["Google Cloud", "AWS", "Docker", "Kubernetes", "Linux", "CI/CD"],
  },
  {
    cat: "ML / Data Science",
    items: ["PyTorch", "CatBoost / LightGBM / XGBoost", "Feature engineering", "Time-series"],
  },
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
