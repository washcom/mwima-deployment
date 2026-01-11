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
  visible: { transition: { staggerChildren: 0.15 } },
};

// --- Hero Section Component ---
function HeroSection({
  badgeText,
  title,
  subtitle,
  gradientFrom = "yellow-700/90",
  gradientVia = "orange-600",
  gradientTo = "red-500/80",
}: {
  badgeText: string;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}) {
  return (
    <section
      className={`relative bg-gradient-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} py-32 md:py-48 overflow-hidden text-white`}
    >
      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 max-w-6xl text-center"
      >
        <motion.div variants={fadeUp}>
          <Badge className="mb-6 bg-white/20 text-white font-semibold px-6 py-3 text-lg rounded-full backdrop-blur-md">
            {badgeText}
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}

// --- Animated Content Section ---
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

// --- Key Findings Section ---
function KeyFindingsSection({
  findings,
  description,
}: {
  findings: { title: string; description: string }[];
  description?: string;
}) {
  return (
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
        {findings.map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl p-10 text-center shadow-lg border border-border/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-4">
              {stat.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {description && (
        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.section>
  );
}

// --- Stats Panel Section ---
function StatsPanelSection({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-yellow-50 rounded-3xl p-12 shadow-lg border border-border/50"
        >
          <div className="text-6xl md:text-7xl font-extrabold text-yellow-700 mb-4">
            {stat.value}
          </div>
          <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}

// --- Main EFarm Case Study Page ---
export default function EFarmCaseStudy() {
  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen text-foreground"
    >
      {/* Hero Section */}
      <HeroSection
        badgeText="Web App Case Study"
        title="E-farm: Empowering Farmers, Eliminating Broker Exploitation"
        subtitle="A digital marketplace connecting farmers, sellers, and buyers directly to eliminate exploitation by brokers, ensure fair prices, and improve market access across East Africa."
        gradientFrom="yellow-700/90"
        gradientVia="orange-600"
        gradientTo="red-500/80"
      />

      <main className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-32">
        {/* Problem Section */}
        <AnimatedContentSection
          title="Problem Statement"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Farmers in East Africa often rely on middlemen or brokers to sell their produce. This system frequently leads to unfair pricing, exploitation, and income loss for smallholder farmers. Buyers also face limited access to fresh products and pay higher prices due to broker markups.
          </p>
          <p>
            Existing digital solutions are fragmented or complicated, leaving many farmers without direct access to buyers. There is a critical need for a <strong>secure, easy-to-use platform</strong> that removes intermediaries and ensures transparency in agricultural trade.
          </p>
        </AnimatedContentSection>

        {/* Research Objectives */}
        <AnimatedContentSection
          title="Research Objectives"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <ul className="list-disc pl-6 space-y-2">
            {[
              "Understand how brokers exploit farmers and buyers in the current market",
              "Identify usability gaps in existing agricultural platforms",
              "Explore features needed for direct farmer-to-buyer transactions",
              "Determine mechanisms to ensure transparency, trust, and fair pricing",
            ].map((obj, i) => (
              <li key={i} className="text-lg font-semibold">{obj}</li>
            ))}
          </ul>
        </AnimatedContentSection>

        {/* Methodology */}
        <AnimatedContentSection
          title="Methodology"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Conducted interviews and surveys with farmers, buyers, and sellers to understand pain points, broker practices, and market inefficiencies.
          </p>
          <p>
            Created <strong>personas, user journeys, and prototypes</strong> to test direct transaction workflows and evaluate ease of use for farmers with low digital literacy.
          </p>
          <p>
            Iterative usability testing and feedback helped design a <strong>secure, transparent platform</strong> with real-time listings, price visibility, and order tracking to eliminate broker exploitation.
          </p>
        </AnimatedContentSection>

        {/* Key Findings */}
        <KeyFindingsSection
          findings={[
            { title: "Exploitation by Brokers", description: "Farmers consistently receive below-market prices due to middlemen markups." },
            { title: "Limited Buyer Access", description: "Buyers face higher costs and fewer choices without direct connections to farmers." },
            { title: "Digital Gaps", description: "Many farmers struggle with fragmented platforms and low digital literacy, limiting direct sales." },
          ]}
          description="Removing brokers through a direct farmer-to-buyer platform increases transparency, fair pricing, and trust. Digital tools must be intuitive, secure, and inclusive to drive adoption and engagement."
        />

        {/* Stats Panel */}
        <StatsPanelSection
          stats={[
            { value: "1,200+", label: "Farmers Onboarded" },
            { value: "8,500+", label: "Transactions Completed" },
            { value: "5", label: "Regions Covered" },
          ]}
        />

        {/* Proposed Solution */}
        <AnimatedContentSection
          title="Proposed Solution"
          bgClass="bg-card border border-border/50 shadow-lg"
        >
          <p>
            Built <strong>E-farm</strong>, a web application connecting farmers, buyers, and sellers directly. Key features include <strong>real-time listings, secure payment processing, price transparency, order tracking, and inventory management</strong>.
          </p>
          <p>
            The app employs <strong>user-centered design principles</strong>, ensuring accessibility for low-literacy users and intuitive workflows for managing produce, orders, and buyer communication.
          </p>
          <p>
            Additional tools include <strong>notifications for market updates</strong>, analytics for farmers to optimize sales, and integration of sustainable farming practices to empower the East African agricultural community.
          </p>
        </AnimatedContentSection>

        {/* Path Forward */}
        <AnimatedContentSection
          title="Path Forward with E-farm"
          bgClass="bg-card border border-border/50 shadow-2xl text-center"
        >
          <p className="text-2xl font-bold">
            Empowering farmers and buyers by removing intermediaries, increasing fairness, and expanding market access.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Future iterations will integrate AI pricing suggestions, mobile payment solutions, and logistics support to scale the platform across East Africa.
          </p>
          <p className="text-xl font-semibold">
            E-farm democratizes agricultural trade, ensures transparency, and builds a sustainable, farmer-first ecosystem.
          </p>
        </AnimatedContentSection>
      </main>
    </motion.div>
  );
}
