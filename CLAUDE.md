# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gato Chateau is a static website for a cat sitting and boarding business in Miami, Florida. It consists of HTML, CSS, and JavaScript with no build system or framework dependencies.

## Business Information

**Business Details:**
- Business Name: Gato Chateau
- Founded: 2017 (7+ years of experience)
- Specialization: Cat sitting and boarding (small dogs also available upon request)
- Address: 6551 SW 32nd St, Miami, FL 33155 (Coral Terrace)
- Phone: (305) 403-9487
- Email: gatochateaumiami@gmail.com
- Instagram: @gato_chateau

**Service Area:**
Within 10 miles of 33155, including: Coral Terrace, West Miami, South Miami, Coral Gables, Westchester, and surrounding neighborhoods. Drop-off also available at our location.

## Brand Voice & Messaging

**Tagline:** "At Gato Chateau, every cat is royalty!"

**Tone:** Warm, playful, professional, reassuring

**Key Phrases:**
- "purr-fect haven"
- "empathy and patience"
- "secret sixth sense to soothe whisker-twitchy kitties"
- "cherished cats, worry-free getaways"

**Focus:** Making anxious cats comfortable, extensive photo updates, personal attention

## Contact Approach

- Primary: Contact form -> email to gatochateaumiami@gmail.com
- Follow-up: We call to schedule a meet & greet
- Pricing: "Contact for personalized quote" (display as $XX placeholder)
- No direct booking system needed yet

## Future Additions (Placeholders)

- Certifications section (Pet First Aid, Fear Free, etc.)
- Client testimonials from Rover/Meowtel
- Instagram feed integration

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
