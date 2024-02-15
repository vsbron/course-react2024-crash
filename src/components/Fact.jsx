import { CATEGORIES } from "../utils/constants";
import { useVote } from "../hooks/useVote";

function Fact({ fact }) {
  const {
    id,
    text,
    source,
    category,
    votesInteresting,
    votesMindblowing,
    votesFalse,
  } = fact;

  // Declaring whether the fact has more false votes than others (and any of them has at least 1 vote)
  const isDisputed =
    (votesInteresting || votesMindblowing || votesFalse) &&
    votesFalse >= votesInteresting + votesMindblowing;

  // Getting the mutation function and isVoting status from custom hook
  const { isVoting, addVote } = useVote();

  // Vote handler
  function handleVote(e) {
    // Getting the current value of votes
    const newValue = Number(e.target.innerHTML.replace(/\D+/g, "")) + 1;

    // Calling the mutation function
    addVote({ columnName: e.target.name, newValue, id });
  }

  return (
    <li className="fact">
      <p>
        {isDisputed && <span className="disputed">[⛔ DISPUTED]</span>}
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
          onClick={handleVote}
          disabled={isVoting}
          name="votesInteresting"
        >
          👍 {votesInteresting}
        </button>
        <button
          onClick={handleVote}
          disabled={isVoting}
          name="votesMindblowing"
        >
          🤯 {votesMindblowing}
        </button>
        <button onClick={handleVote} disabled={isVoting} name="votesFalse">
          ⛔ {votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
