import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaStream, FaMusic } from "react-icons/fa";

<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&family=Lato:wght@100&display=swap" rel="stylesheet"/>

    
    function Navbar(props) {
        const [isMobile, setIsMobile] = useState(true);

    return <nav className="navbar">
        <h3 className="logo"><FaMusic/></h3>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(!isMobile)}>
            <Link to="/newplaylist" className="newPlaylist">
                <li>New Playlist</li>
            </Link>
            <Link to="/playlist" className="playlist">
                <li>Playlist</li>
            </Link>
            <Link to="/signup" className="signup">
                <li>Sign Up</li>
            </Link>
            <Link to="/login" className="login">
                <li>Login</li>
            </Link>
        </ul>
        <button className="menu-icon-button" onClick={() => setIsMobile(!isMobile)}><FaStream />
        </button>
    </nav>
}

export default Navbar

{/* <button className="mobile-menu-icon" onClick{() => setIsMobile(!isMobile)} >
                {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
            </button> */}