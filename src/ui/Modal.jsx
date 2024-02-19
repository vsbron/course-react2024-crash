import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #292524;
  opacity: 0.6;
`;

const StyledModal = styled.div`
  position: fixed;
  width: 600px;
  padding: 40px 60px;
  background: #44403c;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(-50%);
  border-radius: 30px;
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
