import { useState } from "react";

import { useAddFact } from "../hooks/useAddFact";
import { CATEGORIES } from "../utils/constants";

function NewFactForm({ setShowForm }) {
  // Creating states for controlled form elements and Uploading state
  const [text, setText] = useState("");
  const [source, setSource] = useState("https://example.com");
  const [category, setCategory] = useState("");

  // Getting the mutation function and the Adding state from custom hook
  const { isAdding, addFact } = useAddFact();

  // Variables for fact's maximum length counter
  const maxLength = 200;
  const textLength = maxLength - text.length;

  // Function for validating URL (Not good, needs replacement)
  function isValidUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  // Helper function to reset the form
  function resetForm() {
    setText("");
    setSource("https://example.com");
    setCategory("");
  }

  // Form submit handler
  async function handleSubmit(e) {
    // 1) Prevent browser reload
    e.preventDefault();

    // 2) Check if data is valid. If so create a new Fact
    if (!text || !isValidUrl(source) || !category) return;

    // 3) Upload the fact to supabase
    addFact(
      { text, source, category },
      {
        onSuccess: () => {
          // 4) Reset input fields
          resetForm();
          // 5) Close the form
          setShowForm(false);
        },
      }
    );
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        disabled={isAdding}
      />
      <span>{textLength}</span>

      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isAdding}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isAdding}
      >
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
