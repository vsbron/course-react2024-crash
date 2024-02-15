import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";

import "./style.css";

function App() {
  // Creating the query client with the options for React Query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000, // Time until the state becomes stale (ms)
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* Enabling the DevTools for React Query */}
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Header />
        <main className="main">
          <CategoryFilter />
          <FactList />
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
