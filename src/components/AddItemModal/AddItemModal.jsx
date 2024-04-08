import "./AddItemModal.css";
import { useState } from "react";  
import ModalWithForm from "../ModalWIthForm/ModalWithForm";
import { useForm } from "../hooks/useForm"

const AddItemModal = ({ onClose, onAddItem, isOpen }) => {
   const initialValues = {
    name: "",
    imageUrl: "",
    weather: "cold",
  };
  const { values, handleChange, setValues } = useForm(initialValues);

  const { name, imageUrl, weather } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    setValues(initialValues);
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
          placeholder="Name"
          value={name}
          onChange={handleChange}
          minLength="1"
          maxLength="30"
        />
      </label>
      <label htmlFor="ImageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image Url"
          value={imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__input_type_radio">
          <input
            name="temperature"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__input_type_radio">
          <input
            name="temperature"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__input_type_radio">
          <input
            name="temperature"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
