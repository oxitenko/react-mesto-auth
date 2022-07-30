import successIcon from "../../images/success-icon.svg";
import errorIcon from "../../images/error-icon.svg";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_${props.name} 
          ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__content">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <div className="popup__authmessage">
          <>
            <img
              className="popup__authicon"
              src={props.status ? successIcon : errorIcon}
              alt="Логотип успешной регистрации"
            />
            <h2 className="popup__title popup__title_type_element-auth">
              {props.status
                ? "Вы успешно зарегистрировались!"
                : "Что-то пошло не так! Попробуйте ещё раз."}
            </h2>
          </>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
