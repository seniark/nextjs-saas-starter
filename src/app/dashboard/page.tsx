export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Welcome to the Dashboard
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Your dashboard is ready.
      </p>
    </div>
  );
}
