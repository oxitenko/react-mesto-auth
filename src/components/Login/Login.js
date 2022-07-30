import { useState } from "react";

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData);
  }

  return (
    <div className="auth-form__container">
      <p className="auth-form__title">Вход</p>
      <form
        className="auth-form__login"
        name="auth-form__login"
        method="post"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="email"
            name="email"
            id="login-email"
            autoComplete="email"
            placeholder="Email"
            onChange={handleChange}
            value={loginData.email}
            required
          ></input>
        </div>
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="password"
            name="password"
            id="login-password"
            autoComplete="current-password"
            placeholder="Пароль"
            onChange={handleChange}
            value={loginData.password}
            required
          ></input>
        </div>
        <button
          className="auth-form__submitbutton"
          type="submit"
          aria-label="Войти"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
