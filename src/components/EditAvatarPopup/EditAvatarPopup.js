import { useRef, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup(props) {
  const photo = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: photo.current.value,
    });
  }

  useEffect(() => {
    photo.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      button={props.buttonText ? "Сохранение..." : "Сохранить"}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          ref={photo}
          className="popup__input popup__input_enter_avatar"
          type="url"
          name="avatar"
          id="avatar-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
