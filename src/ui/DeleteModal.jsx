import styled from "styled-components";

import { useDeleteFact } from "../hooks/useDeleteFact";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #292524;
  opacity: 0.6;
`;

const Modal = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  animation: deleteModalAppear 0.2s ease forwards;

  @keyframes deleteModalAppear {
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

const ModalHeader = styled.div`
  font-size: 40px;
  color: #ef4444;
  font-weight: 600;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 30px;
`;

function DeleteModal({ id, setShowModal }) {
  // Getting the mutation function and the status from custom hook
  const { isDeleting, deleteFact } = useDeleteFact();

  // Delete handler function
  function handleDelete() {
    deleteFact(id);
    setShowModal(false);
  }

  return (
    <>
      <Overlay onClick={() => setShowModal(false)}></Overlay>
      <Modal>
        <ModalHeader>Warning!</ModalHeader>
        <p>
          Are you sure you want to delete this fact?
          <br />
          This action cannot be undone.
        </p>
        <ModalButtons>
          <Button
            size="large"
            onClick={() => {
              setShowModal(false);
            }}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            size="large"
            type="delete"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </ModalButtons>
      </Modal>
    </>
  );
}

export default DeleteModal;
