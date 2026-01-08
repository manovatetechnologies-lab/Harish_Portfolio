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
}
];


const CaseStudies = () => {

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Case Studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1 heading-glow">
              Results that speak{" "}
              <span className="text-gold-gradient">for themselves</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              A selection of engagements that demonstrate my approach to solving
              complex business challenges and delivering measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="border-gold-gradient rounded-lg p-8 lg:p-12"
              >
                {/* Header */}
                <div className="mb-10 flex items-start justify-between gap-6">
  <div>
    <p className="text-primary text-sm font-body tracking-wider uppercase mb-3">
      {study.category}
    </p>

    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
      {study.title}
    </h2>

    <p className="inline-block px-4 py-2 bg-primary/10 text-primary font-body text-sm rounded">
      {study.impact}
    </p>
  </div>

  {/* Side Arrow Redirect */}
  <Link
    to={study.link}
    className="group mt-2 text-primary transition-transform duration-300 hover:translate-x-1"
  >
    <ArrowRight
      size={24}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Problem */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                      <span className="text-primary">—</span> The Challenge
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                      <span className="text-primary">—</span> The Approach
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Tools & Results */}
                <div className="grid md:grid-cols-2 gap-10 mt-10 pt-10 border-t border-border">
                  {/* Tools */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4">
                      Methodologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 border border-border text-muted-foreground font-body text-sm rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3 text-muted-foreground font-body text-sm"
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
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Let's create your success story
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light mb-10">
              Every challenge is unique. Let's discuss how I can help you achieve
              your goals.
            </p>
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Start the Conversation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
