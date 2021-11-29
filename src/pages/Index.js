/*----------------------------------
   Variables
----------------------------------*/


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
          <button id={_id} onClick={removePlaylist}>Delete</button>
         
        </div>
      )
    })
  )

  const loading = () => {
    return <h1>Loading...</h1>;
  };   


  return (
    <>
      <h1>Find your video</h1>
      <Search/>
      <Newform />
      {props.playlists ? loaded() : loading()}
    </>
  )
}

export default Index
