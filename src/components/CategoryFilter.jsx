import { useSearchParams } from "react-router-dom";

import { CATEGORIES } from "../utils/constants";

function CategoryFilter() {
  // Getting the reference and setter for URL state
  const [searchParams, setSearchParams] = useSearchParams();

  // Category click handler that filters out the facts
  function handleClick(value) {
    // Adding the filter data to the searchParams
    searchParams.set("category", value);

    // Updating the URL
    setSearchParams(searchParams);
  }

  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn--all-categories"
            onClick={() => handleClick("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li className="category" key={cat.name}>
            <button
              className="btn btn--category"
              style={{ backgroundColor: cat.color }}
              onClick={() => handleClick(cat.name)}
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
