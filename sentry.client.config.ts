import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c585560151b0b57e78680a39335992bc@o4510857604431872.ingest.us.sentry.io/4510857605414912",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

  // Profiling
  profilesSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({ colorScheme: "system" }),
    Sentry.browserProfilingIntegration(),
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
