import { Link } from "react-router-dom"

import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePassword: '',
  },onRegisterSubmit );

  return (
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        <form className="register-form" method="POST" onSubmit={onSubmit}>

          <label htmlFor="email"></label>
          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="register-password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="re-password"></label>
          <input
            type="password"
            id="repeat-password"
            name="rePassword"
            placeholder="Repeat password"
            value={values.rePassword}
            onChange={changeHandler}
          />
          <input className="submit" type="submit" value="Register" />
          <p className="message">
            Already have a profile?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  )
}