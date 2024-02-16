import { useDeleteFact } from "../hooks/useDeleteFact";

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
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal">
        <div className="modal__header">Warning!</div>
        <p>
          Are you sure you want to delete this fact?
          <br />
          This action cannot be undone.
        </p>
        <div className="modal__buttons">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            className="btn--delete"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
