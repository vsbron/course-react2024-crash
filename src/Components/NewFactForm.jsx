import { useState } from "react";
import { CATEGORIES } from "../utils/constants";

function NewFactForm() {
  // Creating states for controlled form elements
  const [text, setText] = useState("");
  const [source, setSource] = useState("https://example.com");
  const [category, setCategory] = useState("");

  // Variables for fact's maximum length counter
  const maxLength = 200;
  const textLength = maxLength - text.length;

  // Function for validating URL (Not good, needs replacement)
  function isValidUrl(string){
    let url;
    try {
      url = new URL(string)
    } catch (_) {
      return;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  // Form submit handler
  function handleSubmit(e) {
    // 1) Prevent browser reload
    e.preventDefault();

    // 2) Check if data is valid. If so create a new Fact
    if(!text || !isValidUrl(source) || !category) return;

    // 3) Create a new Fact Object
    const newFact = {
      id: Math.round(Math.random()*1000000),
      text,
      source,
      category,
      votesInteresting: 0,
      votesMindBlowing: 0,
      votesFalse: 0,
      createdIn: new Date().getCurrentYear(),
    }

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
