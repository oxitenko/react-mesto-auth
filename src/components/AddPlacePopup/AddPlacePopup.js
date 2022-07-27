import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup(props) {
  const [placeName, setPlaceName] = useState("");
  const [linkPlace, setLinkPlace] = useState("");

  function onChangePlaceName(e) {
    setPlaceName(e.target.value);
  }

  function onChangeLinkPlace(e) {
    setLinkPlace(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: linkPlace,
    });
  }

  useEffect(() => {
    setPlaceName("");
    setLinkPlace("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      button={props.buttonText ? "Сохранение..." : "Создать"}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          value={placeName}
          onChange={onChangePlaceName}
          className="popup__input popup__input_enter_placename"
          type="text"
          name="placename"
          id="placename-input"
          placeholder="Название"
          required
        />
        <span className="placename-input-error"></span>
      </div>

      <div className="popup__input-container">
        <input
          value={linkPlace}
          onChange={onChangeLinkPlace}
          className="popup__input popup__input_enter_linkplace"
          type="url"
          name="linkplace"
          id="linkplace-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="linkplace-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
