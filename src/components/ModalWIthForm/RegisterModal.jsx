import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ onClose, isOpen, onRegister }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
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
    onRegister(values);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      buttonText2="or Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          title="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="modal__input"
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="modal__input"
          placeholder="Password"
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
export default RegisterModal;
