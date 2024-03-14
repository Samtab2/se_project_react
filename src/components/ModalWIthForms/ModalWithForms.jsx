import "./ModalWithForms.css";

function ModalWithForms({
  children,
  buttonText,
  title,
  activeModal,
  HandleCloseClick,
}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={HandleCloseClick} className="modal__close">
          Close
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForms;
