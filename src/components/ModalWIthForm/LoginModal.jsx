import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose, isOpen, onLogin, }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    onLogin(values);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      buttonText2="or Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
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
      <button type="submit"  className="Login__button"></button>
      <button type="submit" className="Or-Sign-Up__button"></button>
    </ModalWithForm>
  );
};

export default LoginModal;
