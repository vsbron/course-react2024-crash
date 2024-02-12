import { CATEGORIES } from "../utils/constants";

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn--all-categories">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li className="category" key={cat.name}>
            <button
              className="btn btn--category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
