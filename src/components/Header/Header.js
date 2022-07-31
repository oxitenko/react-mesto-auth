import { Link, useLocation } from "react-router-dom";
import pageLogo from "../../images/header-logo.svg";

function Header(props) {
  let location = useLocation();

  return (
    <header className={props.menu ? "header__humburger" : "header"}>
      <a href="#topofpage">
        <img className="header__logo" src={pageLogo} alt="логотип страницы" />
      </a>
      {location.pathname === "/signin" ? (
        <Link className="header__link" to="/signup">
          Регистрация
        </Link>
      ) : location.pathname === "/signup" ? (
        <Link className="header__link" to="signin">
          Войти
        </Link>
      ) : location.pathname === "/" ? (
        <div className="header__container">
          <p className="header__email">{props.loggedIn.email}</p>
          <p onClick={props.onLoguot} className="header__outlink">
            Выйти
          </p>
        </div>
      ) : (
        ""
      )}
      {props.children}
    </header>
  );
}

export default Header;
