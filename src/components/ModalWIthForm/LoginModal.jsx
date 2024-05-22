import { useForm } from "../../hooks/useForm";
import ModalWithForm from "./ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ onClose, isOpen, onLogin, onRegisterClick, errorMessage }) => {
  const { values, handleChange, errors, isValid } = useForm({
    email: "",
    password: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
    onLogin(values);
    }
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
        <span className="modal__input_error">{errors.email}</span>
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
        <span className="modal__input_error">{errors.password}</span>
      </label>
      <p className="modal__error">{errorMessage}</p>
      <button type="submit"  className="Login__button" disabled={!isValid}></button>
      <button type="button"  onClick={onRegisterClick} className="Or-Sign-Up__button"></button>
    </ModalWithForm>
  );
};

export default LoginModal;
