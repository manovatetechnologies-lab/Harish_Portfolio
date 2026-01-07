import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll be in touch soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1">
              Let's start a{" "}
              <span className="text-gold-gradient">conversation</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              Whether you're facing a strategic challenge or exploring new
              opportunities, I'm here to help. Reach out and let's discuss how we
              can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
                Send a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-body">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary text-foreground font-body h-12"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-body">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary text-foreground font-body h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-body">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary text-foreground font-body min-h-[150px] resize-none"
                    placeholder="Tell me about your project or challenge..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
                Get in touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-body text-foreground mb-1">Email</p>
                    <a
                      href="mailto:contact@alexandermitchell.com"
                      className="text-muted-foreground font-body hover:text-primary transition-colors duration-300"
                    >
                      contact@alexandermitchell.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-body text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground font-body">
                      New York, NY
                      <br />
                      Available globally
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="font-display text-xl font-light text-foreground mb-4">
                  What to expect
                </h3>
                <ul className="space-y-3 text-muted-foreground font-body font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">1.</span>
                    I'll respond within 24-48 hours
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">2.</span>
                    We'll schedule a brief discovery call
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">3.</span>
                    I'll provide a tailored approach to your needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
