# Agilify

<div align="center">
  <img src="/public/logo2.png" alt="Agilify Logo" width="300"/>
  <h3>Modern Agile Project Management Platform</h3>
  <p>Streamline your workflow with powerful sprint planning, intuitive Kanban boards, and comprehensive team collaboration</p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js 14"/>
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React 18"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS"/>
    <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma" alt="Prisma"/>
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql" alt="PostgreSQL"/>
    <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge" alt="Clerk Auth"/>
  </div>
</div>

---

## ✨ Features

### 🎯 Core Project Management Features

- **📊 Intuitive Kanban Boards**: Visualize your entire workflow with drag-and-drop Kanban boards powered by @hello-pangea/dnd
  - Real-time status tracking (TODO, IN PROGRESS, IN REVIEW, DONE)
  - Seamless drag-and-drop issue reordering
  - Column-based workflow visualization
  - Persistent board state across sessions

- **🏃 Powerful Sprint Planning**: Complete agile sprint management system
  - Create and manage sprints with start/end dates
  - Sprint status tracking (PLANNED, ACTIVE, COMPLETED)
  - Assign issues to specific sprints
  - Sprint backlog management
  - Sprint progress visualization

- **📝 Comprehensive Issue Management**: Full-featured issue tracking with advanced capabilities
  - Create, edit, and delete issues with rich descriptions
  - Markdown editor support for detailed issue descriptions
  - Issue priority levels (LOW, MEDIUM, HIGH, URGENT)
  - Assignee and reporter tracking
  - Issue ordering within status columns
  - Cascading deletes for data integrity

- **🏢 Multi-Organization Support**: Powered by Clerk for enterprise-ready team management
  - Organization-based project isolation
  - Role-based access control
  - Team member management
  - Organization switcher component

### 🚀 Advanced Features

- **🎨 Modern & Responsive UI**: Beautiful interface built with Radix UI and TailwindCSS
  - Dark mode support with next-themes
  - Fully responsive design for all devices
  - Accessible components following WAI-ARIA guidelines
  - Smooth animations with tailwindcss-animate

- **👥 User Management & Authentication**: Secure authentication with Clerk
  - Social sign-in options
  - Protected routes and middleware
  - User profile management with avatars
  - Webhook integration for user sync

- **🔍 Smart Filtering & Search**: Advanced board filtering capabilities
  - Filter by assignee, priority, or status
  - Search issues by title or description
  - Quick filter presets
  - Clear filter states

- **📱 Mobile-Friendly**: Optimized for mobile project management
  - Responsive drawer components with Vaul
  - Touch-friendly drag-and-drop
  - Mobile-optimized navigation
  - Adaptive layouts for all screen sizes

- **⚡ Real-time Updates**: Fast, reactive UI updates
  - Optimistic UI updates
  - Server actions for data mutations
  - Automatic revalidation
  - Loading states with spinners

- **📈 Project Analytics**: Gain insights into your team's performance
  - User-specific issue tracking
  - Project overview dashboards
  - Issue distribution visualization
  - Sprint velocity tracking

---

## 📸 Screenshots

<div align="center">
  <img src="/public/screenshots/landing.PNG" alt="Landing Page" width="45%"/>
  <img src="/public/screenshots/organization.PNG" alt="Organization Dashboard" width="45%"/>
  <img src="/public/screenshots/kanban.PNG" alt="Kanban Board - Drag & Drop" width="45%"/>
  <img src="/public/screenshots/createSprint.PNG" alt="Create Sprint" width="45%"/>
  <img src="/public/screenshots/createIssue.PNG" alt="Create New Issue" width="45%"/>
  <img src="/public/screenshots/issueDetails.PNG" alt="Issue Details with Markdown Editor" width="45%"/>
</div>

---
## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router and Server Components
- **React 18** - UI library with hooks and concurrent features
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
  - Dialog, Popover, Select, Tabs, Accordion, Avatar
- **@hello-pangea/dnd** - Beautiful drag-and-drop for Kanban boards
- **@uiw/react-md-editor** - Markdown editor for rich issue descriptions
- **Lucide React** - Beautiful & consistent icon set
- **next-themes** - Dark mode support
- **Sonner** - Toast notifications
- **Vaul** - Mobile-friendly drawer component

### Backend & Database
- **Prisma ORM** - Type-safe database toolkit
- **PostgreSQL** - Robust relational database
- **Next.js API Routes** - Serverless API endpoints
- **Server Actions** - Server-side mutations with Next.js 14

### Authentication & User Management
- **Clerk** - Complete user management solution
  - Social authentication
  - Organization management
  - Protected routes
  - Webhooks for user sync

### Form Handling & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Utilities
- **date-fns** - Modern JavaScript date utility library
- **class-variance-authority** - Type-safe component variants
- **clsx** - Utility for constructing className strings
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or later
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud)
- **Clerk Account** for authentication ([clerk.com](https://clerk.com))

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/CoderYashVij/Agilify.git
cd Agilify
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/agilify?schema=public"

# Clerk Authentication
# Get these from https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk URLs (adjust based on your domain)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Clerk Webhook Secret (for user sync)
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 4. Configure Clerk

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Enable **Organizations** feature in Clerk Dashboard
3. Copy your publishable and secret keys to `.env`
4. Set up a webhook endpoint for user synchronization:
   - Webhook URL: `https://your-domain.com/api/webhooks/clerk`
   - Subscribe to events: `user.created`, `user.updated`, `organizationMembership.created`

### 5. Set Up Database

Initialize your PostgreSQL database and run migrations:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed database with sample data
npx prisma db seed
```

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📊 Database Management

Agilify uses Prisma as the ORM with PostgreSQL database.

### Database Schema

The application includes the following models:
- **User** - User profiles synced from Clerk
- **Project** - Projects with organization isolation
- **Sprint** - Sprint planning and management
- **Issue** - Issue tracking with priorities and statuses

### Available Commands

```bash
# Open Prisma Studio (visual database editor)
npx prisma studio

# Generate Prisma Client after schema changes
npx prisma generate

# Push schema changes to database
npx prisma db push

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (⚠️ WARNING: Deletes all data)
npx prisma migrate reset
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks

# Database
npm run postinstall  # Automatically generates Prisma Client after install
```

---

## 🎨 Project Structure

```
Agilify/
├── app/                          # Next.js 14 App Router
│   ├── (auth)/                  # Authentication routes
│   │   ├── sign-in/            # Sign-in page
│   │   └── sign-up/            # Sign-up page
│   ├── (main)/                 # Main application routes
│   │   ├── onboarding/         # User onboarding flow
│   │   ├── organization/       # Organization management
│   │   │   └── [slug]/         # Organization-specific pages
│   │   └── project/            # Project management
│   │       ├── _components/    # Project-specific components
│   │       ├── [projectId]/    # Individual project pages
│   │       └── create/         # Project creation
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout
│   └── page.jsx                # Landing page
├── actions/                     # Server actions
│   ├── issues.js               # Issue CRUD operations
│   ├── organizations.js        # Organization operations
│   ├── projects.js             # Project operations
│   └── sprints.js              # Sprint operations
├── components/                  # Reusable components
│   ├── ui/                     # UI component library
│   ├── header.jsx              # Main header
│   ├── issue-card.jsx          # Issue card component
│   ├── org-switcher.jsx        # Organization switcher
│   └── user-menu.jsx           # User menu dropdown
├── hooks/                       # Custom React hooks
│   └── use-fetch.js            # Data fetching hook
├── lib/                        # Utility libraries
│   ├── checkUser.js            # User authentication check
│   ├── prisma.js               # Prisma client instance
│   └── utils.js                # Utility functions
├── prisma/                     # Database schema and migrations
│   ├── schema.prisma           # Prisma schema definition
│   └── migrations/             # Database migrations
├── public/                     # Static assets
├── middleware.js               # Next.js middleware (Clerk)
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

---

## 🎯 Key Features Breakdown

### 1. **Kanban Board Management**
The Kanban board is the heart of Agilify, providing visual workflow management:
- Drag-and-drop issues between columns
- Real-time board updates
- Customizable board filters
- Issue reordering within columns
- Mobile-responsive board layout

**Tech**: `@hello-pangea/dnd`, Server Actions, Optimistic UI

### 2. **Sprint Planning**
Comprehensive sprint management for agile teams:
- Create sprints with date ranges
- Assign issues to sprints
- Track sprint status (Planned/Active/Completed)
- Sprint backlog management
- View sprint progress and completion

**Tech**: Prisma, React Hook Form, Zod validation

### 3. **Issue Tracking**
Full-featured issue management system:
- Rich markdown descriptions
- Priority levels and status tracking
- Assignee and reporter assignment
- Issue filtering and search
- Detailed issue view dialog

**Tech**: `@uiw/react-md-editor`, Radix UI Dialog, Server Actions

### 4. **Organization Management**
Multi-tenant architecture with organization support:
- Organization-based project isolation
- Team member management
- Organization switcher
- Role-based permissions

**Tech**: Clerk Organizations, Middleware protection

### 5. **User Experience**
Modern, accessible, and responsive design:
- Dark/Light theme toggle
- Toast notifications for actions
- Loading states and error handling
- Responsive mobile design
- Accessible components

**Tech**: next-themes, Sonner, Radix UI, TailwindCSS

---

## 🔐 Authentication & Authorization

Agilify uses **Clerk** for authentication and user management:

- **Social Sign-In**: Support for Google, GitHub, and more
- **Organizations**: Team-based access control
- **Protected Routes**: Middleware-based route protection
- **User Sync**: Automatic user synchronization via webhooks
- **Session Management**: Secure session handling

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Configure environment variables in Vercel
4. Deploy

### Environment Variables for Production

Ensure all environment variables from `.env` are configured in your deployment platform:
- Database URL (use connection pooling for serverless)
- Clerk keys and webhook secret
- Any additional production-specific variables

### Database Considerations

- Use a production PostgreSQL database (e.g., Neon, Supabase, Railway)
- Enable connection pooling for serverless environments
- Run migrations before deploying: `npx prisma migrate deploy`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Yash Vij**
- GitHub: [@CoderYashVij](https://github.com/CoderYashVij)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/yashvij)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication & User Management
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📧 Support

For support, email vij.yash.work@gmail.com or open an issue in the repository.

---

<div align="center">
  <p>Built with ❤️ by Yash Vij</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
