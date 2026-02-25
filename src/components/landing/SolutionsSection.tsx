import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Smartphone,
  UserCog,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import solutionWorkflow from "@/assets/solution-workflow.jpg";
import solutionPatientApp from "@/assets/solution-patient-app.jpg";
import solutionPhysicianPortal from "@/assets/solution-physician-portal.jpg";
import solutionAiIntelligence from "@/assets/solution-ai-intelligence.jpg";

const solutions = [
  {
    icon: FileText,
    title: "Smart Clinical Workflow",
    subtitle: "Documentation Reimagined",
    description:
      "Reduce documentation time by up to 60% with structured templates and AI-assisted note generation. Designed for fast-paced clinical environments.",
    features: [
      "Structured templates",
      "Auto-population",
      "Quick-fill forms",
      "Voice input",
    ],
    image: solutionWorkflow,
    accent: "195 90% 45%",
  },
  {
    icon: Smartphone,
    title: "Patient Health Record App",
    subtitle: "Health Data, Anywhere",
    description:
      "Secure mobile access for patients to store and view prescriptions, lab reports, and medical records — all in one place.",
    features: [
      "Prescription storage",
      "Lab report access",
      "Record sharing",
      "Appointment history",
    ],
    image: solutionPatientApp,
    accent: "170 70% 45%",
  },
  {
    icon: UserCog,
    title: "Physician Portal",
    subtitle: "Clinical Command Center",
    description:
      "Secure login for doctors to create, manage, and review patient records with role-based access and real-time dashboards.",
    features: [
      "Secure authentication",
      "Record management",
      "Clinical dashboards",
      "Team collaboration",
    ],
    image: solutionPhysicianPortal,
    accent: "210 60% 50%",
  },
  {
    icon: BrainCircuit,
    title: "AI Health Intelligence",
    subtitle: "Insight at Scale",
    description:
      "AI that structures and summarizes complex medical information into actionable clinical insights — turning data into decisions.",
    features: [
      "Medical summarization",
      "Data structuring",
      "Insight generation",
      "Trend analysis",
    ],
    image: solutionAiIntelligence,
    accent: "260 60% 55%",
  },
];

const SolutionsSection = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, solutions.length - 1));
    setActive(clamped);
  };

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % solutions.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = solutions[active];

  return (
    <section
      id="solutions"
      className="section-padding bg-hero text-primary-foreground overflow-hidden relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 50%, hsl(${current.accent} / 0.12) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm font-semibold text-glow-primary uppercase tracking-widest mb-3">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connected Healthcare Products
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            A suite of interoperable tools designed to digitize every layer of
            clinical operations.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-full px-2"
          >
            {solutions.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                  i === active
                    ? "bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20"
                    : "text-primary-foreground/40 hover:text-primary-foreground/70 border border-transparent"
                }`}
              >
                <s.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm"
          >
            {/* Image side */}
            <div className="relative h-64 md:h-80 lg:h-[480px] overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:bg-gradient-to-l lg:from-transparent lg:to-black/20" />
              {/* Number badge */}
              <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">
                  0{active + 1}
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <current.icon className="w-5 h-5 text-glow-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-glow-primary">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                {current.title}
              </h3>

              <p className="text-primary-foreground/60 text-base leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {current.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/70"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-glow-primary hover:gap-3 transition-all duration-300 group"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows + progress */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            <button
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(active + 1)}
              disabled={active === solutions.length - 1}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group p-1"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-glow-primary"
                      : "w-3 bg-primary-foreground/20 group-hover:bg-primary-foreground/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
