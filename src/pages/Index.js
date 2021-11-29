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
          <CustomButton buttonText="delete" buttonFunction={removePlaylist} buttonType= "delete-btn" />
         
        </div>
      )
    })
  )

  const loading = () => {
    return <h1>Loading...</h1>;
  };   


  return (
    <>
      <h1>Index</h1>
      {props.playlists ? loaded() : loading()}
    </>
  )
}

export default Index
