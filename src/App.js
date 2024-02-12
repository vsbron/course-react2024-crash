import { useEffect, useState } from "react";

import supabase from "./services/supabase";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";

import Loader from "./ui/Loader";

import "./style.css";

function App() {
  // Creating state for form visibility, fact list and loading state
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Use effect hook that loads the initial facts
  useEffect(() => {
    async function getFacts() {
      // Enabling Loading state
      setIsLoading(true);

      // Getting the data
      let { data: facts, error } = await supabase.from("facts").select("*");

      // Updating the Facts in the state if there's no Errors
      if (!error) setFacts(facts);
      else alert("There was a problem getting the data");

      // Disabling the Loading state
      setIsLoading(false);
    }

    getFacts();
  }, []);

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter />
        {isLoading ? <Loader /> : <FactList facts={facts} />}
      </main>
    </>
  );
}

export default App;
