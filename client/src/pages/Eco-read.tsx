import { motion, useInView } from "framer-motion";
import { useRef } from "react";
 
// ─── Animation primitives ──────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
 
// ─── Scroll-triggered section wrapper ─────────────────────────────────────
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}
 
// ─── Typography helpers ────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeUp}
      className="text-[11px] font-semibold tracking-[0.14em] uppercase text-emerald-700 dark:text-emerald-400 mb-3"
    >
      {children}
    </motion.p>
  );
}
function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      variants={fadeUp}
      className={`font-serif text-3xl md:text-4xl font-bold leading-tight text-stone-900 dark:text-stone-50 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
function Body({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      variants={fadeUp}
      className={`text-[15px] leading-[1.8] text-stone-600 dark:text-stone-400 ${className}`}
    >
      {children}
    </motion.p>
  );
}
 
// ─── Stat badge ────────────────────────────────────────────────────────────
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 leading-none mb-1">
        {value}
      </p>
      <p className="text-[12px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
 
// ─── KAP score bar ─────────────────────────────────────────────────────────
function KAPBar({
  domain,
  poor,
  moderate,
  high,
  accent,
}: {
  domain: string;
  poor: number;
  moderate: number;
  high: number;
  accent: string;
}) {
  return (
    <motion.div variants={fadeUp} className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-[13px] font-semibold text-stone-800 dark:text-stone-200">
          {domain}
        </span>
        <span className={`text-[12px] font-semibold ${accent}`}>
          {high}% high ·{" "}
          <span className="text-stone-500 dark:text-stone-400 font-normal">
            {moderate}% moderate · {poor}% poor
          </span>
        </span>
      </div>
      <div className="flex h-7 rounded-md overflow-hidden gap-px bg-stone-200 dark:bg-stone-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${poor}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="bg-orange-400 dark:bg-orange-500 flex items-center justify-center text-[11px] font-semibold text-white"
        >
          {poor > 8 ? `${poor}%` : ""}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${moderate}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-amber-400 dark:bg-amber-500 flex items-center justify-center text-[11px] font-semibold text-white"
        >
          {moderate > 8 ? `${moderate}%` : ""}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${high}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-[11px] font-semibold text-white"
        >
          {high > 8 ? `${high}%` : ""}
        </motion.div>
      </div>
    </motion.div>
  );
}
 
// ─── Finding card ──────────────────────────────────────────────────────────
function FindingCard({
  number,
  domain,
  title,
  body,
  pval,
}: {
  number: string;
  domain: string;
  title: string;
  body: string;
  pval?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col gap-3"
    >
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
          Finding {number}
        </span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 uppercase tracking-wide">
          {domain}
        </span>
      </div>
      <h3 className="text-[15px] font-semibold text-stone-900 dark:text-stone-100 leading-snug">
        {title}
      </h3>
      <p className="text-[13.5px] text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
        {body}
      </p>
      {pval && (
        <p className="text-[11px] text-stone-400 dark:text-stone-500 font-mono border-t border-stone-100 dark:border-stone-800 pt-2 mt-auto">
          {pval}
        </p>
      )}
    </motion.div>
  );
}
 
// ─── Recommendation card ───────────────────────────────────────────────────
function RecCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex gap-4 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl"
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-[14px] font-semibold text-stone-900 dark:text-stone-100 mb-1 leading-snug">
          {title}
        </p>
        <p className="text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
 
// ─── Divider ───────────────────────────────────────────────────────────────
function Divider() {
  return (
    <hr className="border-none border-t border-stone-200 dark:border-stone-800 my-0" />
  );
}
 
// ═══════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function EcoPulseKAPStudy() {
  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-stone-50 dark:bg-stone-950 min-h-screen text-stone-900 dark:text-stone-100 font-sans"
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1c2e1e] px-6 pt-24 pb-28 md:pt-32 md:pb-36">
        {/* Atmospheric texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(74,124,89,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(192,82,42,0.12),transparent)]" />
 
        {/* Watermark */}
        <span
          aria-hidden
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-[18vw] font-serif font-bold text-white/[0.032] leading-none select-none pointer-events-none"
        >
          PM₂.₅
        </span>
 
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative max-w-5xl mx-auto"
        >
          {/* Tag line */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-emerald-400/80 border border-emerald-500/30 bg-emerald-900/30 px-4 py-1.5 rounded-full">
              Phase 1 · Baseline Assessment
            </span>
            <span className="text-[11px] text-white/30 tracking-wide">
              Embakasi Sub-County · Nairobi, Kenya
            </span>
          </motion.div>
 
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-7 max-w-4xl"
          >
            Knowledge, Attitudes &amp; Practices Towards PM
            <sub className="text-3xl md:text-4xl align-sub">2.5</sub>{" "}
            Pollution
          </motion.h1>
 
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-[16px] md:text-lg leading-relaxed max-w-2xl mb-12"
          >
            A cross-sectional study assessing KAP towards PM
            <sub>2.5</sub> pollution and the factors influencing protective
            practices among residents of Embakasi Sub-County, Nairobi, Kenya.
          </motion.p>
 
          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
          >
            {[
              ["Participants", "309 household heads"],
              ["Design", "Cross-sectional study"],
              ["Sampling", "Systematic household"],
              ["Score categories", "< 60% · 60–79% · ≥ 80%"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35 mb-1">
                  {label}
                </p>
                <p className="text-[13px] font-medium text-white/75">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
 
      {/* ── MAIN ──────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 py-24 md:py-32">
 
        {/* ── 1. CONTEXT ─────────────────────────────────────────────────── */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Study Context</Eyebrow>
              <Heading className="mb-5">
                A persistent public health challenge in Nairobi's urban core
              </Heading>
              <Body>
                Particulate matter (PM<sub>2.5</sub>) is the leading
                environmental health risk globally. In Kenya, air pollution
                claims an estimated 19,000 lives annually. In Embakasi — one of
                Nairobi's most densely populated sub-counties — a combination of
                industrial activity, transport emissions, and household energy
                use exposes communities to chronic PM<sub>2.5</sub> levels that
                regularly exceed WHO guidelines.
              </Body>
              <Body className="mt-3">
                Understanding what communities know, believe, and do in response
                to this exposure is the essential first step before any
                intervention can be designed or scaled.
              </Body>
            </div>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { val: "309", label: "Participants surveyed" },
                { val: "3", label: "KAP domains assessed" },
                { val: "95%", label: "Confidence interval" },
                { val: "p ≤ .05", label: "Significance threshold" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 flex flex-col items-center text-center gap-1"
                >
                  <span className="font-serif text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                    {val}
                  </span>
                  <span className="text-[12px] text-stone-500 dark:text-stone-400 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>
 
        <Divider />
 
        {/* ── 2. METHODOLOGY ─────────────────────────────────────────────── */}
        <Section>
          <Eyebrow>Methodology</Eyebrow>
          <Heading className="mb-3">A three-stage analytical approach</Heading>
          <Body className="mb-10 max-w-2xl">
            KAP scores for each participant were computed and categorised using
            Bloom's cut-offs (&lt; 60% = poor · 60–79% = moderate · ≥ 80% =
            high). Three complementary methods were applied sequentially to
            extract robust, policy-relevant insights.
          </Body>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              {
                step: "01",
                label: "Descriptive Analysis",
                body: "Score distributions for knowledge, attitudes, and practices were summarised across the study population to establish baseline KAP levels.",
                icon: "📊",
              },
              {
                step: "02",
                label: "Chi-Square Tests",
                body: "Associations between KAP levels and socio-demographic characteristics were evaluated using chi-square tests at a significance level of p ≤ 0.05.",
                icon: "🔗",
              },
              {
                step: "03",
                label: "Ordinal Logistic Regression",
                body: "Variables significant in bivariate analysis were entered into an ordinal regression model to identify independent predictors of protective practice levels.",
                icon: "📈",
              },
            ].map(({ step, label, body, icon }) => (
              <motion.div
                key={step}
                variants={fadeUp}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-stone-100 dark:text-stone-800 select-none">
                  {step}
                </span>
                <span className="text-2xl mb-4 block">{icon}</span>
                <p className="text-[13px] font-bold uppercase tracking-wide text-stone-400 dark:text-stone-500 mb-2">
                  Step {step}
                </p>
                <p className="font-semibold text-stone-900 dark:text-stone-100 mb-2 text-[15px]">
                  {label}
                </p>
                <p className="text-[13.5px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>
 
        <Divider />
 
        {/* ── 3. KEY FINDINGS ────────────────────────────────────────────── */}
        <Section>
          <Eyebrow>Key Findings</Eyebrow>
          <Heading className="mb-3">What the data revealed</Heading>
          <Body className="mb-10 max-w-2xl">
            A majority of respondents demonstrated high knowledge and positive
            attitudes — yet protective practices told a starkly different story.
          </Body>
 
          {/* KAP Big Numbers */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-3 gap-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 mb-8"
          >
            {[
              { pct: "71%", label: "High knowledge", sub: "scored ≥ 80%", color: "text-emerald-700 dark:text-emerald-400" },
              { pct: "62%", label: "Positive attitudes", sub: "scored ≥ 80%", color: "text-amber-600 dark:text-amber-400" },
              { pct: "61%", label: "Poor practices", sub: "scored < 60%", color: "text-orange-600 dark:text-orange-400" },
            ].map(({ pct, label, sub, color }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="text-center"
              >
                <p className={`font-serif text-5xl md:text-6xl font-bold ${color} leading-none mb-2`}>
                  {pct}
                </p>
                <p className="text-[13px] font-semibold text-stone-800 dark:text-stone-200">
                  {label}
                </p>
                <p className="text-[12px] text-stone-400 dark:text-stone-500">
                  {sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
 
          {/* Distribution bars */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-7 space-y-5"
          >
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-5">
              Score distribution across Bloom's categories
            </p>
            <KAPBar domain="Knowledge" poor={8} moderate={21} high={71} accent="text-emerald-700 dark:text-emerald-400" />
            <KAPBar domain="Attitudes" poor={12} moderate={26} high={62} accent="text-amber-600 dark:text-amber-400" />
            <KAPBar domain="Practices" poor={61} moderate={23} high={16} accent="text-orange-600 dark:text-orange-400" />
            <div className="flex gap-5 pt-2 flex-wrap">
              {[
                { label: "Poor (< 60%)", bg: "bg-orange-400" },
                { label: "Moderate (60–79%)", bg: "bg-amber-400" },
                { label: "High (≥ 80%)", bg: "bg-emerald-600" },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1.5 text-[12px] text-stone-500 dark:text-stone-400">
                  <span className={`w-2.5 h-2.5 rounded-sm ${l.bg}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </motion.div>
        </Section>
 
        <Divider />
 
        {/* ── 4. FINDINGS BY OBJECTIVE ───────────────────────────────────── */}
        <Section>
          <Eyebrow>Findings by Objective</Eyebrow>
          <Heading className="mb-10">Four objectives, four insights</Heading>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FindingCard
              number="01"
              domain="Knowledge"
              title="High knowledge driven by educational attainment"
              body="71% of respondents fell in the high knowledge category (≥ 80%). Education level was significantly associated with knowledge levels — residents with higher educational attainment demonstrated stronger awareness of PM₂.₅ sources, health effects, and exposure risks."
              pval="Chi-square · p < 0.001 (education vs. knowledge level)"
            />
            <FindingCard
              number="02"
              domain="Attitudes"
              title="Positive attitudes shaped by education and years of exposure"
              body="62% demonstrated positive attitudes (≥ 80%). Significant associations were found with both education level and length of residence in the area, suggesting that accumulated environmental exposure gradually shapes concern and perceived risk."
              pval="Chi-square · p < 0.001 (education & length of stay vs. attitude)"
            />
            <FindingCard
              number="03"
              domain="Practices"
              title="Majority report poor protective behaviour despite awareness"
              body="61% scored below 60% (poor practices). At the bivariate level, protective practice was associated with length of stay, living with a vulnerable person, and perceived income — pointing to social, environmental, and economic dimensions of health behaviour."
              pval="Chi-square · length of stay p = 0.003 · vulnerable person p ≤ 0.001 · income p = 0.017"
            />
            <FindingCard
              number="04"
              domain="Key Predictor"
              title="Household vulnerability: the only independent driver of protective action"
              body="After adjusting for all other variables in the ordinal logistic regression model, only one factor emerged as a significant, independent predictor: living with a vulnerable person (child, elderly, or chronically ill). Households in this situation had 2.3× higher odds of engaging in protective practices."
              pval="Ordinal logistic regression · PPO OR = 2.29, 95% CI: 1.34–3.93, p = 0.001"
            />
          </motion.div>
        </Section>
 
        <Divider />
 
        {/* ── 5. THE GAP ─────────────────────────────────────────────────── */}
        <Section>
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <Eyebrow>The Critical Gap</Eyebrow>
              <Heading className="mb-5">
                Knowing is not enough — a clear awareness–action divide
              </Heading>
              <Body>
                The central finding of this study is not any single statistic
                in isolation, but the contrast between them. A community that is
                well-informed and broadly concerned about PM<sub>2.5</sub> should,
                in theory, take protective action. Yet 61% of respondents
                reported poor protective practices.
              </Body>
              <Body className="mt-3">
                This knowledge–attitude–practice (KAP) gap is a well-documented
                phenomenon in health behaviour research, and it has direct
                implications for how interventions are designed: information
                campaigns and awareness drives alone will not shift behaviour.
                The levers of change are structural, social, and economic.
              </Body>
            </div>
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 bg-[#1c2e1e] rounded-2xl p-7 space-y-5"
            >
              {[
                { label: "Know about PM₂.₅ risks", pct: 71, color: "bg-emerald-500" },
                { label: "Concerned about health effects", pct: 62, color: "bg-amber-400" },
                { label: "Taking protective action", pct: 39, color: "bg-orange-500" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="space-y-2">
                  <div className="flex justify-between text-[12px] font-medium text-white/70">
                    <span>{label}</span>
                    <span className="text-white font-semibold">{pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className={`h-full ${color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-white/35 pt-2 leading-relaxed">
                High knowledge and positive attitudes do not translate to
                protective action in the majority of households.
              </p>
            </motion.div>
          </div>
        </Section>
 
        <Divider />
 
        {/* ── 6. RECOMMENDATIONS ─────────────────────────────────────────── */}
        <Section>
          <Eyebrow>Recommendations</Eyebrow>
          <Heading className="mb-3">
            Evidence-based pathways to change
          </Heading>
          <Body className="mb-12 max-w-2xl">
            Based on the study findings, the following recommendations are
            proposed for policy, practice, and future research.
          </Body>
 
          {/* Policy & Practice */}
          <motion.div variants={fadeUp} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-emerald-600 rounded-full" />
              <p className="text-[13px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Policy &amp; Practice
              </p>
            </div>
            <motion.div variants={stagger} className="space-y-4">
              <RecCard
                icon="🎯"
                title="Prioritise behaviour change over information dissemination"
                body="Interventions should move beyond awareness campaigns to practical strategies: demonstrations, action cues, and reminder systems that support the translation of existing knowledge and positive attitudes into consistent protective behaviours."
              />
              <RecCard
                icon="🏠"
                title="Target households with vulnerable individuals"
                body="Given that living with a vulnerable person (children, elderly, those with chronic illness) was the only significant predictor of protective practices, policies should direct resources and targeted interventions toward these high-risk households first."
              />
              <RecCard
                icon="💡"
                title="Design interventions that account for contextual factors"
                body="Length of stay and perceived income showed associations at the bivariate level and likely play a role in shaping protective behaviours. Intervention strategies should be tailored to reflect these social and economic realities of the community."
              />
            </motion.div>
          </motion.div>
 
          {/* Further Research */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-amber-500 rounded-full" />
              <p className="text-[13px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Further Research
              </p>
            </div>
            <motion.div variants={stagger} className="space-y-4">
              <RecCard
                icon="📅"
                title="Longitudinal studies to track KAP trajectories"
                body="Future work should follow cohorts over time to capture changes in knowledge, attitudes, and protective practices — and link those changes to measurable health outcomes in exposed communities."
              />
              <RecCard
                icon="🔍"
                title="Qualitative research into the practice gap"
                body="Quantitative surveys alone cannot explain why individuals with high knowledge and positive attitudes fail to adopt protective practices. In-depth qualitative studies are needed to surface the lived barriers and motivators at play."
              />
              <RecCard
                icon="📋"
                title="Evaluate current air pollution reduction strategies"
                body="As PM₂.₅ pollution remains a persistent issue in Embakasi, research should assess the real-world effectiveness of existing reduction strategies and identify where structural changes in policy or infrastructure are most urgently needed."
              />
            </motion.div>
          </motion.div>
        </Section>
 
        <Divider />
 
        {/* ── 7. CONCLUSION ──────────────────────────────────────────────── */}
        <Section>
          <Eyebrow>Conclusion</Eyebrow>
          <Heading className="mb-8">Study conclusions</Heading>
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 md:p-10 space-y-5"
          >
            {[
              "Although most respondents possessed high levels of knowledge and positive attitudes towards PM₂.₅ pollution, engagement in protective practices remained low — highlighting a clear gap between awareness and behaviour that cannot be closed by information alone.",
              "Among all socio-demographic and perceptual factors tested, only living with a vulnerable individual was independently associated with higher odds of protective practice. This finding underscores the role of perceived personal responsibility and heightened household risk in driving behavioural change.",
              "The study highlights the urgent need for targeted, context-specific interventions that go beyond awareness creation. Improving access to feasible, practical, and affordable protective measures — particularly for households with children, elderly members, or individuals with chronic illness — is critical to promoting sustainable behaviour change in high-pollution urban settings.",
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-serif text-2xl font-bold text-emerald-700 dark:text-emerald-500 flex-shrink-0 leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-stone-700 dark:text-stone-300 leading-[1.8]">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </Section>
 
        <Divider />
 
        {/* ── 8. CTA ─────────────────────────────────────────────────────── */}
        <Section>
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden bg-[#1c2e1e] rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(74,124,89,0.2),transparent)]" />
            <div className="relative max-w-2xl mx-auto space-y-6">
              <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-emerald-400/80 border border-emerald-500/30 bg-emerald-900/30 px-4 py-1.5 rounded-full mb-2">
                Work with our team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                Turn research into real-world impact
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed">
                Our team combines rigorous public health research methodology
                with community-centred implementation expertise. Whether you
                are designing an air quality intervention, evaluating an
                existing programme, or building the evidence base for policy
                advocacy — we can help.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {[
                  "KAP assessments",
                  "Epidemiological studies",
                  "Intervention design",
                  "Policy briefs",
                  "Programme evaluation",
                  "Capacity building",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-[12px] font-medium text-emerald-300/80 border border-emerald-700/50 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:hello@ecopulse.co.ke"
                  className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-colors"
                >
                  Get in touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="inline-block bg-white/10 hover:bg-white/15 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-colors border border-white/10"
                >
                  Download full report
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Section>
 
      </main>
 
      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 dark:border-stone-800 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-stone-400 dark:text-stone-600">
          <p className="font-semibold text-stone-600 dark:text-stone-400">
            EcoPulse · Environmental Health Research &amp; Consulting
          </p>
          <p>
            Cross-sectional study · Komarock Harmony A CHU · Embakasi Sub-County · Nairobi, Kenya
          </p>
          <p>Ethical approval obtained · Informed consent from all participants</p>
        </div>
      </footer>
    </motion.div>
  );
}
 
