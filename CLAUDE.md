# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gato Chateau is a static website for a cat sitting and boarding business in Miami, Florida. It consists of HTML, CSS, and JavaScript with no build system or framework dependencies.

## Architecture

**Pages:**
- `index.html` - Homepage with hero, features, services overview, testimonials, CTA
- `services.html` - Detailed service offerings and pricing
- `about.html` - Company story, values, certifications, service areas
- `gallery.html` - Photo gallery of cats
- `contact.html` - Contact form and business information

**Styles:**
- `styles.css` - Single stylesheet with CSS custom properties for theming
- Uses CSS variables defined in `:root` (see Branding Guidelines below)
- Mobile-first responsive design with breakpoints at 768px and 480px

**JavaScript:**
- `script.js` - Mobile navigation toggle and smooth scrolling
- `contact.js` - Contact form handling with client-side validation (no backend integration)

## Development

Open HTML files directly in a browser. No build step or local server required.

## Key Patterns

- BEM-like class naming (e.g., `.hero-content`, `.nav-menu`, `.btn-primary`)
- Consistent section structure: `.container` wrapper with semantic section classes
- Shadow system using CSS variables (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`)
- Form validation happens client-side; backend submission code is commented out in `contact.js`

## Branding Guidelines

**Color Palette:**
- Primary: `#005a5a` (deep teal)
- Accent: `#FF9B7F` (warm peach-coral)
- Background: `#F8F9FA` (light gray)
- Text: `#2C3E50` (dark blue-gray)
- White: `#FFFFFF`

**Brand Personality:**
- Warm and homey, fun and playful
- Emphasizes personal touch and attention to detail
- Highlights frequent photo updates for pet parents
- Target audience: Travelers seeking trustworthy cat care
