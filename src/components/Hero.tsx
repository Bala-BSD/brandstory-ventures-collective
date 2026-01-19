import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-8">
              Business Accelerator
            </span>
          </div>
          
          <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ animationDelay: "0.1s" }}>
            We Invest, Nurture
            <br />
            <span className="text-gradient-gold">& Scale</span>
          </h1>
          
          <p className="animate-fade-up text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: "0.2s" }}>
            BrandStory Ventures is where bold ideas meet strategic execution. We partner with visionary founders, refine business models, and drive ventures to sustainable revenue.
          </p>

          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.3s" }}>
            <a
              href="#portfolio"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-gold"
            >
              View Our Portfolio
            </a>
            <a
              href="#about"
              className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">22+</div>
              <div className="text-muted-foreground text-sm mt-1">Portfolio Companies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">5+</div>
              <div className="text-muted-foreground text-sm mt-1">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">10+</div>
              <div className="text-muted-foreground text-sm mt-1">Industries</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
