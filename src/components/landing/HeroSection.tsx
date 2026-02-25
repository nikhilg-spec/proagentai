import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Bot } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { scrollToSection } from "@/lib/utils";
import indiaMap from "@/assets/in.svg";
import cloud from "@/assets/cloud.svg";
import lock from "@/assets/lock.svg";

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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: <img src={indiaMap} alt="India" className="w-8 h-8" />,
              title: "Made for India",
              subtitle: "Healthcare-First",
            },
            {
              icon: <img src={lock} alt="India" className="w-8 h-8" />,
              title: "Secure Patient",
              subtitle: "Data Systems",
            },
            {
              icon: <img src={cloud} alt="India" className="w-8 h-8" />,
              title: "Cloud-Native",
              subtitle: "& Scalable",
            },
            {
              icon: <Bot className="w-8 h-8 text-primary" />,
              title: "AI-Driven Clinical",
              subtitle: "Automation",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center flex flex-col items-center gap-2 p-4 rounded-xl"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 border-primary/20 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <div className="text-sm md:text-base font-bold text-primary-foreground">
                  {item.title}
                </div>
                <div className="text-xs text-primary-foreground/50 mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
