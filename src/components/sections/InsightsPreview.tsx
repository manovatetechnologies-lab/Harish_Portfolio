import {
  FaBrain,
  FaCogs,
  FaLock,
  FaChartLine,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";


const insights = [
  {
    id: 1,
    title: "Bridging AI, Data Science & Cybersecurity",
    icon: FaBrain,
    content:
      "Through a diverse portfolio of certifications and internships, I’ve built a strong foundation in Artificial Intelligence, Data Analytics, and Cybersecurity. My learning journey reflects a continuous commitment to mastering technologies that drive real-world innovation — from developing AI-driven applications to securing digital ecosystems.",
  },
  {
    id: 2,
    title: "Applied Learning Through Global Programs",
    icon: MdOutlineScience,
    content: [
      "IEEE ICCSP 2025 Presenter: Presented my research paper “NUTRIC AI: An AI-Assisted Personalized Nutrition Recommendation System” at an IEEE international conference.",
      "Forage Job Simulations (BCG, AWS, Tata, Accenture): Translated theory into industry-ready problem-solving skills.",
      "IBM & Cisco Cybersecurity Tracks: Built strong foundations in network defense and risk assessment.",
    ],
  },
  {
    id: 3,
    title: "Hands-On Industry Experience",
    icon: FaCogs,
    content: [
      "AI Product Development Intern – Gravitichain Technology Group Pvt. Ltd.",
      "Data Analyst Intern – Elevate Labs (Power BI, DTS).",
      "Full Stack Web Development Intern – Edureka.",
    ],
  },
  {
    id: 4,
    title: "Commitment to Security & Cloud Modernization",
    icon: FaLock,
    content:
      "Certified in IBM Cybersecurity Fundamentals, Cisco Cybersecurity Essentials, and Tata Cybersecurity Analyst Simulation with cloud migration expertise.",
  },
  {
    id: 5,
    title: "Data-Driven Decision Making",
    icon: FaChartLine,
    content:
      "Leveraged Python, Pandas, MongoDB, and Power BI to transform complex datasets into actionable intelligence.",
  },
  {
    id: 6,
    title: "Soft Skills & Productivity",
    icon: FaUsers,
    content:
      "Strengthened communication, leadership, and problem-solving skills through interdisciplinary collaboration.",
  },
  {
    id: 7,
    title: "Vision",
    icon: FaRocket,
    content:
      "To build intelligent, secure, and scalable AI-driven systems that bridge data science and real-world human impact.",
  },
];


const InsightsPreview = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4">
            Insights
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground heading-glow mb-6">
            Bridging AI, data, and cybersecurity
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light leading-relaxed">
            A curated narrative highlighting certifications, hands-on experiences,
            and future-ready ambitions across intelligent systems.
          </p>
        </div>

        {/* Insights Stack */}
        <div className="max-w-5xl space-y-8">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="card-gold p-8 lg:p-10"
            >
              <h3 className="font-display text-xl lg:text-2xl font-light text-foreground mb-4 flex items-center gap-4">
  <span className="text-primary gold-glow-subtle">
    <insight.icon size={22} />
  </span>
  {insight.title}
</h3>

              {Array.isArray(insight.content) ? (
                <ul className="space-y-3 text-muted-foreground font-body font-light leading-relaxed">
                  {insight.content.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground font-body font-light leading-relaxed">
                  {insight.content}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
