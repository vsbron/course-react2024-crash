import { useState } from "react";
import styled from "styled-components";

import { useAddFact } from "../hooks/useAddFact";
import { CATEGORIES, mediaQuery } from "../utils/constants";

import ButtonColor from "../ui/ButtonColor";
import Button from "../ui/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQuery.mobile} {
    gap: 1rem;
  }

  & input,
  & select,
  & textarea {
    background: var(--color-white-1);
    color: inherit;
    width: 100%;
    padding: 15px;
    border: var(--color-white-3) 1px solid;
    border-radius: var(--border-radius-md);
    font-family: inherit;
    line-height: 1;
    outline: none;
  }

  & textarea {
    height: 100px;
    resize: none;
    line-height: 1.4;
  }

  & input:first-child {
    flex-grow: 1;
  }

  & input::placeholder {
    color: #a8a29e;
  }
`;

const Header = styled.h2`
  text-align: center;
  font-family: Oswald;
  font-size: 4rem;
  font-weight: 300;

  ${mediaQuery.mobile} {
    font-size: 2rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-left: 1.5rem;
  margin-bottom: 5px;
`;

const TextLength = styled.span`
  display: block;
  font-size: 14px;
  text-align: right;
  margin-right: 1.5rem;

  ${mediaQuery.mobile} {
    font-size: 12px;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  & > button:first-child {
    grid-column: 1 / -1;
  }

  ${mediaQuery.mobile} {
    margin-top: 1.5rem;
    gap: 1.5rem;
  }
`;

function NewFactForm({ setShowModal }) {
  // Creating states for controlled form elements and Uploading state
  const [text, setText] = useState("");
  const [formSource, setFormSource] = useState("");
  const [category, setCategory] = useState("");

  // Derived state for Source after checking
  let source = "";

  // Getting the mutation function and the Adding state from custom hook
  const { isAdding, addFact } = useAddFact();

  // Variables for fact's maximum length counter
  const maxLength = 200;
  const textLength = maxLength - text.length;

  // Function for validating URL (Not good, needs replacement)
  function ValidationURL(string) {
    //Check the url
    const res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );

    // Guard clause
    if (res === null) return false;

    // Add https:// if needed
    source = string.startsWith("http") ? string : `https://${string}`;

    return true;
  }

  // Helper function to reset the form
  function resetForm() {
    setText("");
    setFormSource("");
    setCategory("");
  }

  // Form submit handler
  async function handleSubmit(e) {
    // 1) Prevent browser reload
    e.preventDefault();

    // 2) Check if data is valid. If so create a new Fact
    if (!text || !ValidationURL(formSource) || !category) {
      alert("Please check the data you filled in the form");
      return;
    }

    // 3) Upload the fact to supabase
    addFact(
      { text, source, category },
      {
        onSuccess: () => {
          // 4) Reset input fields
          resetForm();
          // 5) Close the form
          setShowModal(false);
        },
      }
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Header>Add a new fact</Header>
      <div>
        <textarea
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxLength}
          disabled={isAdding}
        />
        <TextLength>Characters left: {textLength}</TextLength>
      </div>

      <div>
        <Label>Source URL:</Label>
        <input
          type="text"
          placeholder="https://www.example.com"
          value={formSource}
          onChange={(e) => setFormSource(e.target.value)}
          disabled={isAdding}
        />
      </div>

      <div>
        <Label>Category:</Label>
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
      </div>
      <ButtonsWrapper>
        <ButtonColor size="large">Post</ButtonColor>
        <Button size="large" onClick={resetForm}>
          Reset
        </Button>
        <Button
          size="large"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </Button>
      </ButtonsWrapper>
    </StyledForm>
  );
}

export default NewFactForm;
