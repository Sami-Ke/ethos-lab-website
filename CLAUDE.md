# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for Ethos Lab (無限進步・勇於創新), a Taiwan-based AI digital transformation company. The site showcases their services in intelligent process automation and decision data visualization, helping businesses bridge data silos and optimize operations.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server  
- `pnpm lint` - Run Next.js linting

### Package Management
This project uses **pnpm** as the package manager (evidenced by pnpm-lock.yaml). Always use `pnpm` instead of npm or yarn for consistency.

## Architecture & Technology Stack

### Framework & Core Libraries
- **Next.js 14.2.16** with App Router architecture
- **React 18** with TypeScript
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** component library (configured in components.json)

### Key Dependencies
- **UI Components**: Extensive Radix UI primitives (@radix-ui/*)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Lottie Web for complex animations
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with tailwindcss-animate

### Project Structure

#### App Router Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage with animated sections
  - `layout.tsx` - Root layout with Inter font and MouseMoveEffect
  - `consultation/page.tsx` - Consultation booking page
  - `team/page.tsx` - Team introduction page

#### Component Organization
- `components/` - Main custom components (business logic)
- `components/ui/` - shadcn/ui component library (reusable UI primitives)
- `app/components/` - Legacy component folder (consider migrating to /components)

#### Animation System Architecture
The site features a sophisticated multi-layer animation system:

1. **Background Layer (z-0)**: `LetterGlitch` component creates animated character matrix
   - Canvas-based rendering with configurable colors, speed, and vignettes
   - Smooth color transitions and character morphing
   - Responsive grid system that adapts to viewport

2. **Interactive Layer (z-30)**: `MouseMoveEffect` creates cursor-following radial gradient
   - Real-time mouse tracking with radial gradient effects
   - Blue glow that follows cursor movement

3. **Content Layer (z-10)**: All actual page content and components
   - Lottie animations for hero sections
   - Component-based UI with shadcn/ui primitives

#### Form System Architecture
- **ConsultationForm**: Complex multi-step form with local state management
  - Industry-specific dropdowns (manufacturing, retail, logistics, etc.)
  - Budget ranges from 50k to 500k+ TWD
  - Timeline selection and preferred consultation times
  - Form validation with required fields and terms agreement
  - Simulated submission with loading states and confirmation screens

### Design System
- **Color scheme**: Dark mode by default with blue (#3b82f6) primary and purple (#8b5cf6) accent
- **Typography**: Inter font family
- **Spacing**: Tailwind container with 2rem padding, max-width 1400px for 2xl screens
- **Border radius**: CSS custom properties for consistent rounded corners

### Configuration Details
- **TypeScript**: Configured with @/ path alias pointing to project root
- **Tailwind**: Custom color variables, animation keyframes, container settings
- **Next.js config**: ESLint and TypeScript errors ignored during builds, unoptimized images
- **shadcn/ui**: Default style with CSS variables, Lucide icons, RSC enabled

### Internationalization
The site content is primarily in Traditional Chinese, with some English elements. The main brand tagline is "無限進步・勇於創新" (Unlimited Progress, Courage to Innovate).

## Development Guidelines

### Component Patterns
- Use the `cn()` utility from `@/lib/utils` for combining Tailwind classes
- Follow the shadcn/ui pattern for component composition
- Leverage Radix UI primitives for accessibility
- Use proper TypeScript typing with React.ComponentProps patterns

### Animation Development
- **Lottie animations**: External JSON files loaded from lottie.host
- **Canvas animations**: Use refs for performance-critical animations
- **CSS animations**: Prefer Tailwind's animation utilities for simple transitions
- **Layer management**: Follow the established z-index hierarchy (background z-0, content z-10, interactive z-30)

### Form Development
- Use controlled components with local state for complex forms
- Implement proper loading states and validation feedback
- Follow the established pattern in ConsultationForm for multi-section forms
- Use shadcn/ui form components (Select, Input, Textarea, Checkbox) consistently

### Styling Approach
- Tailwind-first approach with design system variables
- Dark mode implementation using CSS variables
- Responsive design with container queries
- Animation using tailwindcss-animate and Lottie

### File Organization
- Business components in `/components`
- UI primitives in `/components/ui` (managed by shadcn/ui CLI)
- Utilities in `/lib`
- Custom hooks in `/hooks`
- Static assets in `/public`

### Next.js Specific
- App Router file-based routing
- Server and Client Components properly separated (use "use client" for interactive components)
- Image optimization disabled (unoptimized: true)
- Metadata API for SEO optimization

## Common Issues

### Build & Development
- **Build errors**: TypeScript and ESLint errors are ignored during builds (ignoreBuildErrors: true)
- **Image optimization**: Disabled in next.config.mjs, may need manual optimization
- **Animation performance**: Canvas-based animations require proper cleanup in useEffect

### Animation Troubleshooting
- **Lottie animations**: External JSON files loaded from lottie.host, ensure network connectivity
- **Canvas rendering**: Use devicePixelRatio for sharp rendering on high-DPI displays
- **Memory leaks**: Always cleanup animation frames and event listeners in useEffect return functions

### Form Handling
- **State management**: Complex forms use local state rather than external libraries
- **Validation**: Client-side validation only, no backend integration currently
- **Submission**: Forms use simulated submission (setTimeout), replace with actual API calls when backend is ready