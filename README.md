# Pkera Productions Web Application

A modern full-stack web application for showcasing documentary productions, managing testimonials, and providing contact functionality for Pkera_Productions.

## 🎬 Project Overview

This web application serves as a digital portfolio and business platform for Pkera Productions, a documentary production company. The platform allows visitors to:

- Browse and discover documentaries with detailed information
- View testimonials from clients and collaborators
- Contact the production team through integrated forms
- Learn about the producer's background and experience
- Access trailer and full documentary content

## 🏗️ Technical Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Neon serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx watch

### Database Schema
The application uses the following main entities:
- **Documentaries**: Core content with metadata, URLs, and categorization
- **Testimonials**: Client feedback with ratings and company information
- **Contacts**: Contact form submissions with timestamps
- **Producer Info**: Producer profile and experience details
- **Users**: Authentication system for admin access

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configs
│   │   └── App.tsx         # Main application component
│   └── public/             # Static assets
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database connection and queries
│   └── vite.ts             # Vite integration for development
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema and Zod validations
└── migrations/             # Database migration files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database (or Neon serverless account)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Pkera_Productions_WebApp.git
   cd Pkera_Productions_WebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Push schema to database
   npm run db:push
   ```

5. **Development Server**
   ```bash
   # Start development server with hot reload
   npm run dev
   ```
   The application will be available at `http://localhost:5000`

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🛠️ Development Workflow

### Adding New Features
1. Define database schema changes in `shared/schema.ts`
2. Run `npm run db:push` to update the database
3. Create API routes in `server/routes.ts`
4. Implement frontend components in `client/src/`
5. Add routing in `client/src/App.tsx` if needed

### Database Operations
- Schema definitions are in `shared/schema.ts`
- Database queries are handled in `server/storage.ts`
- Use Drizzle ORM for type-safe database operations
- Zod schemas provide runtime validation

## 🌐 Deployment

This application is designed to be deployed on modern hosting platforms:

### Recommended Platforms
- **Vercel**: Excellent for the frontend with serverless functions
- **Railway**: Great for full-stack applications with database
- **Render**: Versatile platform supporting both frontend and backend
- **Fly.io**: Global deployment with Docker support

### Environment Variables for Production
```env
DATABASE_URL=your_production_database_url
NODE_ENV=production
```

## 🔧 Technology Stack

### Core Technologies
- **TypeScript** - Type safety across the entire stack
- **React** - Modern UI library with hooks
- **Express.js** - Minimal and flexible Node.js framework
- **PostgreSQL** - Robust relational database
- **Drizzle ORM** - Type-safe database toolkit

### UI/UX
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Wouter** - Minimalist routing for React

### Developer Experience
- **Vite** - Fast build tool and dev server
- **ESBuild** - Fast JavaScript bundler
- **Hot Module Replacement** - Instant feedback during development

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please contact the development team or open an issue on GitHub.

---

**Pkera Productions** - Bringing stories to life through documentary filmmaking.