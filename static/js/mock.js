// Centralized mock content and config for Diogo Pinto portfolio MVP
// Note: This is MOCK data only. Replace with backend integration later.

export const site = {
  name: "Diogo Pinto",
  monogram: "DP",
  tagline: "Data Scientist with a green-science edge",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Profile", to: "/profile" },
  { label: "CV", to: "/cv" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const socials = {
  github: "https://github.com/TBD",
  linkedin: "https://www.linkedin.com/in/TBD",
  kaggle: "https://www.kaggle.com/TBD",
  scholar: "https://scholar.google.com/citations?user=TBD",
  email: "mailto:hello@TBD.com",
};

export const skillBadges = [
  "Machine Learning",
  "Time Series",
  "MLOps",
  "GIS/Remote Sensing",
  "AgriTech",
  "Sustainability",
];

export const toolbox = {
  languages: ["Python", "SQL"],
  libs: ["Pandas", "scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow"],
  data: ["Airflow", "Prefect", "Docker"],
  geo: ["GeoPandas", "QGIS"],
  cloud: ["AWS", "GCP", "Azure"],
};

export const impactHighlights = [
  { title: "Yield Forecasting", metric: "−18% MAPE", desc: "Seasonal crop yield model at regional scale" },
  { title: "Irrigation Optimization", metric: "−22% water use", desc: "Decision support across fields" },
  { title: "Anomaly Detection", metric: "+31% recall", desc: "Livestock health events" },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML" },
  { key: "timeseries", label: "Time Series" },
  { key: "gis", label: "GIS/RS" },
  { key: "mlops", label: "MLOps" },
  { key: "dash", label: "Dashboards" },
  { key: "research", label: "Research" },
];

export const projects = [
  {
    id: "p1",
    title: "Crop Yield Forecasting",
    summary: "Regional yield prediction using weather, soil, and satellite features.",
    tags: ["ML", "GIS/RS", "Time Series"],
    category: "timeseries",
    impact: "−18% MAPE",
    cover: null,
    links: { case: "#", repo: "#", demo: "#" },
  },
  {
    id: "p2",
    title: "Livestock Anomaly Detection",
    summary: "Early alerting on herd behavior from IoT time series.",
    tags: ["ML", "Time Series"],
    category: "ml",
    impact: "+31% recall",
    cover: null,
    links: { case: "#", repo: "#" },
  },
  {
    id: "p3",
    title: "Irrigation Optimization",
    summary: "Policy recommendation engine aligning yield vs. water.",
    tags: ["Optimization", "Decision Support"],
    category: "dash",
    impact: "−22% water use",
    cover: null,
    links: { case: "#" },
  },
  {
    id: "p4",
    title: "Food Waste Forecasting",
    summary: "Retail demand forecasting to minimize waste.",
    tags: ["Time Series", "ML"],
    category: "timeseries",
    impact: "−17% waste",
    cover: null,
    links: { repo: "#" },
  },
  {
    id: "p5",
    title: "Soil Quality XAI",
    summary: "Explainable models for soil health indicators.",
    tags: ["XAI", "ML"],
    category: "research",
    impact: "Transparent insights",
    cover: null,
    links: { case: "#" },
  },
  {
    id: "p6",
    title: "Greenhouse Climate MLOps",
    summary: "End-to-end training, deployment, monitoring pipeline.",
    tags: ["MLOps", "Pipelines"],
    category: "mlops",
    impact: "Zero-downtime retraining",
    cover: null,
    links: { demo: "#" },
  },
];

export const cvData = {
  experience: [
    {
      role: "Data Scientist",
      org: "Freelance / Consulting",
      period: "2022 – Present",
      bullets: [
        "Designed forecasting systems reducing error by double digits",
        "Productionized ML pipelines with monitoring and CI",
        "Ran discovery to define measurable success metrics",
      ],
    },
    {
      role: "Agronomic Engineer",
      org: "Agri Co.",
      period: "2018 – 2022",
      bullets: [
        "Field trials and data collection across crops",
        "Integrated GIS data for zoning and decision support",
      ],
    },
  ],
  education: [
    { title: "MSc Data Science", org: "University X" },
    { title: "BSc Agronomic Engineering", org: "University Y" },
  ],
  certs: ["AWS Practitioner", "TensorFlow Developer", "QGIS Advanced"],
  skillsMatrix: [
    { area: "Modeling", items: ["Regression", "Classification", "XAI", "Time Series"] },
    { area: "Data Eng & MLOps", items: ["Pipelines", "CI/CD", "Monitoring", "Docker", "Airflow/Prefect"] },
    { area: "Decision Support", items: ["Optimization", "Experiment Design", "BI Dashboards"] },
  ],
};
