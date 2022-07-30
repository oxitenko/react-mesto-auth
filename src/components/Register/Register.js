import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(registerData);
  }

  return (
    <div className="auth-form__container">
      <p className="auth-form__title">Регистрация</p>
      <form
        className="auth-form__register"
        name="auth-form__register"
        method="post"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="email"
            name="email"
            id="register-email"
            autoComplete="email"
            placeholder="Email"
            onChange={handleChange}
            value={registerData.email}
            required
          ></input>
        </div>
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="password"
            name="password"
            id="register-password"
            autoComplete="new-password"
            placeholder="Пароль"
            onChange={handleChange}
            value={registerData.password}
            required
          ></input>
        </div>
        <button
          className="auth-form__submitbutton"
          type="submit"
          aria-label="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="auth-form__regnote">
        Уже зарегистрированы?{" "}
        <Link className="auth-form__link" to="/signin">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
