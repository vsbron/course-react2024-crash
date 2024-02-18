import { useState } from "react";
import styled from "styled-components";

import { useAddFact } from "../hooks/useAddFact";
import { CATEGORIES, mediaQuery } from "../utils/constants";

const StyledForm = styled.form`
  background-color: #44403c;
  margin-bottom: 4rem;
  padding: 16px 3.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  border-radius: 16px;

  ${mediaQuery.laptop} {
    flex-direction: column;
    align-items: stretch;
  }

  & input,
  & select {
    background: #78716c;
    color: inherit;

    width: 22rem;
    padding: 16px;
    border: none;
    border-radius: 10rem;

    font-family: inherit;
    line-height: 1;

    outline: none;

    ${mediaQuery.laptop} {
      width: auto;
    }
  }

  & input:first-child {
    flex-grow: 1;
  }

  & input::placeholder {
    color: #a8a29e;
  }
`;

const TextLength = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 18px;
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        disabled={isAdding}
      />
      <TextLength>{textLength}</TextLength>

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
    </StyledForm>
  );
}

export default NewFactForm;
