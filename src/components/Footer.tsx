import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-semibold">BrandStory</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">Ventures</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              We invest in visionary founders and work alongside them to build industry-leading companies. From concept to revenue, we're your growth partner.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                Bengaluru, India
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                Dubai, UAE
              </li>
              <li>
                <a href="mailto:hello@brandstoryventures.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail size={16} className="text-primary" />
                  hello@brandstoryventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BrandStory Ventures. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
