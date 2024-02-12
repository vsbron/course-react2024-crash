import { useEffect, useState } from "react";

import supabase from "./supabase";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";

import "./style.css";

function App() {
  // Creating state for form visibility and fact list
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  // Use effect hook that loads the initial facts
  useEffect(() => {
    async function getFacts() {
      let { data: facts, error } = await supabase.from("facts").select("*");
      setFacts(facts);
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
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
