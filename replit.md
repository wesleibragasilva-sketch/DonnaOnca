# Overview

Donna Onça is a Brazilian confectionery business website built as a full-stack web application. The site showcases a "Confeitaria Afetiva" (Affectionate Confectionery) specializing in personalized sweets, particularly Leite Ninho paste and custom butter cookies. The application serves as both a marketing website and a contact management system for the business, featuring product galleries, customer testimonials, and an integrated contact form for order inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Forms**: React Hook Form with Zod schema validation
- **Mobile Responsiveness**: Custom mobile detection hook and responsive design patterns

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite middleware in development
- **API Design**: RESTful endpoints with structured error handling and logging
- **Data Storage**: In-memory storage implementation with interface abstraction for future database integration
- **Validation**: Zod schemas shared between client and server

## Data Storage Solutions
- **Current Implementation**: Memory-based storage using JavaScript Maps for rapid development
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL configured but not actively used

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage (prepared for future use)
- **Security**: Basic Express middleware for request parsing and CORS handling

## External Dependencies
- **Database**: Neon Database (PostgreSQL) - configured but using in-memory storage
- **Build Tools**: Vite for frontend bundling, esbuild for backend bundling
- **Deployment**: Prepared for production with build scripts and static file serving
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Integration**: Google Fonts (Dancing Script, Inter, etc.) for typography
- **Icons**: Font Awesome for consistent iconography throughout the application