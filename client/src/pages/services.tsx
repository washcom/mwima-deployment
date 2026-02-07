import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Target, 
  BarChart3, 
  PenTool, 
  Users, 
  Eye, 
  Cpu, 
  MessageSquare, 
  HeartPulse,
  Check
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "project-management",
      title: "Project & Program Management",
      description: "We lead strategic development and delivery of projects keeping initiatives on time on budget and on target.",
      features: [
        "Project Delivery", 
        "Resource Planning", 
        "Risk Mitigation", 
        "Proposal Development"
      ],
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: "research-analysis",
      title: "Research & Data Analysis",
      description: "We uncover insights through rigorous research and data analysis to inform smarter decisions.",
      features: [
        "User Research", 
        "Surveys & Interviews", 
        "Data Insights"
      ],
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "product-design",
      title: "Product & UX Design",
      description: "We craft user-centered products and seamless experiences that solve real-world problems.",
      features: [
        "UX/UI Design", 
        "Prototyping", 
        "Wireframing", 
        "Usability Testing", 
        "A/B Testing"
      ],
      icon: PenTool,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      id: "design-strategy",
      title: "Service & Design Strategy",
      description: "We design systems and strategies that align people processes and technology for impact.",
      features: [
        "Journey Mapping", 
        "Process Optimization", 
        "Strategic Advisory", 
        "Design Workshops", 
        "Workflows Design"
      ],
      icon: Users,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      id: "monitoring-evaluation",
      title: "Monitoring, Evaluation & Impact",
      description: "We measure outcomes at every stage—baseline midline endline—to drive learning and sustainable impact.",
      features: [
        "Baseline, Midline & Endline Evaluations", 
        "M&E Reporting", 
        "Data Analysis", 
        "Dashboards", 
        "Sustainability Assessment", 
        "Third Party Monitoring"
      ],
      icon: Eye,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      id: "software-solutions",
      title: "Software & Technology Solutions",
      description: "We build reliable scalable and secure digital solutions tailored to your needs.",
      features: [
        "Software Development", 
        "Deployment", 
        "Cloud & IT Architecture", 
        "Integrations", 
        "Database Design & Management", 
        "Quality Assurance", 
        "Web Development", 
        "System Support", 
        "Technical Documentation"
      ],
      icon: Cpu,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: "facilitation",
      title: "Facilitation & Co-creation",
      description: "We engage stakeholders through workshops and co-creation sessions to generate actionable solutions.",
      features: [
        "Stakeholder Workshops", 
        "Team Alignment", 
        "Ideation & Design Sprints"
      ],
      icon: MessageSquare,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      id: "emerging-tech",
      title: "Emerging Tech & Digital Health",
      description: "We leverage AI and emerging technologies to deliver innovative evidence-based digital health solutions.",
      features: [
        "AI & Predictive Analytics", 
        "Digital Health Platforms", 
        "Tech Advisory", 
        "Proof of Concepts", 
        "Compliance Support"
      ],
      icon: HeartPulse,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-background to-muted/5 py-20 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-primary">
            Comprehensive <span className="text-secondary">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            End-to-end solutions for development challenges. From strategy to implementation, we deliver measurable impact through proven methodologies.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 md:py-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative"
              >
                <Card className="h-full border-0 bg-card/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group-hover:bg-card/80">
                  {/* Top accent line that appears on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:via-primary group-hover:to-primary/50 transition-all duration-500 rounded-t-xl" />
                  
                  <CardHeader className="pb-4 pt-8 px-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                        </div>
                        <CardTitle className="text-xl font-bold text-primary font-heading group-hover:text-foreground transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                        >
                          <Check className="w-3.5 h-3.5 text-primary mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-5 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                      <Link 
                        href={`/services/${service.id}`}
                        className="text-sm font-semibold text-primary inline-flex items-center hover:text-primary/80 transition-colors duration-300"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-b from-muted/10 to-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              How We Deliver Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Our engagement model is collaborative iterative and results-oriented ensuring sustainable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding context needs and stakeholders." },
              { step: "02", title: "Design", desc: "Co-creating tailored methodologies and strategies." },
              { step: "03", title: "Implementation", desc: "Executing with precision and adaptive management." },
              { step: "04", title: "Learning", desc: "Analyzing results to inform future action." },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="group relative bg-card/50 border-0 shadow-md rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step indicator */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                
                {/* Top accent on hover */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-t-xl group-hover:w-full transition-all duration-500" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
                  <div className="text-2xl font-bold text-primary">{item.step[1]}</div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-foreground transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="bg-card/50 border-0 shadow-xl rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
          
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
              Let's Collaborate
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary">
              Need a Tailored Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              We understand that every project is unique. Contact us to discuss your specific requirements and explore customized consulting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                )}
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/case-studies" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }), 
                  "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8 hover:-translate-y-1 transition-all duration-300"
                )}
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} African Development Consulting. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Developed and maintained by <span className="text-primary font-medium">Mbeevie</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}