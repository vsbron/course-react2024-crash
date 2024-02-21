import React from "react";
import styled from "styled-components";

import { mediaQuery } from "../utils/constants";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--color-black);
  opacity: 0.6;
`;

const StyledModal = styled.div`
  position: fixed;
  width: 600px;
  padding: 4rem 6rem;
  background: var(--color-white-2);
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50%);
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  animation: modalAppear 0.2s ease forwards;

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(-60%);
    }
    to {
      opacity: 1;
      transform: translateY(-50%);
    }
  }

  ${mediaQuery.mobile} {
    width: 400px;
    padding: 3rem 4rem;
  }

  ${mediaQuery.small} {
    width: 320px;
    padding: 3rem;
  }
`;

function Modal({ children, setShowModal }) {
  // Adding a setShowmodal prop to children
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { setShowModal });
  });

  return (
    <>
      <Overlay onClick={() => setShowModal(false)}></Overlay>
      <StyledModal>{childrenWithProps}</StyledModal>
    </>
  );
}

export default Modal;
