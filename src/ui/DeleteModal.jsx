import { useDeleteFact } from "../hooks/useDeleteFact";

function DeleteModal({ id, setShowModal }) {
  const { isDeleting, deleteFact } = useDeleteFact();

  function handleDelete() {
    deleteFact(id);
    setShowModal(false);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__header">Warning!</div>
        <p>
          Are you sure you want to delete this fact?
          <br />
          This action cannot be undone.
        </p>
        <button
          onClick={() => {
            setShowModal(false);
          }}
          disabled={isDeleting}
        >
          Cancel
        </button>
        <button onClick={handleDelete} disabled={isDeleting}>
          Delete
        </button>
      </div>
    </>
  );
}

export default DeleteModal;
