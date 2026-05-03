# MWIMA Consulting

Marketing website for MWIMA Consulting, built as a Vite + React single-page application and deployed as a static site.

## Overview

This project presents MWIMA Consulting's services, case studies, and contact experience through a responsive frontend focused on development consulting work across Africa.

The app includes:

- A landing page with service highlights and calls to action
- A dedicated services page
- A case studies portfolio
- A contact page
- Detail pages for featured initiatives such as EcoPulse, ART Malawi, and the eFarm web app

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Wouter
- Radix UI
- TanStack Query
- Vercel for deployment

## Project Structure

```text
.
├── client/
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── attached_assets/
├── script/
├── package.json
├── vercel.json
└── vite.config.ts
```

## Routes

The app currently defines these frontend routes:

- `/`
- `/services`
- `/case-studies`
- `/contact`
- `/eco-read`
- `/art-malawi`
- `/efarm-web-app`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start the development server for the frontend app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run check
```

## Deployment

This project is configured for Vercel with SPA rewrites so client-side routes resolve correctly on refresh.

Current Vercel config:

- Build command: `npm run build`
- Static rewrite: all routes to `index.html`

## Notes

- The app source lives in `client/`, not the repository root.
- Static images are stored in `attached_assets/`.
- Path aliases are configured in `vite.config.ts`, including `@`, `@shared`, and `@assets`.

## Contact

- Website: `www.mwimaconsulting.com`
- Email: `info@mwimaconsulting.com`
