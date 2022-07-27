import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      name="edit-card"
      title="Редактировать профиль"
      button={props.buttonText ? "Сохранение..." : "Сохранить"}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          value={name}
          onChange={handleChangeName}
          className="popup__input popup__input_enter_name"
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error"></span>
      </div>

      <div className="popup__input-container">
        <input
          value={description}
          onChange={handleChangeDescription}
          className="popup__input popup__input_enter_job"
          type="text"
          name="description"
          id="profi-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profi-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
