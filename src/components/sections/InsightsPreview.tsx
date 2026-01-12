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
    title: "Leadership & Venture Building",
    icon: FaRocket,
    content: [
      "Leading and scaling ventures with clear execution ownership.",
      "Establishing operational structures for sustainable growth.",
      "Driving long-term value across business lines.",
    ],
  },
  {
    id: 2,
    title: "Strategic Investment & Advisory",
    icon: FaChartLine,
    content: [
      "Supporting early-stage ventures through strategic capital deployment.",
      "Advising founders on execution, positioning, and scale readiness.",
      "Strengthening decision-making for long-term business outcomes.",
    ],
  },
  {
    id: 3,
    title: "Business Operations & Delivery",
    icon: FaCogs,
    content: [
      "Oversight of end-to-end business operations and client engagements.",
      "Designing scalable delivery models aligned with growth objectives.",
      "Driving accountability and measurable outcomes across teams.",
    ],
  },
  {
    id: 4,
    title: "Client Strategy & Partnerships",
    icon: FaUsers,
    content: [
      "Building long-term, trust-driven client relationships.",
      "Structuring engagement models around clear outcomes.",
      "Aligning delivery execution with client growth priorities.",
    ],
  },
  {
    id: 5,
    title: "Risk, Governance & Continuity",
    icon: FaLock,
    content: [
      "Embedding governance frameworks into daily operations.",
      "Strengthening risk awareness and operational resilience.",
      "Ensuring continuity through structured decision processes.",
    ],
  },
  {
    id: 6,
    title: "Execution Excellence",
    icon: FaChartLine,
    content: [
      "Translating strategic direction into actionable execution plans.",
      "Tracking performance against clearly defined outcomes.",
      "Driving continuous improvement across delivery cycles.",
    ],
  },
  {
    id: 7,
    title: "Long-Term Vision",
    icon: FaRocket,
    content: [
      "Building organizations designed for durability and scale.",
      "Balancing growth ambitions with operational discipline.",
      "Creating lasting value for clients, teams, and partners.",
    ],
  },
];



const InsightsPreview = () => {
  return (
    <section className="section-spacing relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-4xl mb-20 fade-in-up">
          <p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
            Insights
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl heading-glow mb-6 font-semibold">
  Leadership, execution, and business growth
</h2>

<p className="text-muted-foreground text-lg leading-relaxed">
  A focused overview of leadership roles, operational responsibilities,
  and strategic contributions across ventures and client engagements.
</p>
        </div>

        {/* Insights */}
        <div className="max-w-5xl space-y-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              className="
                card-gold
                p-8 lg:p-10
                fade-in-up
                transition-all duration-300 ease-out
                hover:-translate-y-1
              "
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-xl lg:text-2xl mb-5 flex items-center gap-4 text-primary">
                <insight.icon size={18} className="text-foreground" />
                {insight.title}
              </h3>

              {Array.isArray(insight.content) ? (
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  {insight.content.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground leading-relaxed">
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
