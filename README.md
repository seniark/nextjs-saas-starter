# Next.js + Clerk + PostgreSQL Starter

A starter template for building applications with Next.js, Clerk authentication, and PostgreSQL.

## Tech Stack

### Core

- **Framework**: Next.js
- **Language**: Typescript
- **Styling**: Tailwind CSS

### Backend & Database

- **Runtime**: Bun
- **Database**: PostgreSQL
- **ORM/Query Builder**: Drizzle

### Tools & Deployment

- **Version Control**: Git, Github
- **Deployment**: Railway
- **Authentication**: Clerk
- **Error Monitoring**: Sentry

## Getting Started

### Clerk Setup

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application in the Clerk dashboard
3. Copy your API keys from **Configure > API keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_`)
   - `CLERK_SECRET_KEY` (starts with `sk_`)

### Database Setup

For local development, start PostgreSQL with Docker Compose:

```bash
docker compose up -d
```

Or use an existing PostgreSQL instance and update `DATABASE_URL` in `.env.local`.

Once your database is running, generate and run migrations:

```bash
bun run db:generate
bun run db:migrate
```

To explore your database with Drizzle Studio:

```bash
bun run db:studio
```

### Sentry Setup

1. Go to [sentry.io](https://sentry.io) and create an account
2. Create a new Next.js project
3. Copy your **DSN** from **Settings > Client Keys (DSN)**
4. Replace the DSN in `sentry.client.config.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts`
5. Update `next.config.ts` with your Sentry **org** and **project** slugs (found in **Settings > General**)
6. For source map uploads in production, generate an auth token at **Settings > Organization Tokens** with the **`org:ci`** permission, and set it as `SENTRY_AUTH_TOKEN` in your environment

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-clerk-pg-starter
```

1. Install dependencies:

```bash
bun install
```

1. Set up environment variables:

```bash
cp .env.example .env.local
```

1. Edit `.env.local` and add your Clerk API keys

2. Start the development server:

```bash
bun run dev
```

1. Open [http://localhost:3000](http://localhost:3000)

## Deployment to Railway

### Prerequisites

- A [Railway](https://railway.app) account
- Your code pushed to GitHub

### Deploy Steps

1. Go to [railway.app](https://railway.app) and create a new project
2. Select **Deploy from GitHub repo**
3. Choose your repository
4. Add a PostgreSQL database:
   - In your project, click **New** > **Database** > **PostgreSQL**
   - Click on the new PostgreSQL service to open its settings
   - Go to the **Variables** tab to find the connection credentials
   - Copy the `DATABASE_URL` variable (under **Connection URL**)
5. Connect the database to your app service:
   - Click on your app service (not the database)
   - Go to the **Variables** tab
   - Add a new variable: `DATABASE_URL` and paste the connection URL from the previous step, **or** click **Add Reference** and select `DATABASE_URL` from the PostgreSQL service to link it automatically
6. Add the remaining environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`
7. Railway will automatically detect the config and deploy using Railpack (which auto-detects Bun from the lockfile and Node.js from `engines.node` in `package.json`)
8. After the first deploy, run the database migrations. Open the app service's **Settings** tab and use the **Railway CLI** or add a build command:
   - In your service's **Settings > Deploy**, set the **Custom Start Command** to:
     ```
     bun run db:migrate && bun run start
     ```
   - This ensures migrations run before the app starts on each deploy

### Update Clerk Production Settings

After deployment, update your Clerk application:

1. Go to Clerk dashboard > **Configure > Domains**
2. Add your Railway domain (e.g., `your-app.up.railway.app`)
