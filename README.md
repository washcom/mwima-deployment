Mwima Consulting
A modern, responsive web application for Mwima Consulting, providing holistic consulting solutions tailored to the unique challenges of development in Africa.

Overview
Mwima Consulting specializes in research, design strategy, facilitation, monitoring & evaluation, and capacity building. Our website showcases our expertise, case studies, and services through an interactive, user-friendly interface built with cutting-edge web technologies.

Features
Responsive Design: Optimized for desktop, tablet, and mobile devices
Interactive Animations: Smooth scroll-triggered animations using Framer Motion
Modern UI Components: Built with Radix UI and Tailwind CSS for accessibility and consistency
Dynamic Content: Pages for services, case studies, contact, and specialized content like Eco-read
Form Handling: Contact forms with validation using React Hook Form
Database Integration: PostgreSQL with Drizzle ORM for data management
SEO Optimized: Meta tags and structured content for better search visibility
🛠 Tech Stack
Frontend
React 18 - Component-based UI library
TypeScript - Type-safe JavaScript
Vite - Fast build tool and development server
Tailwind CSS - Utility-first CSS framework
Framer Motion - Animation library for smooth transitions
Radix UI - Accessible UI primitives
React Query - Data fetching and state management
Wouter - Lightweight routing
Backend
Node.js - JavaScript runtime
Express - Web framework
Drizzle ORM - TypeScript ORM for SQL databases
PostgreSQL - Relational database
Connect PG Simple - Session store for PostgreSQL
Development Tools
ESLint - Code linting
TypeScript Compiler - Type checking
Vite Plugin Meta Images - Dynamic meta image generation
Getting Started
Prerequisites
Node.js (v18 or higher)
PostgreSQL database
npm or yarn package manager
📱 SEO & Performance
SEO Features Implemented
Comprehensive Meta Tags: Title, description, keywords, author, robots directives
Open Graph & Twitter Cards: Optimized social media sharing with preview images
JSON-LD Structured Data: Organization and LocalBusiness schema for search engines
Mobile Optimization: Viewport configuration, touch icons, theme colors
robots.txt: Search engine crawling directives
sitemap.xml: Dynamic sitemap for all pages
Web Manifest: PWA support with app manifest
Canonical URLs: Prevents duplicate content issues
Mobile-First Design: Responsive and mobile-optimized layout
SEO Configuration Files
/client/public/robots.txt - Crawler directives and sitemap reference
/client/public/sitemap.xml - URL structure for search engines
/client/public/site.webmanifest - PWA manifest with app details
/client/index.html - Comprehensive meta tags and structured data
Performance Optimization
Vite for fast builds and development server
Code splitting for optimal bundle size
Image optimization through Vite plugin
Smooth animations with Framer Motion (60fps)
Lazy loading components and images
CSS-in-JS with Tailwind for efficient styling
Accessibility
WCAG 2.1 compliant components from Radix UI
Semantic HTML structure
Proper heading hierarchy
ARIA labels and descriptions
Keyboard navigation support
Screen reader friendly
Installation
Clone the repository

git clone https://github.com/your-username/mwima-consulting.git
cd mwima-consulting
Install dependencies

npm install
Set up the database

Create a PostgreSQL database
Configure your database connection in the environment variables
Run database migrations:
npm run db:push
Environment Configuration

Copy .env.example to .env
Fill in your database credentials and other required variables
Development
Start the development server

npm run dev
This will start both the client (on port 5000) and server in development mode.

Build for production

npm run build
npm start
📁 Project Structure
mwima-consulting/
├── client/                 # Frontend application
│   ├── index.html
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   ├── pages/          # Page components
│   │   └── main.tsx        # Application entry point
│   └── public/             # Static assets
├── server/                 # Backend application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── static.ts           # Static file serving
│   └── storage.ts          # Database utilities
├── script/                 # Build scripts
├── shared/                 # Shared types and schemas
├── drizzle.config.ts       # Database configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
Usage
Navigation
The website features several key pages:

Home: Introduction to Mwima Consulting and featured services
Services: Detailed overview of our consulting offerings
Case Studies: Showcase of past projects and successes
Eco-read: Specialized content on environmental research
Contact: Contact form and information
Customization
Modify content in the client/src/pages/ directory
Update styles using Tailwind CSS classes
Adjust animations in Framer Motion components
Configure database schemas in shared/schema.ts
Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
Development Guidelines
Use TypeScript for type safety
Follow the existing code style and component patterns
Test your changes thoroughly
Update documentation as needed
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Mwima Consulting

Website: www.mwimaconsulting.com
Email: info@mwimaconsulting.com
LinkedIn: Mwima Consulting
Built with for impactful development consulting in Africa.