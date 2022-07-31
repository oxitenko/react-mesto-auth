import { useLocation } from "react-router-dom";
import humburgerMenu from "../../images/hum-menu.svg";
import closeIcon from "../../images/popup-close-icon.svg";

function MobileHeader(props) {
  let location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <div className="humburger-menu__container">
          {props.menu && (
            <>
              <p className="header__email">{props.loggedIn.email}</p>
              <p onClick={props.onLoguot} className="header__outlink">
                Выйти
              </p>
            </>
          )}
        </div>
      )}
      {location.pathname === "/" && (
        <>
          {props.menu ? (
            <img
              className="humburger-menu__icon humburger-menu__icon_type_close"
              src={closeIcon}
              alt="Иконка закрытия меню"
              onClick={props.toggleMenu}
            />
          ) : (
            <img
              className="humburger-menu__icon"
              src={humburgerMenu}
              alt="Иконка меню"
              onClick={props.toggleMenu}
            />
          )}
        </>
      )}
    </>
  );
}

export default MobileHeader;
