import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar"

function Header(props) {
    return <header>
        <Navbar {...props}/>
    </header>
}

export default Header