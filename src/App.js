import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";

import "./style.css";

function App() {
  // State for form visibility
  const [showForm, setShowForm] = useState(false);

  // Show form click handler
  function handleClick() {
    setShowForm((show) => !show);
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            width="68"
            height="68"
            alt="Today I Learned Logo"
          />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn--large btn--open" onClick={handleClick}>
          Share a fact
        </button>
      </header>

      {showForm && <NewFactForm />}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
