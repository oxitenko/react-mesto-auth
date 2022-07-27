import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form__container">
      <p className="form__title form__title_type_register">Регистрация</p>
      <form
        className="form__register"
        name="form__register"
        method="post"
        action="#"
      >
        <div className="form__input-container">
          <input
            className="form__input"
            type="email"
            name="register-email"
            id="register-email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="form__input-container">
          <input
            className="form__input"
            type="password"
            name="register-password"
            id="register-password"
            placeholder="Пароль"
            required
          ></input>
        </div>
        <button
          className="form__submitbutton"
          type="submit"
          aria-label="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="form__regnote">
        Уже зарегистрированы?{" "}
        <Link className="form__link" to="/signin">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
