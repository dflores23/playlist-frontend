import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Header(props) {
    return <div>
        <Navbar/>
        <Link to="/"><h1 className="header">myPlaylist</h1></Link>
    </div>
}

export default Header