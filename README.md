# Probst Excavating Website

A modern, SEO-optimized website built with Astro, React, and Tailwind CSS for Probst Excavating Services - a family-owned excavation company serving Aurora, IN and the Tri-State area.

## 🚀 Tech Stack

- **Astro 5** - Static site generator optimized for performance and SEO
- **React 19** - Interactive UI components
- **Tailwind CSS 4** - Modern utility-first styling
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Main layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   └── blog/
│   │       └── [slug].astro       # Dynamic blog post pages
│   ├── content/
│   │   ├── config.ts              # Content collections schema
│   │   └── blog/                  # Blog posts (Markdown)
│   ├── components/                # React components
│   └── styles/
│       └── global.css             # Global styles + Tailwind
├── public/                        # Static assets
└── astro.config.mjs              # Astro configuration
```

## 🏗️ Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321`

## 📝 Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'SEO-friendly description'
pubDate: 2026-01-14
heroImage: '/blog/image.jpg'
tags: ['excavation', 'aurora indiana']
location: 'Aurora, IN'
service: 'Land Clearing'
---

Your content here...
```

## 🎯 Local SEO Features

- **Schema.org Markup** - Local Business structured data
- **Sitemap Generation** - Automatic XML sitemap
- **Location-Optimized Content** - Blog posts with location and service fields
- **Meta Tags** - Comprehensive SEO meta tags on every page
- **Social Sharing** - Open Graph and Twitter Card support

## 🌐 Service Areas

- Aurora, IN (Primary)
- Lawrenceburg, IN
- Dearborn County, IN
- Tri-State Area (IN, OH, KY)

## 📦 Key Services Featured

- Excavation (Residential & Commercial)
- Land Clearing
- Sewer Line Repair (Trenchless Technology)
- Water Lines
- Storm Drainage
- Site Preparation
- Hydroseeding
- Trucking and Hauling

## 🔗 External Links

- Current Website: https://probstexcavating.com/
- Facebook: https://www.facebook.com/probstexcavating/

## 📄 License

© 2026 Probst Excavating Services. All rights reserved.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
