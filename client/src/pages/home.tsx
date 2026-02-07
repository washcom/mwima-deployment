import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Target, BarChart3, PenTool, Users, Eye, Cpu, MessageSquare, HeartPulse } from "lucide-react";
import home from "@assets/stock_images/homepage.png";
import ecopulseimage from "@assets/stock_images/capacity.jpg";
import mitigating from "@assets/stock_images/strategy.png";
import meImage from "@assets/stock_images/data_analysis_monito_5040bc45.jpg";
import software_engineering from "@assets/stock_images/software_engineering.jpg";

export default function Home() {
  const services = [
    {
      title: "Project & Program Management",
      description: "We lead strategic development and delivery of projects.",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Research & Data Analysis",
      description: "We uncover insights through rigorous research and data analysis to inform decisions and effective interventions.",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Product & UX Design",
      description: "We craft user-centered products and seamless experiences that solve real-world problems.",
      icon: PenTool,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Service & Design Strategy",
      description: "We design systems and strategies that align people processes and technology for impact.",
      icon: Users,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Monitoring Evaluation & Impact",
      description: "We measure outcomes at every stage—baseline midline endline—to drive learning and sustainable impact.",
      icon: Eye,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      title: "Software & Technology Solutions",
      description: "We build reliable scalable and secure digital solutions tailored to context specific needs.",
      icon: Cpu,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Facilitation & Co-creation",
      description: "We engage stakeholders through workshops and co-creation sessions to generate actionable solutions.",
      icon: MessageSquare,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      title: "Emerging Tech & Digital Health",
      description: "We leverage AI and emerging technologies to deliver innovative evidence-based digital health solutions.",
      icon: HeartPulse,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <div className="flex flex-col bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/80 via-primary/70 to-destructive/60 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/25" />
        <div className="container mx-auto px-6 py-20 relative z-10 text-center lg:text-left max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-bottom-5 duration-700 fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                Evidence-Based <br/>
                <span className="text-secondary">Strategic Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
                We partner with organizations to design monitor and evaluate development programs that create lasting change across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-14 px-10 text-lg")}
                >
                  Partner With Us
                </Link>
                <Link 
                  href="/services"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-input text-foreground hover:bg-primary/10 font-semibold rounded-full h-14 px-10 text-lg")}
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-right-5 duration-700 fade-in delay-200">
              <img 
                src={home} 
                alt="Consulting Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Updated with new cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">           
            <h3 className="text-4xl font-bold mb-6 text-primary">Our Expertise</h3>
            <p className="text-muted-foreground text-lg">Our multidisciplinary team brings deep technical expertise and contextual understanding to every engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                bgColor={service.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Local Insights Global Standards</h3>
            <p className="text-muted-foreground text-lg">Delivering solutions with local insight while adhering to international best practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature title="Regional Expertise" description="Deep understanding of the unique challenges and opportunities the region presents" />
            <Feature title="Proven Methodology" description="Scientifically-grounded approaches adapted for practical application." />
            <Feature title="User-Centered Approach" description="Grounding solutions in real-world realities and needs." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to maximize your impact?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how our expertise can support your organization's goals and sustainable development objectives.
          </p>
          <Link 
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-14 px-12 text-lg shadow-lg hover:shadow-xl transition-all")}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon, color, bgColor }: { 
  title: string, 
  description: string, 
  icon: any,
  color: string,
  bgColor: string
}) {
  return (
    <Card className="overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
        </div>
        
        <h4 className="text-xl font-bold text-primary mb-3 line-clamp-2">{title}</h4>
        <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{description}</p>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <Link 
            href="/services" 
            className="text-sm font-semibold inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Learn more
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function Feature({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>
      <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}