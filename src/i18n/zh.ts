import type { Project } from "../data/projects";

const projects: Project[] = [
  {
    slug: "enterprise-rag",
    title: "企业级 RAG 平台",
    shortTitle: "企业级 RAG",
    kicker: "知识",
    summary:
      "文档智能平台，具备意图驱动的检索、反馈驱动的评测套件，以及基于引用溯源、无证据即拒答的回答。",
    demoUrl: "https://knowledge.haohu.tech",
    image: "/images/enterprise-rag.webp",
    repos: [
      { label: "felixhuhao/enterprise_rag", url: "https://github.com/felixhuhao/enterprise_rag" },
    ],
    stack: ["Vue 3", "FastAPI", "LangGraph", "Milvus", "SSE", "Docker Compose"],
    capabilities: [
      "意图驱动的检索策略（精准、均衡、广域），覆盖混合检索、查询扩展、HyDE 与 RRF 重排序。",
      "基于引用溯源的流式回答，带来源校验与无证据即拒答。",
      "反馈驱动的黄金集：用户点赞 / 点踩被沉淀为带期望切片的评测用例。",
      "检索、回答与裁判式回归校验，并按策略分项拆解。",
      "真实鉴权，对文档、引用与来源实施实体级访问控制。",
    ],
    architecture:
      "Vue 前端从 FastAPI 后端流式加载对话与管理工作流。LangGraph 式的工作流协调数据接入、策略感知检索、引用校验与评测，状态持久化于 SQLite，向量存储于 Milvus。",
    proof: [
      "可检视的切片、检索追踪与引用元数据 —— 一个无需消耗 LLM token 即可调试检索的测试台。",
      "面向纯检索、轻量回答与完整裁判的黄金集评测。",
      "严格证据模式拒绝无支撑的事实。",
    ],
    tryThis: [
      "用精准检索查询某项确切的政策金额。",
      "用广域模式提出一个宽泛的问题。",
      "开启严格证据模式，就一个无支撑的事实提问，观察拒答行为。",
    ],
  },
  {
    slug: "nl2sql-data-agent",
    title: "NL2SQL 数据分析智能体",
    shortTitle: "NL2SQL 智能体",
    kicker: "数据分析",
    summary:
      "OLAP 数据分析智能体，在确定性 SQLGlot 安全层之后将业务问题转化为受控 SQL，并配以语义元数据层与有界修复。",
    demoUrl: "https://analytics.haohu.tech",
    image: "/images/nl2sql-agent.webp",
    repos: [
      { label: "felixhuhao/nl2sql-data-agent", url: "https://github.com/felixhuhao/nl2sql-data-agent" },
    ],
    stack: ["Vue 3", "FastAPI", "SQLGlot", "Qdrant", "DuckDB", "ClickHouse"],
    capabilities: [
      "语义元数据层（表、列、指标、别名、已验证查询、关系），用于范围化检索，而非全量 schema 灌入。",
      "确定性 SQLGlot 护栏：仅允许 SELECT、范围校验、危险命令拦截、扇出检测与自动 LIMIT。",
      "有界修复闭环，对修复后的 SQL 在执行前重新校验。",
      "OLAP 意图处理（TopN、占比、同比、移动平均），覆盖 DuckDB 与 ClickHouse。",
      "自动图表推荐，并提供复用同一护栏的只读 MCP 服务。",
    ],
    architecture:
      "Vue 界面将问题发送给 FastAPI 智能体工作流，由其选择数据源、检索语义上下文（Qdrant 增强）、生成受控 SQL、执行只读查询，并返回摘要、解释与图表推荐。",
    proof: [
      "覆盖 DuckDB 与 ClickHouse 的 76 例结果等价性冒烟测试套件。",
      "危险 SQL 在执行前即被拦截。",
      "Qdrant 支撑的语义层相较全量 schema 灌入，将提示上下文削减约 73%。",
    ],
    tryThis: [
      "查询近期的每日销售额与订单数。",
      "按地区拆解结果，再筛选到某一个地区。",
      "尝试一条破坏性 SQL 请求，验证其被拦截。",
    ],
  },
  {
    slug: "ecommerce-agent",
    title: "ERP 运营 Copilot",
    shortTitle: "运营 Copilot",
    kicker: "运营",
    summary:
      "通过受治理的 MCP 工具对业务实体进行智能体化运营，具备专家路由与面向高风险写操作的人在回路审批边界。",
    demoUrl: "https://copilot.haohu.tech",
    image: "/images/ecommerce-agent.webp",
    repos: [
      { label: "felixhuhao/ecommerce-agent", url: "https://github.com/felixhuhao/ecommerce-agent" },
      { label: "felixhuhao/ecommerce-mcp-server", url: "https://github.com/felixhuhao/ecommerce-mcp-server" },
    ],
    stack: ["DeepAgents", "FastAPI", "Spring AI MCP", "Java 21", "MySQL", "Docker"],
    capabilities: [
      "基于 DeepAgents 的编排，具备专家路由与角色约束（最小权限）的工具访问，权限来自静态目录而非提示词猜测。",
      "面向高风险写操作的人在回路审批：规范化载荷哈希、执行者 / 会话 / 工具绑定、TTL 与一次性消费。",
      "Spring Boot / Spring AI MCP 服务，掌管业务数据与审批执行（10 个读工具 / 4 个写工具）。",
      "基于工具追踪的回答，标注为权威、推导或未经核实。",
      "按会话进行 Docker 沙箱化分析，并配备主动监控 / 告警中心。",
    ],
    architecture:
      "基于 DeepAgents 的 Python 智能体协调面向用户的编排与 MCP 调用（经 LangChain MCP 适配器）；Java MCP 服务掌管 MySQL 业务数据与审批执行。MongoDB 存储智能体会话线程；沙箱与图表服务作为显式支撑服务运行；数据分析类问题路由到 NL2SQL 智能体。",
    proof: [
      "写工具需要绑定到执行者、会话、工具与规范化载荷的审批 ID。",
      "审批被刻意排除在智能体自身的工具集之外 —— 控制权始终在人。",
      "路由 / 工具选择评测验证智能体选中了预期的专家与工具。",
    ],
    tryThis: [
      "查询低库存商品或供应商表现。",
      "发起一次采购单更新，并检视审批环节。",
      "验证在没有有效审批时，写操作执行会失败。",
    ],
  },
];

const zh = {
  profile: {
    name: "胡昊",
    initials: "HH",
    role: "AI 与智能体系统工程师",
    tagline: "实战型工程负责人",
    location: "中国 武汉",
    email: "felixhuhao@gmail.com",
    github: "https://github.com/felixhuhao",
    linkedin: "https://www.linkedin.com/in/hao-hu-a6742a30/",
    resumeUrl: "/resume_cn-v2.pdf",
    heroEyebrow: "生产级 AI · 智能体系统 · 工程负责人",
    heroHeadlinePrefix: "我构建 ",
    heroHeadlineAccent: "经得起生产考验的 AI",
    heroHeadlineSuffix: "。",
    heroSub:
      "RAG、对话式数据分析与 MCP 驱动的多智能体系统，配以确定性护栏、引用溯源、人在回路审批与真实评测 —— 背后是 10 余年分布式系统构建经验，曾就职于 Google、Uber 与 Microsoft，现为实战型 CTO。",
    pedigree: ["Google", "Uber", "Microsoft"],
    currentRole: "实战型 CTO · 元宝创意",
    heroMetrics: ["10+ 年经验", "10–30K QPS · p99 ~140ms", "99.97% 备份健康度"],
    heroSkills: ["LangGraph", "RAG", "MCP", "Go", "Java", "Python", "Google Cloud"],
  },

  about: {
    paragraphs: [
      "我是一名工程负责人，也是亲力亲为的构建者。在十余年构建大规模系统之后 —— 曾就职于 <strong>Google、Uber 与 Microsoft</strong> —— 如今我以创业公司 CTO 的身份设计生产级 AI 与智能体系统，带领团队，让 LLM 与智能体成为帮助我们高效而可靠交付的队友。",
      "我专注于 <strong>经得起生产考验的 AI</strong>：检索与智能体系统，配以确定性护栏、引用溯源、人在回路审批与真实评测 —— 而非演示。扎实的计算机基础与架构判断力，支撑着我交付的每一个系统。",
    ],
    pillars: [
      {
        title: "安全在于边界，而非提示词。",
        body: "高风险操作必须经过模型无法绕过的确定性护栏与人工审批 —— 一个从构造上就拒绝不安全查询的 SQL 校验器，写操作只能凭一次性、已签名的审批才能执行。“小心行事”并不是一种控制手段。",
      },
      {
        title: "没有溯源的回答只是猜测。",
        body: "每个回答都可溯源到出处，并被允许回答“我不知道” —— 基于引用溯源的检索、无证据即拒答，回答被标注为权威、推导或未经核实。",
      },
      {
        title: "无法度量，就不发布。",
        body: "智能体配有黄金集与回归评测 —— 路由、工具选择、结果等价性 —— 让每一次提示词改动都可被证明，而非凭感觉。",
      },
      {
        title: "难的是系统，而非模型。",
        body: "十余年的分布式系统与数据基础设施经验，才是让这些系统在真实负载下稳定运行的关键。模型只是其中一个组件；围绕它的边界、状态、评测与可观测性，才让它成为生产级软件。",
      },
    ],
  },

  experience: [
    {
      when: "2025 — 至今",
      role: "首席技术官",
      company: "元宝创意",
      detail:
        "为企业级 ERP SaaS 平台架构并交付统一的智能体 AI 层 —— 覆盖运营、数据分析与知识 —— 带领 4 人团队（见上方项目）。",
    },
    {
      when: "2023 — 2025",
      role: "独立软件工程师与顾问",
      company: "自由职业",
      detail:
        "在 AWS 上交付云原生旅行指南 SaaS，以及一系列 RAG / 智能体原型 —— 将一线实践衔接到 CTO 角色。",
    },
    {
      when: "2022 — 2023",
      role: "高级软件工程师",
      company: "Uber",
      detail:
        "构建 Uber 首个快消品（CPG）广告主干（10–30K QPS，p99 ~140ms），以及以 GTIN 为索引的多门店广告计划模型；主导分阶段生产上线。",
      chips: ["Go", "gRPC", "DocStore", "Kafka", "Flink", "Prometheus/Grafana"],
    },
    {
      when: "2018 — 2021",
      role: "软件工程师",
      company: "Google",
      detail:
        "Cloud SQL：实现可靠的任意时间点恢复（PITR），并将备份健康度从 99.92% 提升至 99.97%；作为数据面 on-call 维护 99.95% SLA。",
      chips: ["Java", "Go", "MySQL 高可用", "CSV 导入/导出 GA", "Cloud SQL IAM"],
    },
    {
      when: "2014 — 2017",
      role: "软件开发工程师",
      company: "Microsoft",
      detail:
        "Exchange/Outlook：构建通信信号采集与迁移工具，支撑 4 亿+ Hotmail 用户迁移至 Outlook。",
      chips: ["C#", "Exchange", "Graph People API", "SQL", "监控/告警"],
    },
    {
      when: "2011 — 2013",
      role: "软件开发 / 数据工程师",
      company: "Epic Systems · HCR ManorCare",
      detail:
        "版本发布自动化工具，以及 SSIS ETL 管道与高级 SSRS 报表。",
    },
  ],

  skills: [
    {
      cat: "大模型与智能体",
      items: ["智能体编排", "智能体治理", "工具 / 函数调用", "MCP 集成", "多智能体路由", "上下文工程", "LangChain", "LangGraph", "DeepAgents", "OpenAI / Claude / DeepSeek"],
    },
    {
      cat: "RAG 与检索",
      items: ["RAG（多模态）", "混合检索", "嵌入", "重排序", "查询优化", "Milvus", "Qdrant"],
    },
    {
      cat: "评测与安全",
      items: ["LangSmith", "RAGAS", "OpenEvals", "LLM 裁判评测", "护栏", "人在回路", "可观测性"],
    },
    {
      cat: "编程语言",
      items: ["Java & Go (Google readability)", "Python", "SQL", "C#", "C++"],
    },
    {
      cat: "后端与分布式系统",
      items: ["微服务", "API 设计", "gRPC / Protobuf", "REST", "Thrift", "Spring AI", "FastAPI", "SSE"],
    },
    {
      cat: "数据系统",
      items: ["数据建模", "PostgreSQL", "MySQL", "Redis", "BigQuery", "ClickHouse", "Kafka", "Flink", "MongoDB"],
    },
    {
      cat: "云与基础设施",
      items: ["Google Cloud", "AWS", "Docker", "Kubernetes", "Linux", "CI/CD"],
    },
    {
      cat: "机器学习 / 数据科学",
      items: ["PyTorch", "CatBoost / LightGBM / XGBoost", "特征工程", "时间序列"],
    },
  ],

  education: [
    {
      school: "Bowling Green State University",
      period: "2010 — 2012",
      degree: "计算机科学硕士",
      detail: "GPA 4.0/4.0 · 美国 鲍灵格林",
    },
    {
      school: "武汉大学",
      period: "2006 — 2010",
      degree: "软件工程学士",
      detail: "GPA 3.5/4.0 · 中国 武汉",
    },
  ],

  labProjects: [
    {
      title: "多模态 RAG",
      repo: "https://github.com/felixhuhao/multimodel_rag",
      blurb:
        "多模态 RAG，采用混合检索（稠密 + BM25）、LangGraph 质量闭环、RAGAS 评测，以及质量门禁的人工审批。",
      tags: ["多模态", "RAGAS", "LangGraph", "Milvus"],
    },
    {
      title: "多智能体旅行助手",
      repo: "https://github.com/felixhuhao/ctrip_assistant",
      blurb:
        "采用 supervisor 模式的多智能体客服系统（机票、酒店、租车），具备业务规则校验与会话记忆。",
      tags: ["多智能体", "Supervisor", "LangGraph"],
    },
    {
      title: "车辆价格预测",
      repo: "https://github.com/felixhuhao/vehicle_price_prediction",
      blurb:
        "竞赛级回归建模：从梯度提升集成演进到多随机种子 MLP，配以严谨的特征工程。",
      tags: ["PyTorch", "梯度提升", "特征工程"],
    },
  ],

  projects,

  meta: {
    siteDescription:
      "生产级 AI 与智能体系统工程师，10 余年分布式系统构建经验，曾就职于 Google、Uber 与 Microsoft。",
  },

  nav: {
    projects: "项目",
    experience: "经历",
    skills: "技能",
    resume: "简历",
    github: "GitHub",
    linkedin: "领英",
    openMenu: "打开菜单",
    primary: "主导航",
    home: "首页",
    toggleTheme: "切换主题",
    switchLanguage: "切换到英文",
    imagePreview: "预览",
  },

  home: {
    heroViewWork: "查看作品",
    heroResume: "简历 (PDF)",
    aboutEyebrow: "关于",
    aboutHeading: "会构建的负责人。",
    povLabel: "我如何构建经得起考验的 AI",
    workEyebrow: "精选作品",
    workHeading: "统一 ERP AI 层：知识、数据分析、运营。",
    workIntro:
      "为同一家企业级 ERP 客户构建的三套生产系统，共享同一套安全与评测实践 —— 运营 Copilot、NL2SQL 数据分析智能体，以及知识助手。",
    workCta: "阅读完整案例研究 →",
    cardDeepDive: "深入了解 →",
    cardDemo: "在线演示（需登录）",
    xpEyebrow: "经历",
    xpHeading: "10 余年，贯穿技术栈上下。",
    eduEyebrow: "教育",
    eduHeading: "基础的来处。",
    labEyebrow: "实验室",
    labHeading: "个人研发。",
    labIntro:
      "自主驱动的原型，探索多模态 RAG、多智能体系统与经典机器学习。",
    labGithub: "GitHub →",
    skillsEyebrow: "技能",
    skillsHeading: "技术工具箱。",
    contactEyebrow: "联系",
    contactHeading: "一起构建可靠的系统。",
    contactBody:
      "对 AI / 智能体工程与资深工程岗位，以及咨询合作持开放态度。",
  },

  detail: {
    back: "← 返回项目",
    howItWorks: "工作原理",
    capabilities: "能力",
    evidence: "证据",
    tryThis: "试试看",
    source: "源码",
    demo: "在线演示（需登录）",
    viewSource: "查看源码",
  },

  flagship: {
    metaTitle: "一个 ERP AI 层",
    metaDescription:
      "旗舰案例研究：为同一家企业级 ERP 构建的三套生产级 AI 系统 —— 运营 Copilot（FastAPI + DeepAgents）、自助式数据分析智能体（NL2SQL）与知识助手（RAG）—— 建立在同一套安全与评测实践之上。",
    back: "← 返回作品",
    eyebrow: "旗舰案例研究",
    heading: "一个 ERP AI 层",
    lead: "为同一家企业级 ERP 客户构建的三套生产级 AI 系统 —— 一个<strong>运营 Copilot</strong>、一个<strong>自助式数据分析智能体</strong>与一个<strong>知识助手</strong> —— 建立在同一套共享的安全与评测实践之上。各自独立部署，仅在存在真实依赖处彼此打通。",
    chips: [
      "提示上下文削减约 73%",
      "确定性 SQL 护栏",
      "一次性审批写操作",
      "可溯源的回答",
    ],
    problemHeading: "问题",
    problemBody:
      "ERP 承载着企业真正赖以运转的数据 —— 库存、订单、供应商、资金。把聊天机器人接上去很容易；难的是构建一个能够对其<em>执行操作</em>、却不会破坏状态或编造数字的系统。发布的门槛很具体：每一次写操作都经过人工审批，每一条分析查询从构造上就是安全的，每一个回答都带有可审计的溯源。",
    archHeading: "架构",
    archNote:
      "运营 Copilot 是核心。它路由到角色约束的领域专家，并通过 MCP 调用受治理的工具 —— 包括可选的 NL2SQL 数据分析服务。知识助手是同一 ERP AI 层中的<strong>兄弟系统</strong>，并不由 Copilot 编排。",
    archConsole: "运营控制台 — React + ECharts",
    archHub: "运营 Copilot",
    archHubSub: "FastAPI + DeepAgents",
    archHubMeta: "鉴权 · 会话 · 流式 · 审批 · 主动监控 · 溯源",
    archRouterLabel: "路由 → 角色约束的专家",
    archSpecialists:
      "销售分析 · 订单管理 · 采购 · 库存 · 客户洞察 · 数仓分析*",
    archMcpLabel: "MCP 客户端",
    archMcpTitle: "Spring Boot MCP",
    archMcpSub: "Java 21 · Spring AI",
    archMcpMeta:
      "MySQL 业务数据 · 10 读 + 4 写工具 · 审批执行（载荷哈希 · 执行者/会话/工具绑定 · 15 分钟 TTL · 一次性使用）",
    archNl2sqlTitle: "NL2SQL MCP*",
    archNl2sqlMeta: "SQLGlot 护栏 · Qdrant 语义层 · ClickHouse / DuckDB",
    archSupport:
      "支撑：MongoDB（会话 · 追踪 · 审计 · 告警）· Docker 沙箱（隔离的 Python 分析）· 评测套件（路由 · 工具选择 · 溯源 · 在线冒烟）",
    archSiblingTag: "兄弟系统 · 不由 Copilot 编排",
    archSiblingTitle: "知识助手",
    archSiblingSub: "RAG",
    archSiblingMeta:
      "LangGraph + Milvus 混合检索 · 引用溯源 + 严格证据拒答 · RBAC",
    archFoot: "* 可选 / 只读路径。",
    howHeading: "工作原理",
    howPanels: [
      {
        title: "运营 Copilot",
        body: "一个运行 DeepAgents 框架的 FastAPI 服务。路由器将每个请求分类到角色约束的专家，专家只拿到它需要的工具 —— 来自静态目录与标签，而非提示词猜测。回答依据捕获的工具追踪，被标注为权威、推导或未经核实。",
      },
      {
        title: "受治理的工具与审批边界",
        body: "一个 Spring AI / Java 21 MCP 服务掌管 MySQL 业务数据，并暴露 10 个读工具 + 4 个写工具。审批被刻意设计为<strong>非</strong>智能体工具：模型可以提出写操作，但执行要经过人工控制的 REST 路径，并绑定到一次性、载荷哈希、带 TTL 的审批。",
      },
      {
        title: "数据分析智能体（NL2SQL）",
        body: "面向数仓的自助式分析，由 Copilot 经可选 MCP 抵达。确定性 SQLGlot 护栏（仅 SELECT、范围/扇出校验、自动 LIMIT）与 Qdrant 语义层将提示上下文相较全量 schema 灌入削减约 73%；配有有界 SQL 修复与跨 DuckDB 和 ClickHouse 的结果等价性回归评测。",
      },
      {
        title: "知识助手（RAG）",
        body: "一个独立的、由 LangGraph 编排的企业文档 RAG 系统：Milvus 混合检索配合意图路由策略，引用溯源与严格证据拒答，RBAC，以及带查询级可观测性的 LLM 裁判 / 引用评测。",
      },
    ],
    outcomesHeading: "成果与证据",
    outcomes: [
      "<strong>提示上下文削减约 73%</strong>，得益于 Qdrant 语义层（相较全量 schema 灌入）。",
      "<strong>确定性 SQLGlot 护栏</strong> —— 仅 SELECT、范围/扇出校验、自动 LIMIT；危险 SQL 在抵达数仓前即被拦截。",
      "<strong>一次性、密码学绑定的审批</strong>用于每一次写操作 —— 执行前校验执行者/会话/工具绑定、载荷哈希、过期与一次性使用。",
      "<strong>可溯源的回答</strong>，标注为权威 / 推导 / 未经核实，并附带来自工具调用的来源证据。",
      "<strong>评测套件</strong>覆盖路由、工具选择、溯源、结果等价性与在线冒烟 —— 让智能体行为在发布前即可度量。",
    ],
    stackHeading: "技术栈",
    stack: [
      "Python", "FastAPI", "DeepAgents", "LangGraph", "LangChain MCP adapters",
      "Spring Boot / Spring AI", "Java 21", "MyBatis-Plus",
      "MySQL", "MongoDB", "ClickHouse", "DuckDB", "Milvus", "Qdrant",
      "SQLGlot", "React", "ECharts", "Docker",
    ],
    deepDivesHeading: "各系统深入了解",
    deepDives: [
      { label: "运营 Copilot", slug: "ecommerce-agent" },
      { label: "数据分析智能体（NL2SQL）", slug: "nl2sql-data-agent" },
      { label: "知识助手（RAG）", slug: "enterprise-rag" },
    ],
    sourceHeading: "源码",
    repos: [
      { label: "ecommerce-agent", href: "https://github.com/felixhuhao/ecommerce-agent" },
      { label: "ecommerce-mcp-server", href: "https://github.com/felixhuhao/ecommerce-mcp-server" },
      { label: "nl2sql-data-agent", href: "https://github.com/felixhuhao/nl2sql-data-agent" },
      { label: "enterprise_rag", href: "https://github.com/felixhuhao/enterprise_rag" },
    ],
  },
};

export default zh;
