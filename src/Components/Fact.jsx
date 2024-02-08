import { CATEGORIES } from "../utils/constants";

function Fact({ fact }) {
  const {
    text,
    source,
    category,
    votesInteresting,
    votesMindblowing,
    votesFalse,
  } = fact;

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
        <button>👍 {votesInteresting}</button>
        <button>🤯 {votesMindblowing}</button>
        <button>⛔ {votesFalse}</button>
      </div>
    </li>
  );
}

export default Fact;
