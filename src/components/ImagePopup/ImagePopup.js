function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_img-view ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <div className="popup__content popup__content_element-imgview">
        <button
          className="popup__close-button popup__close-button_place_popupview"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__pic"
          src={props.card.link}
          alt={props.card.name}
        />
        <div className="popup__caption">{props.card.name}</div>
      </div>
    </div>
  );
}

export default ImagePopup;
