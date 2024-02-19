import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { CATEGORIES } from "../utils/constants";

import ButtonColor from "../ui/ButtonColor";

const Category = styled.li`
  margin-bottom: 16px;
`;

function CategoryFilter() {
  // Getting the reference and setter for URL state
  const [searchParams, setSearchParams] = useSearchParams();

  // Getting the chosen category
  const currentCategory = searchParams.get("category");

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
          <ButtonColor
            type="all"
            active={currentCategory === "all" && "active"}
            onClick={() => handleClick("all")}
          >
            All
          </ButtonColor>
        </li>
        {CATEGORIES.map((cat) => (
          <Category key={cat.name}>
            <ButtonColor
              type="category"
              active={cat.name === currentCategory && "active"}
              style={{ backgroundColor: cat.color }}
              onClick={() => handleClick(cat.name)}
            >
              {cat.name}
            </ButtonColor>
          </Category>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
