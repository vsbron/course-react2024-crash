import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import NewFactForm from "./NewFactForm";

import ButtonColor from "../ui/ButtonColor";
import Modal from "../ui/Modal";

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
  const [showModal, setShowModal] = useState(false);

  // Show form click handler
  function handleClick() {
    setShowModal(true);
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
        <ButtonColor size="large" onClick={handleClick}>
          Share a fact
        </ButtonColor>
      </StyledHeader>

      {/* Showing the prompt window using Create Portal function */}
      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal}>
            <NewFactForm />
          </Modal>,

          document.body
        )}
    </>
  );
}

export default Header;
