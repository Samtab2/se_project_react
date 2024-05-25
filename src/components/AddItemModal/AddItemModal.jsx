import "./AddItemModal.css";
import ModalWithForm from "../ModalWIthForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({
  onClose,
  onAddItem,
  isOpen,
  buttonText,
  isLoading,
}) => {
  const inputValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useForm(inputValues);

  const { name, imageUrl, weather } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAddItem(values);
    }

    if (isOpen) {
      resetForm(inputValues);
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText={buttonText}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}>
      <label htmlFor="name" id="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className={`modal__input ${errors.name ? "modal__input_error" : ""}`}
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          minLength="1"
          maxLength="30"
        />
        {errors.name && (
          <span className="modal__input_error-message">{errors.name}</span>
        )}
      </label>
      <label htmlFor="imageUrl" id="ImageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className={`modal__input ${
            errors.imageUrl ? "modal__input_error" : ""
          }`}
          name="imageUrl"
          placeholder="Image Url"
          value={imageUrl}
          onChange={handleChange}
        />
        {errors.imageUrl && (
          <span className="modal__input_error-message">{errors.imageUrl}</span>
        )}
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          id="hot"
          className="modal__label modal__input_type_radio">
          <input
            name="weather"
            type="radio"
            className={`modal__radio-input ${
              errors.weather ? "modal__input_error" : ""
            }`}
            value="hot"
            placeholder="hot"
            checked={weather === "hot"}
            onChange={handleChange}
            required
          />{" "}
          Hot
        </label>
        <label
          htmlFor="warm"
          id="warm"
          className="modal__label modal__input_type_radio">
          <input
            name="weather"
            type="radio"
            className={`modal__radio-input ${
              errors.weather ? "modal__input_error" : ""
            } `}
            value="warm"
            placeholder="warm"
            checked={weather === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label
          htmlFor="cold"
          id="cold"
          className="modal__label modal__input_type_radio">
          <input
            name="weather"
            type="radio"
            className={`modal__radio-input ${
              errors.weather ? "modal__input_error" : ""
            } `}
            value="cold"
            placeholder="cold"
            checked={weather === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
        </label>
        {errors.weather && (
          <span className="modal__input_error-message">{errors.weather}</span>
        )}
        <button
          type="submit"
          className="modal__button-add"
          disabled={!isValid}></button>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
