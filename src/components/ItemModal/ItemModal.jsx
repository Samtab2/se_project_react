import "./ItemModal.css";

function ItemModal({ onDelete, card, onClose }) {
  return (
    <div className="modal__content">
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
           <h2 className="modal__caption">{card.name}</h2>
           <button onClick={onDelete} type="button" className="modal__delete"> Delete item </button>
           <p className="modal__weather"> Weather: {card.weather}</p>
        </div>
        </div>
    </div>
  );
}

export default ItemModal;
