import { useForm } from "../../hooks/useForm";
import ModalWithForm from "./ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  onClose,
  isOpen,
  onLogin,
  onRegisterClick,
  errorMessage,
  onLoginClick,
}) => {
  const inputValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useForm(inputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin(values);
    }

    if (isOpen) {
      resetForm(inputValues);
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
      <button
        type="submit"
        className="Login__button"
        onClick={onLoginClick}
        disabled={!isValid}></button>
      <button
        type="button"
        onClick={onRegisterClick}
        className="Or-Sign-Up__button"></button>
    </ModalWithForm>
  );
};

export default LoginModal;
