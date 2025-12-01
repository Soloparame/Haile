# DevCore Website

A fully responsive Next.js website built with modern technologies and best practices.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **TypeScript** for type safety
- Fully responsive design
- Dark theme with green accents
- Modern UI/UX

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── TechStackSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── constants/             # Data constants
│   └── data.ts
└── public/                # Static assets
```

## Pages

- **Home** (`/`) - Landing page with all sections
- **About** (`/about`) - About us page
- **Services** (`/services`) - Services and tech stack
- **Portfolio** (`/portfolio`) - Portfolio showcase
- **Contact** (`/contact`) - Contact form and FAQ

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Build

To create a production build:

```bash
npm run build
npm start
```

## License

This project is private and proprietary.

