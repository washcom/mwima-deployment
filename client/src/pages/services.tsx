import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Services() {
  const services = [
    {
      id: "research",
      title: "Research & Analysis",
      description: "We conduct rigorous mixed-methods research to provide evidence-based insights. From baseline surveys to market assessments, our data informs critical decision-making.",
      features: ["Baseline & Endline Surveys", "Market Systems Analysis", "Policy Research", "Feasibility Studies"]
    },
    {
      id: "design",
      title: "Design Strategy",
      description: "Using Human-Centered Design (HCD) principles, we co-create solutions with communities and stakeholders to ensure interventions are relevant, usable, and sustainable.",
      features: ["Program Co-creation", "User Experience Research", "Prototyping & Testing", "Service Design"]
    },
    {
      id: "facilitation",
      title: "Facilitation",
      description: "Our expert facilitators manage complex multi-stakeholder dialogues, strategic planning workshops, and validation meetings to drive consensus and action.",
      features: ["Strategic Planning", "Stakeholder Dialogue", "Validation Workshops", "Team Retreats"]
    },
    {
      id: "me",
      title: "Monitoring & Evaluation",
      description: "We design robust M&E frameworks and conduct independent evaluations to measure impact, accountability, and learning throughout the project lifecycle.",
      features: ["M&E Framework Design", "Mid-term & Final Evaluations", "Impact Assessments", "Third-party Monitoring"]
    },
    {
      id: "capacity",
      title: "Capacity Building",
      description: "We strengthen institutions and individuals through tailored training programs, mentorship, and organizational development support.",
      features: ["Training of Trainers (ToT)", "Curriculum Development", "Organizational Assessment", "Mentorship Programs"]
    },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-background to-muted/5 py-20 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-primary">
            Holistic Consulting <span className="text-secondary">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tailored services to address the unique challenges of development in Africa through evidence-based strategies and sustainable impact.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20 md:py-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
            >
              {/* Top accent line that appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:via-primary group-hover:to-primary/50 transition-all duration-500 rounded-t-xl" />
              
              <Card className="h-full border-0 bg-card/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-card/80">
                <CardHeader className="pb-4 pt-8 px-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110">
                        <div className="text-2xl font-bold text-primary">•</div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-primary font-heading group-hover:text-foreground transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <p className="text-muted-foreground mb-7 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-5 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-sm font-semibold text-primary inline-flex items-center hover:text-primary/80 transition-colors duration-300"
                    >
                      Learn more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
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
              Our engagement model is collaborative, iterative, and results-oriented, ensuring sustainable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding context, needs, and stakeholders." },
              { step: "02", title: "Design", desc: "Co-creating tailored methodologies and strategies." },
              { step: "03", title: "Implementation", desc: "Executing with precision and adaptive management." },
              { step: "04", title: "Learning", desc: "Analyzing results to inform future action." },
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="group relative bg-card/50 border-0 shadow-md rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                href="/services" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }), 
                  "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8 hover:-translate-y-1 transition-all duration-300"
                )}
              >
                View All Services
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