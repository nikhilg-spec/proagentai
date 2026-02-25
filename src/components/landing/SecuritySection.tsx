import { motion } from "framer-motion";
import { Lock, KeyRound, Server } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Encrypted Cloud Infrastructure",
    description:
      "Enterprise-grade encryption for data at rest and in transit, deployed on secure cloud infrastructure with strict access controls.",
  },
  {
    icon: KeyRound,
    title: "Secure Authentication",
    description:
      "Role-based access control with multi-factor authentication ensures only authorized personnel access patient data.",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description:
      "Built to grow with your organization—from a single clinic to a multi-location hospital network.",
  },
];

const SecuritySection = () => {
  return (
    <section
      id="security"
      className="section-padding bg-hero text-primary-foreground overflow-hidden relative"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(195 90% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 70% 50% / 0.2) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-glow-primary uppercase tracking-widest mb-3">
            Security & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Trust & Security
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Your patients' data deserves the highest level of protection. Our
            platform is designed with security at its core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-glow-primary/20 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-7 h-7 text-glow-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
