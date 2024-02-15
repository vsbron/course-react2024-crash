import { useState } from "react";

import NewFactForm from "./NewFactForm";

function Header() {
  // Creating state for form visibility
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
        <button className="btn btn--large" onClick={handleClick}>
          {showForm ? "Close Form" : "Share a fact"}
        </button>
      </header>

      {showForm && <NewFactForm setShowForm={setShowForm} />}
    </>
  );
}

export default Header;
