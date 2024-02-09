import { useState } from "react";
import { CATEGORIES } from "../utils/constants";

function NewFactForm() {
  // Creating states for controlled form elements
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  // Variables for fact's maximum length counter
  const maxLength = 200;
  const textLength = maxLength - text.length;

  // Form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
      />
      <span>{textLength}</span>

      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name[0].toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="btn btn--large">Post</button>
    </form>
  );
}

export default NewFactForm;
