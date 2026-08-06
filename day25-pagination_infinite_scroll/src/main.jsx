import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TanStack from "./TanStack.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Infinite from "./Infinite.jsx";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Infinite />
  </QueryClientProvider>
);
