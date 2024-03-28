import "./AddItemModal.css";
import React from "react";
import ModalWithForm from "../ModalWIthForm/ModalWithForm";

const AddItemModal = (closeActiveModal, onAddItem, isOpen) => {
  const [name, setName] = React.useState("");
  const handleNameChange = (e) => {
    console.log(e);
    setName(e);
  };

  const [link, setUrl] = React.useState("");
  const handleUrlChange = (e) => {
    setUrl(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={closeActiveModal}
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
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="ImageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image Url"
          value={link}
          onChange={handleUrlChange}
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
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
