import { motion } from "framer-motion";
import { Monitor, ShieldCheck, Activity } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Clinic-Ready Infrastructure",
    description:
      "Secure, scalable systems designed specifically for healthcare environments of all sizes.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Real-time health system monitoring ensures reliability and performance around the clock.",
  },
  {
    icon: ShieldCheck,
    title: "AI-Integrated Modules",
    description:
      "Purpose-built AI modules that enhance clinical decision-making and documentation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modernizing Clinical Workflows
          </h2>
          <p className="text-muted-foreground text-lg">
            We empower growing healthcare providers with secure, intelligent
            digital infrastructure that replaces outdated paper-based systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 hover:glow-border transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
