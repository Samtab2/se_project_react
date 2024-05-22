import { useForm } from "../../hooks/useForm";
import ModalWithForm from "./ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({ onClose, isOpen, updateUser }) => {
  const { values, handleChange, errors, isValid } = useForm({
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
    updateUser(values);
    }
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
        <span className="modal__input_error">{errors.name}</span>
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
      <button type="submit" className="EditProfile__button" disabled={!isValid}></button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
