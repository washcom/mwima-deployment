import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const particleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [0, 0.4, 0],
    scale: [0, 1, 0],
    transition: {
      delay: i * 0.1,
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 3,
    },
  }),
};

function HeroSection({
  badgeText,
  title,
  subtitle,
}: {
  badgeText: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary/90 via-primary to-destructive/80 text-white">
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={particleVariants}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-6"
          >
            <Badge className="bg-white/20 text-white font-semibold px-6 py-2 text-base rounded-full backdrop-blur-md border border-white/30">
              {badgeText}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
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
        className="text-3xl md:text-4xl font-black mb-6"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className={`rounded-3xl p-8 md:p-12 ${bgClass}`}
      >
        <div className="prose prose-lg md:prose-xl text-muted-foreground space-y-5">
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function EFarmCaseStudy() {
  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen text-foreground"
    >
      <HeroSection
        badgeText="Agricultural Tech Case Study"
        title="E-farm: Empowering Farmers"
        subtitle="Connecting farmers, sellers, and buyers directly to eliminate exploitation, ensure fair pricing, and expand market access across East Africa."
      />

      <main className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-24">
        <AnimatedContentSection
          title="Problem Statement"
          bgClass="bg-card border border-secondary/25 shadow-lg"
        >
          <p>
            Farmers in East Africa often rely on brokers to sell produce, leading
            to unfair pricing and income loss. Buyers also pay inflated prices
            due to middlemen markups.
          </p>
          <p>
            Existing platforms are fragmented or complex, leaving farmers
            without a secure and direct path to market access.
          </p>
        </AnimatedContentSection>

        <AnimatedContentSection
          title="Methodology"
          bgClass="bg-card border border-secondary/25 shadow-lg"
        >
          <p>
            Conducted interviews, surveys, and usability testing with farmers,
            buyers, and sellers to identify pain points and workflow challenges.
          </p>
          <p>
            Designed personas, user journeys, and iterative prototypes focused
            on transparency, simplicity, and trust.
          </p>
        </AnimatedContentSection>

        <AnimatedContentSection
          title="Proposed Solution"
          bgClass="bg-gradient-to-br from-emerald-50 to-green-50 border border-secondary/25 shadow-lg"
        >
          <p className="text-2xl font-bold text-emerald-800 mb-6">
            Built <span className="text-emerald-700">E-farm</span>, a farmer-first web platform
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li>Real-time listings with transparent pricing and quality verification</li>
            <li>Secure payments and logistics tracking integrated directly</li>
            <li>Community features and farmer support networks</li>
          </ul>
          <p className="mt-8 text-xl text-emerald-700 font-semibold">
            Designed for accessibility, scalability, and trust to empower farmers and buyers across East Africa.
          </p>
        </AnimatedContentSection>
      </main>
    </motion.div>
  );
}
