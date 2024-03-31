import "./ItemModal.css";

function ItemModal({ onDelete, item, onClose }) {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
        </button>
        <img src={item.imageUrl} alt={item.name} className="modal__image" />
        <div className="modal__footer">
           <h2 className="modal__caption">{item.name}</h2>
           <div className="modal__content-name">
           {" "} {item.name}
           <button onClick={onDelete} type="button" className="modal__delete"> Delete item</button>
           <p className="modal__weather"> Weather: {item.weather}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
