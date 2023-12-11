import { useState } from "react"
import {Link} from "react-router-dom"

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const onUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }
    return (
        <section id="login">
            <div className="form">
              <h2>Login</h2>

              <form className="login-form" onSubmit={onSubmit} >
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Email"
                  value={username}
                  onChange={onUsernameChange}
                />

                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="Password"
                  value={password}
                  onChange={onPasswordChange}
                />

                <input className="submit" type="submit"  value="Login"/>
                <p className="message">
                  Don't have profile?
                  <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </section>
    )
}