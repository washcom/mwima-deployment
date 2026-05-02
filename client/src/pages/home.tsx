import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import home from "@assets/stock_images/homepage.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export default function Home() {
  const services = [
    {
      id: "project-management",
      title: "Project & Program Management",
      description: "We lead strategic development and delivery of projects."
    },
    {
      id: "research-analysis",
      title: "Research & Data Analysis",
      description: "We uncover insights through rigorous research and data analysis to inform decisions and effective interventions."
    },
    {
      id: "product-design",
      title: "Product & UX Design",
      description: "We craft user-centered products and seamless experiences that solve real-world problems."
    },
    {
      id: "design-strategy",
      title: "Service & Design Strategy",
      description: "We design systems and strategies that align people processes and technology for impact."
    },
    {
      id: "monitoring-evaluation",
      title: "Monitoring Evaluation & Impact",
      description: "We measure outcomes at every stage—baseline midline endline—to drive learning and sustainable impact."
    },
    {
      id: "software-solutions",
      title: "Software & Technology Solutions",
      description: "We build reliable scalable and secure digital solutions tailored to context specific needs."
    },
    {
      id: "facilitation",
      title: "Facilitation & Co-creation",
      description: "We engage stakeholders through workshops and co-creation sessions to generate actionable solutions."
    },
    {
      id: "emerging-tech",
      title: "Emerging Tech & Digital Health",
      description: "We leverage AI and emerging technologies to deliver innovative evidence-based digital health solutions."
    }
  ];

  return (
    <div className="flex flex-col bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-6 py-20 relative z-10 text-center lg:text-left max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-bottom-5 duration-700 fade-in">              
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                Evidence-Based <br/>
                <span className="text-secondary-foreground">Strategic Impact</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
                We partner with organizations to design monitor and evaluate development programs that create lasting change across Africa
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full h-14 px-10 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300")}
                >
                  Partner With Us
                </Link>
                <Link 
                  href="/services"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-white/30 text-white hover:bg-white/10 font-semibold rounded-full h-14 px-10 text-lg hover:-translate-y-1 transition-all duration-300")}
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-right-5 duration-700 fade-in delay-200">
              <img 
                src={home} 
                alt="Consulting Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Updated with bigger Our Expertise */}
      <motion.section
        className="py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            variants={fadeUp}
          >
            {/* Main heading - Our Expertise (bigger) */}
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              Our <span className="text-secondary">Expertise</span>
            </h2>
            
            {/* Subheading - Core Capabilities (smaller) */}
           
            
            <p className="text-xl text-muted-foreground/80">
              Our multidisciplinary team brings deep technical expertise and contextual understanding to every engagement.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-24 bg-muted/30"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            variants={fadeUp}
          >
            {/* Main heading - Why Choose Us (bigger) */}
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              Why <span className="text-secondary">Choose Us</span>
            </h2>
            
            {/* Subheading - Local Insights Global Standards (smaller) */}
            <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-muted-foreground/80">
              Local Insights, <span className="text-secondary">Global Standards</span>
            </h3>
            
            {/* Removed the paragraph as requested */}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Feature 
              title="Regional Expertise" 
              description="Our team has a deep understanding of the unique challenges and opportunities the region presents"
            />
            <Feature 
              title="Proven Methodology" 
              description="Our research backed approach ensures delivery of measurable results."
            />
            <Feature 
              title="User-Centered Approach" 
              description="We ground solutions in real-world realities and needs."
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-background"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            className="bg-gradient-to-br from-card via-card to-primary/5 border border-secondary/25 rounded-3xl p-10 md:p-12 text-center shadow-xl"
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to <span className="text-secondary">maximize</span> your impact?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how our expertise can support your organization's goals and sustainable development objectives.
            </p>
            <Link 
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-14 px-12 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group")}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="overflow-hidden border border-secondary/25 bg-card shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-secondary/45 group h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <h4 className="text-lg font-bold text-primary mb-3 group-hover:text-foreground transition-colors duration-300 line-clamp-2">
            {service.title}
          </h4>
          
          <p className="text-muted-foreground flex-1 text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
            {service.description}
          </p>
          
          <div className="mt-auto pt-4 border-t border-secondary/20 group-hover:border-secondary/35 transition-colors duration-300">
            <Link 
              href={`/services#${service.id}`}
              className="text-sm font-semibold inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group/link"
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Feature({ title, description }: { title: string, description: string }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="bg-card/80 backdrop-blur-sm border border-secondary/25 rounded-2xl p-6 shadow hover:shadow-lg hover:-translate-y-1 hover:border-secondary/45 transition-all duration-300">
        <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
