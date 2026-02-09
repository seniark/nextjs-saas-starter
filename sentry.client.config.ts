import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c585560151b0b57e78680a39335992bc@o4510857604431872.ingest.us.sentry.io/4510857605414912",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
