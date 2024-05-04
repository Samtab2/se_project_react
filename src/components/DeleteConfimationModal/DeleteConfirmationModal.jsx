import "./DeleteConfirmationModal.css"



function DeleteConfirmationModal({ cardToDelete, onCancel, onConfirm }) {
    return (
     <div className="modal-overlay">
     <div className="modal">
     <div className="modal__content">
     <p className="modal__text">
     Are you sure you want to delete {cardToDelete.name}?
     </p>
     <div className="modal__buttons">
     <button
     type="button"
     className="modal__button"
     onClick={onCancel}
     >
     Cancel
     </button>
     <button
     type="button"
     className="modal__button"
     onClick={onConfirm}
     >
     Delete
     </button>
     </div>
     </div>

     </div>
     </div>

    );
  }
  export default DeleteConfirmationModal;