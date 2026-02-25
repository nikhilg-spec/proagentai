import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero text-primary-foreground">
      {/* Running line */}
      <div className="border-b border-primary-foreground/10 overflow-hidden py-3">
        <div className="animate-scroll-left flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              <span className="flex items-center gap-2 text-sm text-glow-primary font-medium">
                <Shield className="w-4 h-4" /> Encrypted Cloud Infrastructure
              </span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-sm text-primary-foreground/60">
                Secure Patient Record Storage
              </span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-sm text-primary-foreground/60">
                AI-Powered Healthcare Infrastructure
              </span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-sm text-primary-foreground/60">
                Enterprise-Grade Security
              </span>
              <span className="text-primary-foreground/40">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div
              className="text-xl font-bold tracking-tight mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-gradient-primary">Proagent</span>AI
            </div>
            <p className="text-primary-foreground/50 text-sm max-w-sm leading-relaxed">
              AI-powered digital health infrastructure for clinics and
              hospitals. Transforming paper workflows into secure, intelligent
              systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Clinical Workflow
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Patient App
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Physician Portal
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary-foreground transition-colors"
                >
                  AI Intelligence
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>
            © {new Date().getFullYear()} ProagentAI Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Security Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
