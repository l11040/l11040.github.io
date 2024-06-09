import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { HashRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </>,
);
