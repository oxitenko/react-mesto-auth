function Login() {
  return (
    <div className="auth-form__container">
      <p className="auth-form__title">Вход</p>
      <form
        className="auth-form__login"
        name="auth-form__login"
        method="post"
        action="#"
      >
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="email"
            name="login-email"
            id="login-email"
            autoComplete="email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="auth-form__input-container">
          <input
            className="auth-form__input"
            type="password"
            name="login-password"
            id="login-password"
            autoComplete="current-password"
            placeholder="Пароль"
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
