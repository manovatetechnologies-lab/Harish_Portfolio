const projects = [
  {
    slug: "nutric-ai",
    title: "Nutric AI – Personalized Nutrition System",
    role: "Lead Architect & Researcher",
    domain: "HealthTech",
    tech: ["Python", "TensorFlow", "Flask", "OpenCV"],
    timeline: "2023 – 2025",
    summary:
      "Built a CNN-LSTM pipeline that fuses vision intelligence, medical records, and behaviour tracking to automate bespoke nutrition journeys for patients.",
    problem:
      "Clinicians needed a way to translate health records and meal images into precise nutrition plans without manual review.",
    solution:
      "Engineered a modular platform combining ingestion APIs, dietitian workflows, and AI insights with compliance-ready audit trails.",
    impact: [
      "Reduced manual planning time by 70% through automated intake scoring.",
      "Raised adherence accuracy to 92% by contextualising allergies, vitals, and preferences.",
      "Accepted for publication at ICCSP 2025, validating scientific rigour.",
    ],
    process: [
      {
        title: "Discovery & Data Modelling",
        description:
          "Mapped patient journeys, clinical approvals, and nutrition data availability to define the decision architecture.",
        bullets: [
          "Stakeholder workshops with dietitians and clinicians",
          "Data quality audit across EMR, wearables, and image uploads",
          "Success metrics aligned to adherence, satisfaction, and safety",
        ],
      },
      {
        title: "Platform Engineering",
        description:
          "Delivered core services for image classification, recommendation logic, and monitoring dashboards.",
        bullets: [
          "Custom CNN-LSTM ensemble for multi-modal inference",
          "Human-in-the-loop workflow with explanation overlays",
          "HIPAA-aligned observability stack",
        ],
      },
      {
        title: "Adoption & Scale",
        description:
          "Partnered with hospitals for pilots, change management, and publication ready collateral.",
        bullets: [
          "Clinical trial instrumentation and review boards",
          "Nutritionist enablement and playbooks",
          "Academic paper co-authorship and dissemination",
        ],
      },
    ],
    links: [
      {
        label: "Request Demo",
        url: "mailto:founder@softservehub.in?subject=Nutric%20AI%20Demo%20Inquiry",
      },
      { label: "SoftServe Hub", url: "https://www.softservehub.in/" },
    ],
  },
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction Platform",
    role: "AI Engineer",
    domain: "Capital Markets",
    tech: ["Python", "LSTM", "Keras", "Pandas"],
    timeline: "2024",
    summary:
      "Designed LSTM ensembles with automated feature engineering to deliver actionable market outlooks for proprietary trading desks.",
    problem:
      "A trading desk required reliable intraday forecasting to inform high-frequency strategies across volatile tickers.",
    solution:
      "Constructed streaming data infrastructure, modelling pipelines, and analyst workspaces with explainable drivers.",
    impact: [
      "Improved forecast precision by 18% against the previous ARIMA baseline.",
      "Delivered rolling predictions refreshed every 5 minutes with explainable drivers.",
      "Enabled analysts to simulate risk scenarios directly inside shared dashboards.",
    ],
    process: [
      {
        title: "Signal Discovery",
        description:
          "Studied trader heuristics and market structure to shortlist the most predictive data feeds.",
        bullets: [
          "Evaluated 40+ macro and micro economic indicators",
          "Established common metrics for hit rate and risk",
          "Benchmarked incumbent models across regimes",
        ],
      },
      {
        title: "Model Factory",
        description:
          "Built modular pipelines for feature engineering, training, benchmarking, and validation.",
        bullets: [
          "Time-series cross-validation on sliding windows",
          "Explainability overlays using SHAP and attention maps",
          "Automated anomaly alerts for drift handling",
        ],
      },
      {
        title: "Trader Adoption",
        description:
          "Integrations into execution workflows with governance and guidance.",
        bullets: [
          "Playbooks for strategy calibration",
          "Risk management guardrails and oversight",
          "Executive dashboards for PnL attribution",
        ],
      },
    ],
    links: [{ label: "GitHub Overview", url: "https://github.com/HarishNandakumar" }],
  },
  {
    slug: "parkinsons-disease",
    title: "Parkinson’s Disease Prediction",
    role: "Machine Learning Engineer",
    domain: "Healthcare",
    tech: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression"],
    timeline: "2023",
    summary:
      "Delivered diagnostic support tools using biomedical voice markers, boosting accuracy while keeping physicians in control.",
    problem:
      "Neurologists needed faster screening for Parkinson’s disease using voice biomarkers and biomedical indicators.",
    solution:
      "Developed a feature-engineered classification suite comparing ensemble models with interpretability overlays.",
    impact: [
      "Boosted diagnostic recall to 0.94 with stratified evaluation across cohorts.",
      "Generated actionable factor scores physicians could explain to patients.",
      "Packaged workflow for deployment inside hospital IT stacks.",
    ],
    process: [
      {
        title: "Data Partnership",
        description:
          "Coordinated with neurology teams to curate and anonymise control vs affected datasets.",
        bullets: [
          "Quality checks on signal noise and sampling rates",
          "Ethics review board alignment",
          "Secure storage and access policies",
        ],
      },
      {
        title: "Model Innovation",
        description:
          "Compared classical ML, ensembles, and thresholding strategies for sensitivity optimisation.",
        bullets: [
          "Balanced metrics for specificity vs recall",
          "Adopted permutation importance for feature ranking",
          "Implemented clinician-friendly explanations",
        ],
      },
      {
        title: "Clinical Rollout",
        description:
          "Created dashboards and integration scripts for outpatient systems.",
        bullets: [
          "One-click reporting for neurologists",
          "Guidelines for data refresh cadence",
          "Training materials for clinical staff",
        ],
      },
    ],
    links: [{ label: "Research Notes", url: "https://www.softservehub.in/" }],
  },
  {
    slug: "financial-advisor-suite",
    title: "Financial Advisor Streamlit Suite",
    role: "Product Engineer",
    domain: "WealthTech",
    tech: ["Streamlit", "Python", "NLP", "ML"],
    timeline: "2024",
    summary:
      "Built a Streamlit copilot that delivers proactive market commentary, FAQ retrieval, and personalised nudges for advisors.",
    problem:
      "Wealth advisors lacked consolidated insights to respond to investor questions and shifting market events.",
    solution:
      "Combined retrieval-augmented QA, risk analytics, and alerting modules into a single pane of glass.",
    impact: [
      "Cut advisory response times from 2 hours to 12 minutes via automated insights.",
      "Surfaced personalised investment nudges based on behavioural clustering.",
      "Enabled export of compliance-ready PDF briefings per client.",
    ],
    process: [
      {
        title: "Advisor Journeys",
        description:
          "Interviewed front-line advisors and compliance officers to capture the workflow pains.",
        bullets: [
          "Mapped day-in-the-life moments",
          "Defined knowledge sources and approval flows",
          "Outlined KPIs for adoption",
        ],
      },
      {
        title: "Experience Layer",
        description:
          "Crafted Streamlit front-end with modular analytics, search, and recommendations panes.",
        bullets: [
          "Integrated document search with embeddings",
          "Portfolio health snapshot with scenario testing",
          "Notification centre for rapid follow-up",
        ],
      },
      {
        title: "Compliance Enablement",
        description:
          "Ensured every recommendation carried rationale, logs, and exportable evidence.",
        bullets: [
          "Audit trails and immutable storage",
          "Role-based access controls",
          "Advisor training and adoption metrics",
        ],
      },
    ],
    links: [{ label: "Live Preview", url: "https://www.softservehub.in/" }],
  },
  {
    slug: "bookstore-app",
    title: "BookStore Web App",
    role: "Full-Stack Developer",
    domain: "E-commerce",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    timeline: "2022 – 2023",
    summary:
      "Shipped a MERN commerce platform enabling publishers to manage inventory, promotions, and community features.",
    problem:
      "An independent publisher needed a scalable storefront with inventory control and reader engagement features.",
    solution:
      "Delivered secure auth, admin dashboards, and state-managed shopping experiences with analytics.",
    impact: [
      "Processed 40% more orders by automating stock alerts and bundle offers.",
      "Introduced wishlist sharing that lifted repeat visits by 27%.",
      "Integrated analytics to monitor conversion funnels and retention cohorts.",
    ],
    process: [
      {
        title: "Product Strategy",
        description:
          "Defined catalogue objectives, merchandising flows, and loyalty levers with founders.",
        bullets: [
          "Customer segmentation interviews",
          "Backlog prioritisation workshops",
          "Definition of growth metrics",
        ],
      },
      {
        title: "Platform Implementation",
        description:
          "Set up MERN stack with modular services for catalogue, payments, and user engagement.",
        bullets: [
          "Role-based admin dashboards",
          "Dynamic bundling engine",
          "SSR-ready React storefront",
        ],
      },
      {
        title: "Growth & Analytics",
        description:
          "Introduced experimentation, marketing hooks, and KPI dashboards.",
        bullets: [
          "Email automation triggers",
          "Funnel analytics and A/B testing",
          "Community features roadmap",
        ],
      },
    ],
    links: [{ label: "Source Request", url: "mailto:harishnandhakumar2004@gmail.com" }],
  },
  {
    slug: "ai-accounting",
    title: "AI-Powered Accounting Automation",
    role: "AI & Data Engineer (Gravitichain)",
    domain: "FinOps",
    tech: ["Python", "XGBoost", "TensorFlow", "Power BI"],
    timeline: "2024 – 2025",
    summary:
      "Automated transaction categorisation, anomaly detection, and predictive analytics for finance teams managing multi-entity ledgers.",
    problem:
      "Finance teams struggled with slow reconciliation and limited predictive visibility across ledgers.",
    solution:
      "Launched ML pipelines for categorisation, anomaly detection, and executive-ready analytics dashboards.",
    impact: [
      "Reduced reconciliation effort by 65% using automated document parsing.",
      "Lifted forecast accuracy to 93% through continuous model monitoring.",
      "Gave CFOs real-time cashflow views with adaptive alerts for outliers.",
    ],
    process: [
      {
        title: "Finance Discovery",
        description:
          "Shadowed reconciliation cycles, policy controls, and audit requirements.",
        bullets: [
          "Chart of accounts harmonisation",
          "Fraud and compliance checkpoints",
          "Executive reporting cadence",
        ],
      },
      {
        title: "Automation Core",
        description:
          "Implemented classification, anomaly detection, and alert services with feedback loops.",
        bullets: [
          "Document ingestion with OCR and enrichment",
          "Continuous learning with active review",
          "Power BI dashboards for stakeholders",
        ],
      },
      {
        title: "Enterprise Rollout",
        description:
          "Enabled secure deployment across subsidiaries with governance.",
        bullets: [
          "Role-based access and audit trails",
          "Training sprints with controllers",
          "Change management playbooks",
        ],
      },
    ],
    links: [
      { label: "Case Snapshot", url: "https://github.com/SoftServeHub/graviti-chain-pvt-ltd-project" },
    ],
  },
];


export default projects;
