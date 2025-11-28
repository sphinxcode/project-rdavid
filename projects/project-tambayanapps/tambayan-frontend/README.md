# Tambayan PH - Client Frontend

> AI Automation Made Simple - Client-facing website for Tambayan PH

This is the client-facing website for Tambayan PH, an AI automation platform where users can browse and use automation tools. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Supabase Auth
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Railway

## 📋 Phase 1 Features (Completed)

- ✅ Next.js 14 project setup with App Router
- ✅ Tailwind CSS configuration with Tambayan PH brand colors
- ✅ Supabase Auth integration (email/password + OAuth)
- ✅ Basic layouts (landing, auth pages, dashboard shell)
- ✅ User registration & login flows
- ✅ Email verification flow
- ✅ TypeScript types for core models
- ✅ Reusable UI components (Button, Card, Input)
- ✅ Layout components (NavBar, Footer)
- ✅ Authentication middleware

## 🎨 Brand Colors

```css
Primary: #ec4899 (Pink)
Accent: #c026d3 (Fuchsia)
Background: #ffffff / #fafafa
Gradient: linear-gradient(135deg, #ec4899 0%, #c026d3 100%)
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase project set up (see parent repo for details)
- Access to the Tambayan PH backend API

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
# Copy from .env.local.example
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual values:

```bash
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kong-production-d6e0.up.railway.app
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_KEY=your_service_key_here
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tambayan-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth pages (login, signup)
│   │   ├── (dashboard)/       # Protected pages (dashboard, tools, etc.)
│   │   ├── (marketing)/       # Public pages (landing, pricing)
│   │   ├── auth/callback/     # OAuth callback handler
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles + Tailwind config
│   ├── components/
│   │   ├── auth/              # Auth-related components
│   │   ├── dashboard/         # Dashboard components
│   │   ├── layout/            # Layout components (NavBar, Footer)
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   └── supabase/          # Supabase client config
│   │       ├── client.ts      # Client-side Supabase
│   │       └── server.ts      # Server-side Supabase
│   ├── types/                 # TypeScript type definitions
│   │   ├── user.ts
│   │   ├── tool.ts
│   │   └── chat.ts
│   └── middleware.ts          # Auth middleware
├── .env.local.example         # Environment variables template
└── package.json
```

## 🔐 Authentication

This app uses Supabase Auth with support for:

- **Email/Password** authentication
- **Google OAuth** (configured in Supabase dashboard)
- **GitHub OAuth** (configured in Supabase dashboard)
- **Email verification** (required for paid features)
- **Password reset** flow

### Setting Up OAuth Providers

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Providers
3. Enable and configure Google and GitHub providers
4. Add redirect URLs:
   - Development: `http://localhost:3000/auth/callback`
   - Production: `https://tambayanph.com/auth/callback`

## 🎨 Tailwind CSS v4

This project uses Tailwind CSS v4 which uses a different configuration approach:

- Configuration is done via `@theme inline` in `globals.css`
- No separate `tailwind.config.ts` file needed
- Brand colors are defined as CSS variables
- Full TypeScript support maintained

## 🔄 Next Steps (Phase 2+)

- [ ] Tool gallery page with search and filters
- [ ] Category pills/filters
- [ ] Tool detail pages
- [ ] Form tool execution
- [ ] AI chat interface
- [ ] Favorites functionality
- [ ] Billing & subscription integration (Stripe)
- [ ] Credit system implementation
- [ ] Usage history
- [ ] Rating & review system
- [ ] Share functionality

## 📝 Development Notes

### Important Files

- `src/middleware.ts` - Handles auth session refresh and protected routes
- `src/lib/supabase/client.ts` - Client-side Supabase client
- `src/lib/supabase/server.ts` - Server-side Supabase client
- `src/app/globals.css` - Tailwind CSS configuration and brand colors

### Protected Routes

The following routes require authentication:
- `/dashboard`
- `/tools`
- `/chat`
- `/billing`
- `/settings`
- `/history`

Middleware automatically redirects unauthenticated users to `/login`.

### Environment Variables

All Supabase-related environment variables must be prefixed with `NEXT_PUBLIC_` for client-side access, except for `SUPABASE_SERVICE_KEY` which should never be exposed to the client.

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Supabase Connection Issues

1. Verify your environment variables are correct
2. Check that the Supabase URL points to the Kong API Gateway
3. Ensure OAuth providers are configured in Supabase dashboard

## 📚 Related Documentation

- [Tambayan PH Client PRD](../TAMBAYAN_CLIENT_PRD.md)
- [Handoff Prompt](../HANDOFF_PROMPT.md)
- [Supabase Migration Docs](../MIGRATION_COMPLETE.md)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)

## 📄 License

Proprietary - Tambayan PH © 2025

---

Built with ❤️ using Next.js 14 and Supabase
