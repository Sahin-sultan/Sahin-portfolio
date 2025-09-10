# Overview

This is a modern full-stack web application featuring a personal portfolio website for "Alex Johnson - Designer & Developer". The project uses a Node.js/Express backend with a React frontend, built with TypeScript and styled using Tailwind CSS with shadcn/ui components. The application is structured as a monorepo with shared code between client and server, and includes database integration using Drizzle ORM with PostgreSQL support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui component library
- **Animation**: Framer Motion for smooth animations and scroll-triggered effects
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reloading with custom Vite integration for seamless development experience
- **Storage**: Dual storage implementation with in-memory storage for development and PostgreSQL for production

## Component System
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **Design System**: Custom Tailwind configuration with CSS variables for consistent theming
- **Component Structure**: Modular React components with clear separation of concerns (Navigation, Hero, About, Projects, Contact, Footer)

## Database Design
- **Schema**: Simple user management system with username/password authentication structure
- **Migration**: Drizzle Kit for database schema management and migrations
- **Validation**: Zod integration for runtime type validation and schema enforcement

## Development Environment
- **Monorepo Structure**: Shared code between client and server with TypeScript path mapping
- **Hot Reloading**: Custom Vite middleware integration for server-side development
- **Environment**: Replit-optimized with development banner and error handling
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled

## External Dependencies

- **Database**: PostgreSQL via Neon Database serverless connection
- **UI Components**: Radix UI primitives for accessible component foundations
- **Animation**: Framer Motion for complex animations and gesture handling
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography
- **Development**: Replit-specific plugins for enhanced development experience
- **Build Tools**: ESBuild for server bundling and Vite for client bundling