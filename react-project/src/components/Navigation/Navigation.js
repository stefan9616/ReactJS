import { Link } from "react-router-dom"

export const Navigation = () => {
    return(
        <header>
        <div className="logo">
          <Link to="/"><img src="./images/raceLogo.jpg" alt="pic" /></Link>
        </div>
        <nav>
          <div>
            <Link to="/dashboard">Racers</Link>
          </div>
          {/* Login users */}
          <div className="users">
            <Link to="/create-racer">Add Racer</Link>
            <Link to="/">Logout</Link>
          </div>
          {/* Guest users */}
          <div className="guests">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
    )
}