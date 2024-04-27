import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const EditProfileModal = ({ onClose, isOpen, updateUser }) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(values);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="modal__input"
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <input
          type="url"
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
          className="modal__input"
          placeholder="Avatar Url"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
