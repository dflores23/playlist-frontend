/*----------------------------------
   Variables
----------------------------------*/

import CustomButton from "../components/CustomButton"
import { Link, useNavigate, Outlet } from "react-router-dom"
import Newform from "../components/Newform"
import Form from "../components/Newform"
import Search from "../components/Search"


const Index =props => {
  const navigate = useNavigate()


  const removePlaylist = (e) => {
    props.deletePlaylist(e.target.id)
    navigate("/")
  }

  const loaded = () => (
    props.playlists.map((playlist) => {

      const { _id, playlistName, genre, artist, album, image, url } = playlist

    
      return (
        <div key={_id} className="playlist">
          <Outlet/>
          <Link to={"/playlist/"+_id}><p>{playlistName}</p></Link>
          <p className="userName">{playlist.userName}</p>
          <CustomButton buttonText="delete" buttonFunction={removePlaylist} buttonType= "delete-btn" className="deleteButton"/>
         
        </div>
      )
    })
  )

  const loading = () => {
    return <h1>Loading...</h1>;
  };   


  return (
    <>
    <div className="outterContainer">
      <h1>List of Playlists:</h1>
      <div className="playlistsContainer">
        {props.playlists ? loaded() : loading()}
      </div>
    </div>
    </>
  )
}

export default Index
