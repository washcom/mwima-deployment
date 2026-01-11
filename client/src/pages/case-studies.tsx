import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import meImage from "@assets/stock_images/case-2.webp";
import ecopulseimage from "@assets/stock_images/eco-read.png";
import farm from "@assets/stock_images/e-farm.jpg";

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
};

const projects: Project[] = [
  {
    id: 2,
    title: "EcoPulse: A Civic-Tech Ecosystem for Air Quality Action",
    category: "Research",
    mission:
      "To empower communities with real-time air-quality data, AI-driven health guidance, and a public accountability system...",
    progress: "Phase 1 activities ongoing",
    stats: "Phase 1 active",
    location: "Urban Kenya",
    date: "Ongoing (2025)",
    image: ecopulseimage,
    route: "/eco-read",
  },
  {
    id: 3,
    title: "Using Digital Health to Improve HIV Care Retention",
    category: "Research",
    description:
      "Tags: HIV Care, Digital Health, UX Research, Usability Testing, Prototyping, Patient Engagement, Predictive AI, Targeting, Design Research, Data-Driven Care, Equity, Innovation",
    stats: "3,000+ youth reached",
    location: "Malawi",
    date: "2023",
    image: meImage,
    route: "/art-malawi",
  },
  {
    id: 4,
    title: "Health Worker Digital Tool Usability Study",
    category: "Research",
    description:
      "Tags: Predictive AI, Targeting, Design Research, Usability Testing, Data-Driven Care, Equity, Innovation",
    stats: "400+ health workers engaged",
    location: "East Africa",
    date: "2024",
    image: meImage,
    route: "/health-worker-usability",
  },
  {
    id: 5,
    title: "E-farm",
    category: "Research",
    description:
      "Tags: Agricultural Marketplace, Buyers, Sellers, Farmers, Real-Time Listings, Inventory Management, Secure Payments, Logistics Coordination, Data-Driven Insights, User-Friendly Interface, Community Engagement, Sustainable Farming",
    stats: "Connecting 1000+ farmers and buyers across East Africa, facilitating 5000+ transactions",
    location: "Kenya",
    date: "2025",
    image: farm,
    route: "/efarm-web-app",
  },
];

const pageFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const gridVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.3 } },
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

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="bg-background min-h-screen pb-20"
    >
      {/* Header */}
      <div className="py-20 mb-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Explore our portfolio of projects driving sustainable development across the continent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "outline"}
              onClick={() => setActiveFilter(cat)}
              className="rounded-full px-6"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl overflow-hidden shadow-lg border"
              >
                {/* Image */}
                <div className="relative h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-5">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex text-sm text-muted-foreground gap-4 mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  {project.description && (
                    <p className="text-muted-foreground mb-6 line-clamp-4">
                      {project.description}
                    </p>
                  )}

                  {/* CTA using Link + Button properly */}
                  <Link href={project.route}>
                    <Button asChild className="w-full justify-between">
                      <a>
                        Read Case Study
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
