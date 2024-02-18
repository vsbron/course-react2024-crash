import { useState } from "react";
import styled from "styled-components";

import NewFactForm from "./NewFactForm";

const StyledHeader = styled.header`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & img {
    width: 68px;
    height: 68px;
  }
`;

function Header() {
  // Creating state for form visibility
  const [showForm, setShowForm] = useState(false);

  // Show form click handler
  function handleClick() {
    setShowForm((show) => !show);
  }

  return (
    <>
      <StyledHeader>
        <Logo>
          <img
            src="logo.png"
            width="68"
            height="68"
            alt="Today I Learned Logo"
          />
          <h1>Today I Learned</h1>
        </Logo>
        <button className="btn btn--large" onClick={handleClick}>
          {showForm ? "Close Form" : "Share a fact"}
        </button>
      </StyledHeader>

      {showForm && <NewFactForm setShowForm={setShowForm} />}
    </>
  );
}

export default Header;
