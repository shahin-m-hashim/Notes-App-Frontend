import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./app.css";
import App from "./App.jsx";
import ErrorPage from "pages/ErrorPage";
import queryClient from "config/queryClientConfig";
import ErrorBoundary from "components/wrappers/ErrorBoundary";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || "production";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <QueryClientProvider client={queryClient}>
        <App />
        {ENVIRONMENT === "development" && <ReactQueryDevtools />}
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
