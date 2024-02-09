import { CATEGORIES } from "../utils/constants";

function NewFactForm() {
  return (
    <form className="fact-form">
      <input type="text" placeholder="Share a fact with the world..." />
      <span>999</span>
      <input type="text" placeholder="Trustworthy source..." />
      <select>
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
