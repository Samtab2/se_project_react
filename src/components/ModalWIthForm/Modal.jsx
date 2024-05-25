import { useEffect } from "react";


export const Modal = ({ name, onClose, children }) => {
  // Escape key listener
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Overlay click listener
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      <div className="modal__content">
        {children}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;