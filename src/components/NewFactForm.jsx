import { useState } from "react";

import { CATEGORIES } from "../utils/constants";
import supabase from "../services/supabase";

function NewFactForm({ setFacts, setShowForm }) {
  // Creating states for controlled form elements and Uploading state
  const [text, setText] = useState("");
  const [source, setSource] = useState("https://example.com");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState("");

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
    // Enabling Uploading state
    setIsUploading(true);

    // 1) Prevent browser reload
    e.preventDefault();

    // 2) Check if data is valid. If so create a new Fact
    if (!text || !isValidUrl(source) || !category) return;

    // 3) Upload the fact to supabase and receive the new Fact obj
    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, category }])
      .select();

    // Return if there's an error
    if (error) return;

    // 4) Add the new fact to the UI: add the fact to state
    setFacts((facts) => [newFact[0], ...facts]);

    // 5) Reset input fields
    resetForm();

    // 6) Close the form
    setShowForm(false);

    // Disabling Uploading state
    setIsUploading(false);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        disabled={isUploading}
      />
      <span>{textLength}</span>

      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name[0].toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="btn btn--large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
