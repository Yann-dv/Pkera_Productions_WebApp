# Overview

This is Pkera Productions WebApp - a full-stack documentary producer portfolio website built with React and Express. The application showcases Perrine Keramphele's documentary work, allowing visitors to browse her portfolio, read testimonials, learn about her background, and contact her directly. The site features a modern, responsive design with smooth scrolling navigation and professional aesthetics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application using React with TypeScript for the client-side
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for the REST API server
- **Language**: TypeScript for type safety across the entire application
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for documentaries, testimonials, contacts, and producer information
- **Development**: Hot module replacement and development middleware integration

## Data Storage Solutions
- **Current**: In-memory storage using Maps for rapid prototyping and development
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema definitions
- **Schema**: Structured data models for documentaries, testimonials, contacts, producer info, and users
- **Migration**: Database schema versioning system prepared for production deployment

## Authentication and Authorization
- **Session Management**: Express sessions configured with PostgreSQL session store
- **User System**: User authentication schema prepared but not actively implemented
- **Security**: Basic security headers and error handling middleware

## External Dependencies
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React icons with additional React Icons for social media
- **Fonts**: Google Fonts integration (Inter, Playfair Display, Fira Code)
- **Development**: Replit-specific tooling for cloud development environment