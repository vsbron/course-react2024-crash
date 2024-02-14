import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useFacts } from "./hooks/useFacts";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";

import Loader from "./ui/Loader";

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

  // Creating state for form visibility, fact list, loading state and chosen category
  const [showForm, setShowForm] = useState(false);
  const [setFacts] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header setShowForm={setShowForm} showForm={showForm} />
        {showForm && (
          <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
        )}
        <main className="main">
          <CategoryFilter />
          <FactList setFacts={setFacts} />
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
