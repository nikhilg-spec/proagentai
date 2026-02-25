import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { scrollToSection } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-hero opacity-80" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <Shield className="w-4 h-4 text-glow-primary" />
            <span className="text-sm font-medium text-glow-primary">
              Encrypted · Secure · Reliable
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground mb-6 leading-tight">
            Digital Health{" "}
            <span className="text-gradient-primary">Infrastructure</span>
            <br />
            Powered by AI
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Helping clinics and hospitals move from paper to digital with
            AI-powered tools. Secure, scalable, and built for modern healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#solutions");
                }}
              >
                Explore Solutions
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "256-bit", label: "Encryption" },
            { value: "100%", label: "Secure" },
            { value: "24/7", label: "Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-glow-primary">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
