import { useForm } from "../../hooks/useForm";
import ModalWithForm from "./ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ onClose, isOpen, onRegister, onLoginClick }) => {
  const { values, handleChange, errors, isValid } = useForm({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister(values);
    }
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
          placeholder="Name"
          required
        />
        <span className="modal__input_error">{errors.name}</span>
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
        <span className="modal__input_error">{errors.avatar}</span>
      </label>
      <button
        type="submit"
        className="SignUp__button"
        disabled={!isValid}></button>
      <button
        type="button"
        onClick={onLoginClick}
        className="Or-Login__button"></button>
    </ModalWithForm>
  );
};
export default RegisterModal;
