import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "project-management",
      title: "Project & Program Management",
      features: [
        "Project Delivery", 
        "Resource Planning", 
        "Risk Mitigation", 
        "Proposal Development"
      ],
      color: "border-l-blue-500"
    },
    {
      id: "research-analysis",
      title: "Research & Data Analysis",
      features: [
        "User Research", 
        "Surveys & Interviews", 
        "Data Insights"
      ],
      color: "border-l-purple-500"
    },
    {
      id: "product-design",
      title: "Product & UX Design",
      features: [
        "UX/UI Design", 
        "Prototyping", 
        "Wireframing", 
        "Usability Testing", 
        "A/B Testing"
      ],
      color: "border-l-emerald-500"
    },
    {
      id: "design-strategy",
      title: "Service & Design Strategy",
      features: [
        "Journey Mapping", 
        "Process Optimization", 
        "Strategic Advisory", 
        "Design Workshops", 
        "Workflows Design"
      ],
      color: "border-l-amber-500"
    },
    {
      id: "monitoring-evaluation",
      title: "Monitoring, Evaluation & Impact",
      features: [
        "Baseline, Midline & Endline Evaluations", 
        "M&E Reporting", 
        "Data Analysis", 
        "Dashboards", 
        "Sustainability Assessment", 
        "Third Party Monitoring"
      ],
      color: "border-l-rose-500"
    },
    {
      id: "software-solutions",
      title: "Software & Technology Solutions",
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
      color: "border-l-indigo-500"
    },
    {
      id: "facilitation",
      title: "Facilitation & Co-creation",
      features: [
        "Stakeholder Workshops", 
        "Team Alignment", 
        "Ideation & Design Sprints"
      ],
      color: "border-l-violet-500"
    },
    {
      id: "emerging-tech",
      title: "Emerging Tech & Digital Health",
      features: [
        "AI & Predictive Analytics", 
        "Digital Health Platforms", 
        "Tech Advisory", 
        "Proof of Concepts", 
        "Compliance Support"
      ],
      color: "border-l-cyan-500"
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header */}
      <div className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-primary leading-tight">
            Core <span className="text-secondary">Capabilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto">
            Comprehensive expertise across the development lifecycle. Specialized solutions for measurable impact.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
            >
              <Card className={cn(
                "h-full border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                service.color,
                "border-l-4 hover:border-l-primary"
              )}>
                <CardHeader className="pb-4 pt-7 px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-primary font-heading group-hover:text-foreground transition-colors duration-300 tracking-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-7">
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="leading-relaxed font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-secondary mr-2" />
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              How We Deliver <span className="text-secondary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              A systematic approach ensuring sustainable outcomes through collaboration and iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding context needs and stakeholders." },
              { step: "02", title: "Design", desc: "Co-creating tailored methodologies and strategies." },
              { step: "03", title: "Implementation", desc: "Executing with precision and adaptive management." },
              { step: "04", title: "Learning", desc: "Analyzing results to inform future action." },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="group relative"
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  {/* Step indicator */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-xl font-bold text-white shadow-lg mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-foreground transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground/80 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 px-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border/50 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
            {/* Background elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                Let's Collaborate
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                Ready to Create <span className="text-secondary">Impact</span>?
              </h2>
              <p className="text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
                Every project is unique. Let's discuss how we can tailor our expertise to meet your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ size: "lg" }), 
                    "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-10 py-7 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  )}
                >
                  <span>Schedule a Consultation</span>
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  href="/case-studies" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }), 
                    "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-10 py-7 text-lg hover:-translate-y-1 transition-all duration-300 group"
                  )}
                >
                  <span>View Case Studies</span>
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 bg-background py-8">
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

