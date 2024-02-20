import styled from "styled-components";

import { useDeleteFact } from "../hooks/useDeleteFact";
import { mediaQuery } from "../utils/constants";

import Button from "../ui/Button";

const PromptHeader = styled.div`
  font-size: 4rem;
  color: #ef4444;
  font-weight: 600;

  ${mediaQuery.mobile} {
    font-size: 3rem;
  }
`;

const PromptButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0 30px;
  margin-top: 10px;
`;

const DeleteFact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function DeleteFactPrompt({ id, setShowModal }) {
  // Getting the mutation function and the status from custom hook
  const { isDeleting, deleteFact } = useDeleteFact();

  // Delete handler function
  function handleDelete() {
    deleteFact(id);
    setShowModal(false);
  }
  return (
    <DeleteFact>
      <PromptHeader>Warning!</PromptHeader>
      <p>
        Are you sure you want to delete this fact?
        <br />
        This action cannot be undone.
      </p>
      <PromptButton>
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
      </PromptButton>
    </DeleteFact>
  );
}

export default DeleteFactPrompt;
