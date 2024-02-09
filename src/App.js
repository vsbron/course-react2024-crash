import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";

import "./style.css";
import Header from "./components/Header";

function App() {
  // State for form visibility
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && <NewFactForm />}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
