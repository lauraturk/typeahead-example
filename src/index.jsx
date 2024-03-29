import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { HelmetProvider } from "react-helmet-async";

/**
 * Root of react site
 *
 * Imports Helmet provider for the page head
 * And App which defines the content and navigation
 */

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
