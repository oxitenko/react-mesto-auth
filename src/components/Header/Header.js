import pageLogo from "../../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#topofpage">
        <img className="header__logo" src={pageLogo} alt="логотип страницы" />
      </a>
    </header>
  );
}

export default Header;
