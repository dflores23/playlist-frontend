import { Link } from "react-router-dom";
import "./Navbar.css"
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&family=Lato:wght@100&display=swap" rel="stylesheet"/>

    
    function Navbar(props) {
    return <nav className="navBar">
        <h3 className="logo">App name or Logo</h3>
        <ul className="nav-links">
            <Link to="/newplaylist" className="newPlaylist">
                <li>New Playlist</li>
            </Link>
            <Link to="/myplaylist" className="myPlaylist">
                <li>My Playlist</li>
            </Link>
            <Link to="/signup" className="signup">
                <li>Sign Up</li>
            </Link>
            <Link to="/login" className="login">
                <li>Login</li>
            </Link>
        </ul>
    </nav>
}

export default Navbar