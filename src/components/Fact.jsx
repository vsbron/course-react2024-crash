import { useState } from "react";
import supabase from "../services/supabase";
import { CATEGORIES } from "../utils/constants";

function Fact({ fact, setFacts }) {
  const {
    text,
    source,
    category,
    votesInteresting,
    votesMindblowing,
    votesFalse,
  } = fact;

  // State variable for the Updating state;
  const [isUpdating, setIsUpdating] = useState(false);

  // Votes click handler
  async function handleVote(columnName) {
    // Enabling Updating state
    setIsUpdating(true);

    // Updating the DB
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    // If no error, updating the list on the page
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );

    // Disabling Updating state
    setIsUpdating(false);
  }

  return (
    <li className="fact">
      <p>
        {text}
        <a
          href={`${source}`}
          className="source"
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔ {votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
