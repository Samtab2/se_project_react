
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ onDelete, onClose, onConfirm, isOpen }) {


  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <p className="modal__text">
          Are you sure you want to delete {onDelete.name}?
        </p>
        <div className="modal__buttons">
          <button type="button" className="modal__button"  onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="modal__button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteConfirmationModal;
