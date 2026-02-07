import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Calendar, ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ecopulseimage from '../../../attached_assets/stock_images/urban.jpeg';
import farm from '../../../attached_assets/stock_images/software_engineering.jpg';
import meImage from '../../../attached_assets/stock_images/hiv.jpeg';
type Category =
  | "All"
  | "Research"
  | "M&E"
  | "Capacity Building"
  | "Design Strategy";

type Project = {
  id: number;
  title: string;
  category: Category;
  description?: string;
  mission?: string;
  progress?: string;
  stats: string;
  location: string;
  date: string;
  image: string;
  route: string;
  impact?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
};

const projects: Project[] = [
  {
    id: 2,
    title: "EcoPulse: Civic-Tech Ecosystem for Air Quality Action",
    category: "Research",
    mission: "Empowering communities with real-time air-quality data, AI-driven health guidance, and public accountability systems",
    progress: "Phase 1 Implementation",
    stats: "Active Development",
    location: "Urban Kenya",
    date: "2024 - Present",
    image: ecopulseimage,
    route: "/eco-read",
    impact: [
      "Real-time air quality monitoring",
      "Community-led advocacy platform",
      "AI-powered health recommendations"
    ],
    metrics: [
      { value: "15+", label: "Monitoring Sites" },
      { value: "10K+", label: "Community Members" }
    ]
  },
  {
    id: 3,
    title: "Digital Health for HIV Care Retention",
    category: "Research",
    description: "Leveraging UX research, usability testing, and predictive AI to improve patient engagement and care outcomes in HIV treatment programs",
    stats: "3,000+ Youth Reached",
    location: "Malawi",
    date: "2023",
    image: meImage,
    route: "/art-malawi",
    impact: [
      "Improved treatment adherence",
      "Enhanced patient engagement",
      "Data-driven care optimization"
    ],
    metrics: [
      { value: "3K+", label: "Youth Reached" },
      { value: "45%", label: "Engagement Increase" }
    ]
  },
  {
    id: 4,
    title: "Health Worker Digital Tool Usability Study",
    category: "Research",
    description: "Comprehensive usability testing and design research to optimize digital tools for healthcare providers across East Africa",
    stats: "400+ Health Workers",
    location: "East Africa",
    date: "2024",
    image: meImage,
    route: "/health-worker-usability",
    impact: [
      "Improved tool adoption rates",
      "Enhanced user experience",
      "Streamlined clinical workflows"
    ],
    metrics: [
      { value: "400+", label: "Health Workers" },
      { value: "85%", label: "Satisfaction Rate" }
    ]
  },
  {
    id: 5,
    title: "E-farm Digital Agricultural Marketplace",
    category: "Research",
    description: "Connecting farmers and buyers across East Africa through a comprehensive digital platform for agricultural trade and logistics",
    stats: "5,000+ Transactions",
    location: "Kenya",
    date: "2024 - Present",
    image: farm,
    route: "/efarm-web-app",
    impact: [
      "Increased farmer incomes",
      "Market access expansion",
      "Supply chain optimization"
    ],
    metrics: [
      { value: "1K+", label: "Active Farmers" },
      { value: "5K+", label: "Transactions" }
    ]
  },
];

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const gridVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
};

const filterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Research",
    "M&E",
    "Capacity Building",
    "Design Strategy",
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen"
    >
      {/* Enhanced Header */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b border-border">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Target className="w-4 h-4" />
              Case Studies
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary leading-tight">
              Impact <span className="text-secondary">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Explore our evidence-based projects driving sustainable development and innovation across Africa.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                {projects.length} Impact Projects
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                15,000+ Beneficiaries
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                4+ Countries
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Enhanced Filters */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 mb-16 justify-center"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  activeFilter === cat 
                    ? "shadow-lg shadow-primary/20" 
                    : "hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Counter */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Showing <span className="font-bold text-primary">{filteredProjects.length}</span> of {projects.length} projects
          </p>
        </div>

        {/* Enhanced Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}                      
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <Badge className="bg-primary/90 text-white border-0 px-4 py-1.5 font-medium">
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* Progress Indicator */}
                    {project.progress && (
                      <div className="absolute top-5 right-5">
                        <div className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
                          {project.progress}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-foreground transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description/Mission */}
                    <p className="text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {project.mission || project.description}
                    </p>

                    {/* Impact Highlights */}
                    {project.impact && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-2">Key Impact Areas:</h4>
                        <ul className="space-y-1">
                          {project.impact.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 rounded-lg bg-primary/5">
                            <div className="text-xl font-bold text-primary mb-1">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="p-6 pt-0 border-t border-border/50">
                    <Link href={project.route}>
                      <Button className="w-full justify-between group/btn bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl py-6">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              We're currently working on new projects in this category. Check back soon or explore other categories.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter("All")}
              className="rounded-full"
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
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
    </motion.div>
  );
}