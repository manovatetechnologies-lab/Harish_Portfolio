import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "The Future of Strategic Leadership in an AI-Driven World",
    excerpt:
      "How leaders can leverage artificial intelligence while maintaining the human elements that drive innovation and culture.",
    date: "December 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Resilient Organizations Through Uncertainty",
    excerpt:
      "A framework for developing organizational resilience that transforms challenges into opportunities for growth.",
    date: "November 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Art of Strategic Decision-Making",
    excerpt:
      "Balancing data-driven insights with intuition to make decisions that drive long-term value creation.",
    date: "October 2024",
    readTime: "5 min read",
  },
];

const InsightsPreview = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4">
            Insights
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Thoughts on leadership
          </h2>
        </div>

        {/* Insights Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="card-gold p-6 lg:p-8 flex flex-col"
            >
              <p className="text-muted-foreground text-sm font-body mb-4">
                {insight.date} · {insight.readTime}
              </p>
              <h3 className="font-display text-xl font-light text-foreground mb-4 flex-grow">
                {insight.title}
              </h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                {insight.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="goldOutline" size="lg" asChild className="group">
            <Link to="/insights" className="flex items-center gap-2">
              Read All Insights
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
