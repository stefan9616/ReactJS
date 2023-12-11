import { useState } from "react";
import {Link} from "react-router-dom"

export const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('')

  const onEmailChange = (e) => {
    setEmail(e.target.value);

  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onRePassChange = (e) =>{
    setRePass(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id="register">
      <div className="form">
        <h2>Register</h2>
        <form className="register-form" onSubmit={onSubmit}>

          <label htmlFor="email"></label>
          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="register-password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
          />

          <label htmlFor="re-password"></label>
          <input
            type="password"
            id="repeat-password"
            name="re-password"
            placeholder="Repeat password"
            value={rePass}
            onChange={onRePassChange}
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