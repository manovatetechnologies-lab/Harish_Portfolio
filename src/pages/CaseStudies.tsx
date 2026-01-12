import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Nutric AI – Personalized Nutrition System",
    category: "HealthTech",
    impact: "Automated personalized nutrition at scale",
    link: "/casestudies/nutric-ai",
    problem:
      "Healthcare providers lacked a scalable way to deliver truly personalized nutrition plans. Existing solutions failed to combine patient behavior, medical data, and real-world food intake into a unified system.",
    solution:
      "Built an end-to-end CNN–LSTM pipeline that fuses computer vision, electronic medical records, and behavioral tracking. The system automates bespoke nutrition journeys while keeping clinicians fully in control of patient outcomes.",
    tools: ["Python", "TensorFlow", "Flask", "OpenCV"],
    results: [
      "Automated personalized nutrition planning for patients",
      "Integrated vision intelligence with clinical data pipelines",
      "Improved adherence through behavior-aware recommendations",
      "Enabled clinician oversight with scalable AI workflows",
    ],
  },
  {
    id: 2,
    title: "Stock Price Prediction Platform",
    category: "Capital Markets",
    impact: "Actionable market forecasting for trading desks",
    link: "/casestudies/stock-price-prediction",
    problem:
      "Proprietary trading desks required more accurate short-term market predictions. Traditional statistical models struggled to capture non-linear temporal patterns in volatile market data.",
    solution:
      "Designed LSTM ensemble models with automated feature engineering pipelines. The platform generates forward-looking market signals that support faster, data-driven trading decisions.",
    tools: ["Python", "LSTM", "Keras", "Pandas"],
    results: [
      "Improved prediction accuracy on volatile market movements",
      "Delivered actionable signals for proprietary trading desks",
      "Reduced manual feature engineering effort",
      "Enabled scalable model experimentation and deployment",
    ],
  },
  {
    id: 3,
    title: "Parkinson’s Disease Prediction",
    category: "Healthcare",
    impact: "Improved diagnostic decision support",
    link: "/casestudies/parkinsons-disease",
    problem:
      "Early detection of Parkinson’s disease is challenging using traditional clinical assessments alone. Physicians needed additional diagnostic signals without losing control over medical decisions.",
    solution:
      "Developed diagnostic support tools using biomedical voice markers and machine learning models to assist clinicians in identifying early-stage Parkinson’s patterns.",
    tools: ["Python", "Scikit-learn", "RandomForest", "Logistic Regression"],
    results: [
      "Improved diagnostic accuracy using voice biomarkers",
      "Kept physicians fully in control of final diagnoses",
      "Enabled non-invasive early-stage screening support",
      "Enhanced clinical confidence with data-backed insights",
    ],
  },
  {
    id: 4,
    title: "Financial Advisor Streamlit Suite",
    category: "WealthTech",
    impact: "AI copilot for financial advisors",
    link: "/casestudies/financial-advisor-suite",
    problem:
      "Financial advisors lacked real-time decision support tools that could surface relevant insights, answer client questions, and proactively assist during market volatility.",
    solution:
      "Built a Streamlit-based AI copilot delivering proactive market commentary, FAQ retrieval, and personalized nudges tailored to advisor workflows.",
    tools: ["Streamlit", "Python", "NLP", "ML"],
    results: [
      "Enabled faster advisor decision-making",
      "Delivered contextual market insights in real time",
      "Improved advisor-client engagement",
      "Reduced manual research overhead",
    ],
  },
  {
    id: 5,
    title: "BookStore Web App",
    category: "E-Commerce",
    impact: "Scalable MERN-based commerce platform",
    link: "/casestudies/bookstore-app",
    problem:
      "Publishers needed a modern digital platform to manage inventory, promotions, and community engagement without relying on fragmented third-party tools.",
    solution:
      "Shipped a full-stack MERN e-commerce platform enabling inventory management, promotional campaigns, and community-driven features in a unified system.",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    results: [
      "Centralized publisher operations into a single platform",
      "Enabled scalable inventory and promotion management",
      "Improved customer engagement through community features",
      "Built a flexible foundation for future growth",
    ],
  },
  {
    id: 6,
    title: "AI-Powered Accounting Automation",
    category: "FinOps",
    impact: "Automated finance operations with AI",
    link: "/casestudies/ai-accounting",
    problem:
      "Finance teams managing multi-entity ledgers struggled with manual transaction categorisation, anomaly detection, and limited forecasting capabilities.",
    solution:
      "Implemented AI-driven accounting automation to categorize transactions, detect anomalies, and deliver predictive financial insights across complex ledger structures.",
    tools: ["Python", "XGBoost", "TensorFlow", "Power BI"],
    results: [
      "Automated transaction categorisation at scale",
      "Detected financial anomalies proactively",
      "Improved forecasting accuracy for finance teams",
      "Reduced manual effort across multi-entity ledgers",
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl fade-in">
            <p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
              Case Studies
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-glow mb-6">
              Results that speak{" "}
              <span className="text-gold-gradient">for themselves</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              A selection of engagements demonstrating how complex challenges
              are transformed into measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="card-gold p-8 lg:p-12 transition-all duration-300 hover:gold-glow-subtle"
              >
                {/* HEADER */}
<div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
  <div>
    <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
      {study.category}
    </p>

    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light mb-4">
      {study.title}
    </h2>

    <span className="inline-block px-4 py-2 bg-muted text-primary text-sm rounded-full">
      {study.impact}
    </span>
  </div>

  {/* VIEW DETAILS BUTTON */}
  <Link
    to={study.link}
    className="
      group
      inline-flex items-center gap-2
      self-start
      rounded-full
      border border-border
      px-6 py-3
      text-sm font-medium
      text-primary
      transition-all duration-300
      hover:bg-accent
      hover:border-primary/40
      hover:text-white
    "
  >
    View details
    <ArrowRight
      size={16}
      className="
        transition-transform duration-300
        group-hover:translate-x-1 
      "
    />
  </Link>
</div>


                {/* PROBLEM & SOLUTION */}
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-lg font-display mb-4">
                      <span className="text-primary">—</span> The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-display mb-4">
                      <span className="text-primary">—</span> The Approach
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* TOOLS & RESULTS */}
                <div className="grid md:grid-cols-2 gap-10 mt-10 pt-10 border-t border-border">
                  <div>
                    <h3 className="text-lg font-display mb-4">
                      Methodologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 border border-border rounded-full text-sm text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-display mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3 text-muted-foreground text-sm"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl heading-glow mb-6">
              Let’s create your success story
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Every challenge is unique. Let’s discuss how I can help you
              achieve your goals.
            </p>

            <Button asChild size="lg" className="bg-primary text-primary-foreground gold-glow rounded-full">
              <Link to="/contact" className="flex items-center gap-2">
                Start the Conversation
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
