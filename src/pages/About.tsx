import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="section-spacing pt-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-primary text-sm font-body tracking-widest uppercase mb-4 block fade-in">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6 fade-in fade-in-delay-1 heading-glow">
              Crafting Digital
              <span className="text-gold-gradient"> Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed fade-in fade-in-delay-2">
              A passionate professional dedicated to transforming complex challenges into elegant, 
              impactful solutions that drive measurable business outcomes.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="fade-in">
                <h2 className="text-2xl md:text-3xl font-display font-light mb-6 heading-glow">
                  My Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over a decade of experience in digital strategy and product development, 
                    I've had the privilege of working with industry-leading organizations to shape 
                    their digital futures.
                  </p>
                  <p>
                    My journey began in the intersection of technology and design, where I discovered 
                    my passion for creating solutions that are not only functional but truly delightful 
                    to use.
                  </p>
                  <p>
                    Today, I specialize in helping businesses navigate the complex landscape of digital 
                    transformation, bringing a unique blend of strategic thinking and hands-on expertise 
                    to every engagement.
                  </p>
                </div>
              </div>

              <div className="fade-in fade-in-delay-1">
                <h2 className="text-2xl md:text-3xl font-display font-light mb-6 heading-glow">
                  Philosophy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that great work happens at the intersection of purpose, precision, and passion. 
                  Every project I undertake is guided by a commitment to excellence and a deep understanding 
                  that the best solutions emerge when we truly listen to both the business and its users.
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-light mb-8 fade-in heading-glow">
                Core Values
              </h2>
              
              {[
                {
                  icon: Target,
                  title: "Strategic Vision",
                  description: "Every decision is guided by a clear understanding of business objectives and long-term impact."
                },
                {
                  icon: Award,
                  title: "Excellence in Execution",
                  description: "Committed to delivering work that exceeds expectations through meticulous attention to detail."
                },
                {
                  icon: User,
                  title: "User-Centric Approach",
                  description: "Placing the end-user at the heart of every solution ensures meaningful and lasting impact."
                },
                {
                  icon: Heart,
                  title: "Authentic Partnerships",
                  description: "Building genuine relationships founded on trust, transparency, and mutual success."
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className={`card-gold p-6 flex gap-5 fade-in fade-in-delay-${index + 1}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-medium text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-b border-border py-16 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "12+", label: "Years Experience" },
                { number: "50+", label: "Projects Delivered" },
                { number: "30+", label: "Happy Clients" },
                { number: "15+", label: "Industry Awards" }
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center fade-in fade-in-delay-${index + 1}`}>
                  <div className="text-3xl md:text-4xl font-display text-gold-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-light mb-6 heading-glow">
              Let's Create Something Exceptional
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and exploring how we can work together 
              to achieve your goals.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
