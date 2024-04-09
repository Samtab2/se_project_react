import { useEscape } from "../../components/hooks/useEscape";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  onClose,
  isOpen,
  onSubmit,
  closeModal,
}) {
  useEscape(closeModal);

  {
    return (
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          <button onClick={onClose} type="button" className="modal__close" />
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button type="submit" className="modal__submit-button"></button>
          </form>
        </div>
      </div>
    );
  }
}
export default ModalWithForm;
