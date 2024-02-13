import { useEffect, useState } from "react";

import supabase from "./services/supabase";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";

import Loader from "./ui/Loader";

import "./style.css";

function App() {
  // Creating state for form visibility, fact list, loading state and chosen category
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Use effect hook that loads the initial facts
  useEffect(() => {
    async function getFacts() {
      // Enabling Loading state
      setIsLoading(true);

      // setting the query based on the filter and getting the data
      let query = supabase.from("facts").select("*");
      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);
      let { data: facts, error } = await query;

      // Updating the Facts in the state if there's no Errors
      if (!error) setFacts(facts);
      else alert("There was a problem getting the data");

      // Disabling the Loading state
      setIsLoading(false);
    }

    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

export default App;
