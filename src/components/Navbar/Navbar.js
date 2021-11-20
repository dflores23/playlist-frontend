import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
    return <nav className="navBar">
        <h3 className="logo">App name or Logo</h3>
        <ul className="nav-links">
            <Link to="/" className="logout">
                <li>logout</li>
            </Link>
            <Link to="/" className="newPlaylist">
                <li>New Playlist</li>
            </Link>
            <Link to="/" className="myPlaylist">
                <li>My Playlist</li>
            </Link>
        </ul>
    </nav>
}

export default Navbar