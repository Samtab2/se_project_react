import { useForm } from "../../hooks/useForm";
import ModalWithForm from "./ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({ onClose, isOpen, updateUser }) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      updateUser(values);
      resetForm({
        name: "",
        avatar: "",
      });
    }
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label htmlFor="name" id="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={values}
          onChange={handleChange}
          className="modal__input"
          placeholder="Name"
          required
        />
        <span className="modal__input_error">{errors.name}</span>
      </label>
      <label htmlFor="avatar" id="avatar" className="modal__label">
        Avatar
        <input
          type="url"
          name="avatar"
          value={values}
          onChange={handleChange}
          className="modal__input"
          placeholder="Avatar Url"
          required
        />
        <span className="modal__input_error">{errors.avatar}</span>
      </label>
      <button
        type="submit"
        className="EditProfile__button"
        disabled={!isValid}></button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
