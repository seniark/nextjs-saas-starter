import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Next.js Starter
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          A starter template with Next.js, Clerk, and PostgreSQL.
        </p>
        <div className="flex gap-4">
          <SignInButton mode="modal">
            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </main>
    </div>
  );
}
