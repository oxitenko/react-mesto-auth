function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} 
      ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__content">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>

        <form
          className={`popup__form popup__form_element-${props.name}`}
          name={`popup__form_element-${props.name}`}
          method="post"
          action="#"
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            type="submit"
            className="popup__submit-button"
            aria-label={props.button}
          >
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
