import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { CATEGORIES, mediaQuery } from "../utils/constants";

import ButtonColor from "../ui/ButtonColor";
import { useState } from "react";

const Category = styled.li`
  margin-bottom: 16px;

  ${mediaQuery.tablet} {
    margin-bottom: 0;
  }
`;

const FiltersWrapper = styled.div`
  display: block;

  &.active {
    display: block;
  }

  ${mediaQuery.tablet} {
    display: none;
  }
`;

const FilterTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;

  ${mediaQuery.laptop} {
    font-size: 1.8rem;
  }
`;

const CategoryList = styled.ul`
  ${mediaQuery.tablet} {
    font-size: 1.8rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);

    & > li:first-child {
      grid-column: 1 / -1;
    }
  }

  ${mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function CategoryFilter() {
  // Getting the reference and setter for URL state
  const [searchParams, setSearchParams] = useSearchParams();

  // State for showing the filter
  const [showFilters, setShowFilters] = useState(false);

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
      <ButtonColor
        type="filter"
        size="small"
        onClick={() => setShowFilters((show) => !show)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </ButtonColor>
      <FiltersWrapper className={`${showFilters ? "active" : ""}`}>
        <FilterTitle>Filter by category:</FilterTitle>
        <CategoryList>
          <Category>
            <ButtonColor
              type="all"
              active={currentCategory === "all" ? "active" : ""}
              onClick={() => handleClick("all")}
            >
              All
            </ButtonColor>
          </Category>
          {CATEGORIES.map((cat) => (
            <Category key={cat.name}>
              <ButtonColor
                type="category"
                active={cat.name === currentCategory ? "active" : ""}
                style={{ backgroundColor: cat.color }}
                onClick={() => handleClick(cat.name)}
              >
                {cat.name}
              </ButtonColor>
            </Category>
          ))}
        </CategoryList>
      </FiltersWrapper>
    </aside>
  );
}

export default CategoryFilter;
