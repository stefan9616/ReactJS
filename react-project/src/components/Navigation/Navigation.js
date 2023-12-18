import { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

export const Navigation = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <div className="logo">
        <Link to="/"><img src="./images/raceLogo.jpg" alt="pic" /></Link>
      </div>
      <nav>
        <div>
        <Link to="/dashboard">All Racers</Link>
        </div>
        {isAuthenticated && (
          <div className="users">
            <span>Welcome: {userEmail}</span>
            <Link to="/create-racer">Add Racer</Link>
            <Link to="/logout">Logout</Link>
          </div>
        )}

        {!isAuthenticated && (
          <div className="guests">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  )
}