import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "The Future of Strategic Leadership in an AI-Driven World",
    excerpt:
      "How leaders can leverage artificial intelligence while maintaining the human elements that drive innovation and culture.",
    content: `The rapid advancement of AI technologies is fundamentally reshaping how we think about strategic leadership. While AI can process vast amounts of data and identify patterns beyond human capability, the most successful leaders will be those who can integrate these insights with emotional intelligence, ethical judgment, and creative vision.

The key lies not in competing with AI, but in leveraging it to amplify uniquely human capabilities. Leaders who embrace this paradigm shift will find themselves better equipped to make complex decisions, inspire teams, and navigate uncertainty.`,
    date: "December 2024",
    readTime: "8 min read",
    category: "Leadership",
  },
  {
    id: 2,
    title: "Building Resilient Organizations Through Uncertainty",
    excerpt:
      "A framework for developing organizational resilience that transforms challenges into opportunities for growth.",
    content: `Resilience has become the defining characteristic of successful organizations in our rapidly changing world. But true resilience goes beyond simply weathering storms—it's about building systems and cultures that grow stronger through adversity.

This requires a fundamental shift in how we approach risk and uncertainty. Rather than trying to predict and prevent every possible disruption, resilient organizations develop adaptive capabilities that allow them to respond effectively to whatever challenges emerge.`,
    date: "November 2024",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    id: 3,
    title: "The Art of Strategic Decision-Making",
    excerpt:
      "Balancing data-driven insights with intuition to make decisions that drive long-term value creation.",
    content: `In an age of unprecedented data availability, it's tempting to believe that every decision can be optimized through analytics. While data-driven decision-making has transformed business, the most impactful strategic choices often require something more—the ability to synthesize incomplete information with experience and judgment.

The art lies in knowing when to trust the data and when to trust your instincts. This isn't about choosing one over the other, but developing the wisdom to integrate both effectively.`,
    date: "October 2024",
    readTime: "5 min read",
    category: "Decision-Making",
  },
  {
    id: 4,
    title: "Creating Value Through Purpose-Driven Strategy",
    excerpt:
      "Why organizations that align profit with purpose consistently outperform their peers over the long term.",
    content: `The old dichotomy between profit and purpose is dissolving. Research consistently shows that organizations with clear, authentic purposes outperform their peers on multiple dimensions—from employee engagement to customer loyalty to financial returns.

But purpose cannot be manufactured or bolted on as an afterthought. It must be discovered, articulated, and embedded into every aspect of how an organization operates and creates value.`,
    date: "September 2024",
    readTime: "7 min read",
    category: "Purpose",
  },
  {
    id: 5,
    title: "The Evolution of Executive Presence",
    excerpt:
      "How the definition of leadership presence is changing and what it means for today's leaders.",
    content: `The traditional markers of executive presence—commanding physical stature, unwavering confidence, authoritative communication—are giving way to a more nuanced understanding of what makes leaders effective.

Today's most impactful leaders demonstrate presence through authenticity, vulnerability, and the ability to create psychological safety. They inspire not through dominance, but through genuine connection and shared purpose.`,
    date: "August 2024",
    readTime: "6 min read",
    category: "Leadership",
  },
  {
    id: 6,
    title: "Navigating Digital Transformation Without Losing Your Soul",
    excerpt:
      "Maintaining organizational culture and human connection through periods of technological change.",
    content: `Digital transformation is often framed purely in technological terms—new systems, automated processes, digital channels. But the most successful transformations recognize that technology is merely an enabler of human potential.

Organizations that maintain their cultural identity and human connections through digital transformation emerge stronger and more capable of leveraging technology in service of their mission.`,
    date: "July 2024",
    readTime: "8 min read",
    category: "Transformation",
  },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Insights
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1 heading-glow">
              Perspectives on{" "}
              <span className="text-gold-gradient">leadership & strategy</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              Thoughts, frameworks, and observations from two decades of advising
              leaders and organizations through transformational change.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {insights.map((insight) => (
              <article
                key={insight.id}
                className="card-gold p-8 lg:p-10 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-body text-xs tracking-wider uppercase rounded">
                    {insight.category}
                  </span>
                  <span className="text-muted-foreground text-sm font-body">
                    {insight.readTime}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm font-body mb-4">
                  {insight.date}
                </p>

                <h2 className="font-display text-xl md:text-2xl font-light text-foreground mb-4">
                  {insight.title}
                </h2>

                <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 flex-grow">
                  {insight.excerpt}
                </p>

                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed border-t border-border pt-6">
                  {insight.content.substring(0, 200)}...
                </p>
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
              Want to discuss these ideas?
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light mb-10">
              I'm always interested in conversations with fellow leaders and
              thinkers.
            </p>
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Start a Conversation
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

export default Insights;
