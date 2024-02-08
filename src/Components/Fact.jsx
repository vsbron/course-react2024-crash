const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

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
