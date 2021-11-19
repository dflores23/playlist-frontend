import { Link } from "react-router-dom";

function Header(props) {
    return <div>
        <Link to="/"><h1 className="header">Playlist</h1></Link>
    </div>
}

export default Header