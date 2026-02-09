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

## Getting Started

### Clerk Setup

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application in the Clerk dashboard
3. Copy your API keys from **Configure > API keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_`)
   - `CLERK_SECRET_KEY` (starts with `sk_`)

### Database Setup

For local development, you need a PostgreSQL database. You can use Docker:

```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=user -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
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
4. Add a PostgreSQL database: click **New** > **Database** > **PostgreSQL**
5. Railway will automatically set `DATABASE_URL` for your service. Add the remaining environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`
6. Railway will automatically detect the config and deploy

### Update Clerk Production Settings

After deployment, update your Clerk application:

1. Go to Clerk dashboard > **Configure > Domains**
2. Add your Railway domain (e.g., `your-app.up.railway.app`)
