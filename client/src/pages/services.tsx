import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  MoveRight,
} from "lucide-react";

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
      ]
    },
    {
      id: "research-analysis",
      title: "Research & Data Analysis",
      features: [
        "User Research", 
        "Surveys & Interviews", 
        "Data Insights"
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: "facilitation",
      title: "Facilitation & Co-creation",
      features: [
        "Stakeholder Workshops", 
        "Team Alignment", 
        "Ideation & Design Sprints"
      ]
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
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header - Further reduced spacing */}
      <div className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Main heading - Our Services */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 text-primary">
            Our <span className="text-secondary">Services</span>
          </h1>          
          
          {/* Description with minimal spacing */}
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-6">
           We build for scale and long term sustainability
          </p>
        </div>
      </div>

      {/* Services Grid - Minimal spacing */}
      <div className="container mx-auto px-4 py-4 md:py-6 flex-grow">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative scroll-mt-20"
            >
              <Card
                className="h-full rounded-3xl border border-secondary/25 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary/45 hover:shadow-xl"
              >
                <CardContent className="flex min-h-[260px] p-6">
                  <div className="flex min-w-0 flex-1 flex-col gap-5">
                    <div>
                      <h2 className="text-lg font-bold font-heading tracking-tight text-primary transition-colors duration-300 group-hover:text-foreground">
                        {service.title}
                      </h2>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-foreground/70 transition-colors duration-300 group-hover:text-foreground/90"
                        >
                          <CheckCircle className="mr-2.5 h-3.5 w-3.5 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />
                          <span className="leading-relaxed font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground">
                        <MoveRight className="h-4 w-4" />
                      </span>
                      <span>Read more</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Main heading - Our Methodology */}
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-primary mb-6">
              Our <span className="text-secondary">Methodology</span>
            </h2>
            
            {/* Subheading - How We Deliver Impact */}
            <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-8 text-muted-foreground/80">
              How We Deliver <span className="text-secondary">Impact</span>
            </h3>          
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <div className="bg-card/80 backdrop-blur-sm border border-secondary/25 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 hover:border-secondary/45 transition-all duration-500">
                  {/* Step indicator */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-lg font-bold text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-foreground transition-colors duration-300">
                    {item.title}
                  </h4>
                  
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
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-secondary/25 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            {/* Background elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />
            
            <div className="relative z-10">
              {/* Main heading - Let's Collaborate */}
              <h2 className="text-5xl md:text-6xl font-bold font-heading text-primary mb-6">
                Let's <span className="text-secondary">Collaborate</span>
              </h2>
              
              {/* Subheading - Ready to Create Impact? */}
              <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-8 text-muted-foreground/80">
                Ready to Create <span className="text-secondary">Impact</span>?
              </h3>
              
              <p className="text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
                Every project is unique. Let's discuss how we can tailor our expertise to meet your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ size: "lg" }), 
                    "bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  )}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  href="/case-studies" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }), 
                    "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8 py-6 text-lg hover:-translate-y-1 transition-all duration-300 group"
                  )}
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mwima Consulting. All rights reserved.
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
