import { Target, TrendingUp, Users, Lightbulb } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Invest",
      description: "We identify high-potential ventures and provide strategic capital to fuel their growth journey."
    },
    {
      icon: Users,
      title: "Nurture",
      description: "Our hands-on approach includes mentorship, operational support, and access to our network."
    },
    {
      icon: Target,
      title: "Refine",
      description: "We work closely with founders to optimize business models and find product-market fit."
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description: "From early traction to sustainable revenue, we accelerate growth at every stage."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Approach</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Building Tomorrow's
            <br />
            <span className="text-gradient-gold">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BrandStory Ventures is more than an accelerator—we're a growth partner. We take equity positions in ventures we believe in and work alongside founders until they achieve sustainable revenue and market leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
