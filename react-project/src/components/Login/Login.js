import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"

import { useContext } from "react"
import { Link } from "react-router-dom"

const LoginFormKeys = {
  Email:'email',
  Password:'password',
}

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit} = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]:'',
  }, onLoginSubmit);

  return (
    <section id="login">
      <div className="form">
        <h2>Login</h2>

        <form className="login-form" method="POST" onSubmit={onSubmit} >
          <label htmlFor="login-email"></label>
          <input
            type="email"
            name={LoginFormKeys.Email}
            id="login-email"
            placeholder="Email"
            value={values[LoginFormKeys.Email]}
            onChange={changeHandler}
          />

          <label htmlFor="login-password"></label>
          <input
            type="password"
            name={LoginFormKeys.Password}
            id="login-password"
            placeholder="Password"
            value={values[LoginFormKeys.Password]}
            onChange={changeHandler}
          />

          <input type="submit" className="submit" value="Login" />
          <p className="message">
            Don't have profile?
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}