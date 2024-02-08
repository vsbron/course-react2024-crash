import CategoryFilter from "./Components/CategoryFilter";
import FactList from "./Components/FactList";
import NewFactForm from "./Components/NewFactForm";

import "./style.css";

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
