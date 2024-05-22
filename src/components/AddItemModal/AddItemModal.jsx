import "./AddItemModal.css";
import ModalWithForm from "../ModalWIthForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
const AddItemModal = ({ onClose, onAddItem, isOpen }) => {
  const inputValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, handleChange, errors, isValid } = useForm(inputValues);

  const { name, imageUrl, weather } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAddItem(values);
    }
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          minLength="1"
          maxLength="30"
        />
        <span className="modal__input_error">{errors.name}</span>
      </label>
      <label htmlFor="imageUrl" id="ImageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image Url"
          value={imageUrl}
          onChange={handleChange}
        />
        <span className="modal__input_error">{errors.imageUrl}</span>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__input_type_radio">
          <input
            name="weather"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            placeholder="hot"
            checked={weather === "hot"}
            onChange={handleChange}
            required
          />{" "}
          Hot
          <span className="modal__input_error"></span>
        </label>
        <label htmlFor="warm" className="modal__label modal__input_type_radio">
          <input
            name="weather"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            placeholder="warm"
            checked={weather === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
          <span className="modal__input_error"></span>
        </label>
        <label htmlFor="cold" className="modal__label modal__input_type_radio">
          <input
            name="weather"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            placeholder="cold"
            checked={weather === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
          <span className="modal__input_error"></span>
        </label>
        <button
          type="submit"
          className="modal__button-add"
          disabled={!isValid}></button>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
