import { Link, useLocation } from "react-router-dom";
import pageLogo from "../../images/header-logo.svg";

function Header() {
  let location = useLocation();

  return (
    <header className="header">
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
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
