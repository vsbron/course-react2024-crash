import CategoryFilter from "./Components/CategoryFilter";
import FactList from "./Components/FactList";
import NewFactForm from "./Components/NewFactForm";

import "./style.css";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function App() {
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
        <button className="btn btn--large btn--open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
