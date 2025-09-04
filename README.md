# Pkera Productions Web Application

A modern static web application for showcasing documentary productions, displaying testimonials, and providing contact functionality for Pkera_Productions. **Now optimized for GitHub Pages deployment!**

## 🎬 Project Overview

This web application serves as a digital portfolio and business platform for Pkera Productions, a documentary production company. The platform allows visitors to:

- Browse and discover documentaries with detailed information
- View testimonials from clients and collaborators
- Contact the production team through integrated forms
- Learn about the producer's background and experience
- Access trailer and full documentary content

## 🏗️ Technical Architecture

### Frontend (Static Deployment)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router) with GitHub Pages SPA support
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: TanStack Query (React Query) for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with GitHub Pages optimization
- **Data Source**: Static JSON files (no backend required)

### Data Management
- **Static Data**: JSON files served from `/public/data/`
  - `documentaries.json` - Documentary portfolio data
  - `testimonials.json` - Client testimonials and reviews
  - `producer.json` - Producer profile and experience
- **Contact Form**: Demo implementation (ready for EmailJS/Formspree integration)
- **Deployment**: Automated GitHub Actions workflow

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configs
│   │   └── App.tsx         # Main application component
│   ├── public/
│   │   ├── data/           # Static JSON data files
│   │   │   ├── documentaries.json
│   │   │   ├── testimonials.json
│   │   │   └── producer.json
│   │   ├── images/         # Static image assets
│   │   └── 404.html        # GitHub Pages SPA routing support
│   ├── index.html          # Main HTML template with SPA routing
│   └── vite.config.ts      # Vite configuration for GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── shared/                 # Shared TypeScript types and schemas
└── package.json            # Dependencies and deployment scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Git
- GitHub account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Pkera_Productions_WebApp.git
   cd Pkera_Productions_WebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Preview production build locally**
   ```bash
   npm run build:static
   npm run preview
   ```

### GitHub Pages Deployment

#### Automatic Deployment (Recommended)
1. **Fork or clone this repository to your GitHub account**
2. **Enable GitHub Pages in repository settings**
   - Go to Settings → Pages
   - Source: GitHub Actions
3. **Push changes to main branch**
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at `https://YOUR_USERNAME.github.io/Pkera_Productions_WebApp`

#### Manual Deployment
1. **Build for production**
   ```bash
   npm run build:static
   ```

2. **Deploy manually** (if needed)
   - Upload the contents of `dist/public/` to your hosting provider
   - Or push changes to trigger automatic GitHub Actions deployment

## 📝 Available Scripts

- `npm run build:static` - Build for GitHub Pages production deployment
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## 🛠️ Development Workflow

### Adding New Content
1. **Update static data files** in `client/public/data/`:
   - `documentaries.json` - Add new documentary entries
   - `testimonials.json` - Add client testimonials
   - `producer.json` - Update producer information
2. **Implement new components** in `client/src/components/`
3. **Add new pages** in `client/src/pages/`
4. **Update routing** in `client/src/App.tsx` if needed
5. **Test locally** with `npm run build:static && npm run preview`
6. **Deploy** by pushing to GitHub (automatic via GitHub Actions)

### Data Management
- **Static JSON files** serve all application data
- **No database required** - perfect for GitHub Pages
- **Type safety** maintained through TypeScript interfaces
- **Easy updates** by editing JSON files directly

## 🌐 Deployment

This application is optimized for **GitHub Pages** deployment:

### GitHub Pages Features
- ✅ **Free hosting** for public repositories
- ✅ **Automatic deployment** via GitHub Actions
- ✅ **Custom domain support** (optional)
- ✅ **HTTPS by default**
- ✅ **Global CDN** for fast loading

### Alternative Static Hosting
The built application can also be deployed to:
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **Surge.sh** - Simple command-line deployment
- **Firebase Hosting** - Google's hosting platform

### Custom Domain Setup (Optional)
1. Add a `CNAME` file to `client/public/` with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 🔧 Technology Stack

### Core Technologies
- **TypeScript** - Type safety across the entire application
- **React 18** - Modern UI library with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Static JSON** - Simple, reliable data storage

### UI/UX
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Wouter** - Minimalist routing for React
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### Developer Experience
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Free, reliable static hosting
- **ESBuild** - Fast JavaScript bundler
- **Hot Module Replacement** - Instant feedback during development
- **TypeScript** - Enhanced developer experience with type safety

### Performance & SEO
- **Static Site Generation** - Fast loading times
- **SPA Routing** - Smooth navigation experience
- **Optimized Assets** - Compressed and cached resources
- **CDN Delivery** - Global content distribution

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