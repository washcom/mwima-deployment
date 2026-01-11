import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function PatientRetentionCaseStudy() {
  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen text-foreground"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-destructive/80 py-32 md:py-48 overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/25" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative container mx-auto px-6 max-w-6xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge className="mb-6 bg-white/20 text-white font-semibold px-6 py-3 text-lg rounded-full backdrop-blur-md">
              UX Case Study
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            UX Case Study for a Patient Retention in Care App
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90"
          >
            Designing a mobile solution to improve adherence and reduce lost-to-follow-up among newly initiated ART clients in resource-limited settings.
          </motion.p>
        </motion.div>
      </section>

      <main className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-32">
        {/* Problem Section */}
        <AnimatedContentSection
          title="Problem Statement"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Antiretroviral therapy (ART) has demonstrated remarkable efficacy in mitigating HIV/AIDS-related morbidity and mortality, particularly in resource-limited settings. However, the full realization of its benefits has been impeded by high lost-to-follow-up (LTFU), especially within the first year on ART. Newly initiated ART clients are particularly vulnerable to treatment interruptions due to a multitude of factors, including the severity of their illness, difficulties in disclosing their HIV status, and the adaptation to life with HIV and ART.
          </p>
        </AnimatedContentSection>

        {/* Research Objectives */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black mb-8"
          >
            Research Objectives
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Understand factors contributing to patient lost-to-follow-up (LTFU)",
              "Analyze patient experience and adherence challenges",
              "Identify usability barriers in current ART support tools",
              "Explore opportunities for a mobile solution to improve retention",
            ].map((obj, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-card shadow-lg rounded-2xl p-6 border border-border/50"
              >
                <span className="inline-block w-10 h-10 bg-primary text-white font-bold rounded-full text-center leading-10 mr-3">
                  {i + 1}
                </span>
                <span className="text-lg font-semibold">{obj}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Methodology Section */}
        <AnimatedContentSection
          title="Methodology"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Conducted a UX research study involving interviews, contextual inquiries, and usability testing with ART patients and healthcare providers.
          </p>
          <p>
            Key methods included: user journey mapping, persona development, low-fidelity prototyping, and iterative usability testing of the app features.
          </p>
          <p>
            Insights were analyzed qualitatively to inform design decisions and optimize engagement strategies for adherence and retention.
          </p>
        </AnimatedContentSection>

        {/* Key Findings Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-center"
          >
            Key Findings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High LTFU Risk",
                description:
                  "Newly initiated ART clients face highest risk within the first year",
              },
              {
                title: "Disclosure Challenges",
                description:
                  "Fear and stigma limit adherence and support-seeking",
              },
              {
                title: "Technology Gaps",
                description:
                  "Existing digital tools are not user-friendly or fully accessible",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl p-10 text-center shadow-lg border border-border/50"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {stat.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto"
          >
            Patient engagement and retention are strongly influenced by early support, clear communication, and the usability of digital interventions. Personalized adherence strategies are essential to reduce LTFU and optimize ART outcomes.
          </motion.p>
        </motion.section>

        {/* Proposed Solution Section */}
        <AnimatedContentSection
          title="Proposed Solution"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Developed a mobile application to enhance patient retention and adherence for ART clients. Key features include appointment reminders, medication tracking, adherence feedback, and motivational messaging.
          </p>
          <p>
            The app incorporates user-centered design principles, intuitive interfaces, and actionable insights for healthcare providers to monitor patient progress.
          </p>
          <p>
            Iterative testing ensures usability for low-literacy populations and integration within existing clinical workflows.
          </p>
        </AnimatedContentSection>
      </main>
    </motion.div>
  );
}

function AnimatedContentSection({
  title,
  bgClass,
  children,
}: {
  title: string;
  bgClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-5xl font-black mb-6"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className={`rounded-3xl p-10 md:p-16 ${bgClass}`}
      >
        <div className="prose prose-lg md:prose-xl text-muted-foreground space-y-5">
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
}
