import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { FaStream, FaMusic } from "react-icons/fa";

<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&family=Lato:wght@100&display=swap" rel="stylesheet"/>

    
    function Navbar(props) {
        const [isMobile, setIsMobile] = useState(true);

    return <nav className="navbar">
        <Link to="/home"className="logo"><FaMusic /></Link>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(!isMobile)}>
            <Link to="/search" className="search">
                <li>Search</li>
            </Link>
            <Link to="/home" className="home">
                <li>Home</li>

            </Link>
            <Link to="/newplaylist" className="newPlaylist">
                <li>New Playlist</li>
            </Link>
            <Link to="/playlist" className="playlistNav">
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
