import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { DeumanSolutionApp } from './app/DeumanSolutionApp'
import './index.css'

Sentry.init({
  dsn: "https://4030d5181a76c791dd8e3103810ea1f1@o4511667856474112.ingest.us.sentry.io/4511667865321472",
  dataCollection: {
   
  },
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.,
  // Enable logs to be sent to Sentry
  enableLogs: true
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeumanSolutionApp />
  </StrictMode>,
)
