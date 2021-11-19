/*----------------------------------
   Variables
----------------------------------*/


import { Link, useNavigate } from "react-router-dom"
import Form from "../components/Newform"

const Index =props => {
  const navigate = useNavigate()

  console.log(props.playlists)

  const removePlaylist = (e) => {
    props.deletePlaylist(e.target.id)
    navigate("/")
  }

  const loaded = () => (
    props.playlists.map((playlist) => {
      const { _id, name, genre, artist, album, image, url } = playlist
      console.log(name)
      return (
        <div key={_id} className="playlist">
          <p>{name}, {album}</p> 
        </div>
      )
    })
  )
  console.log(loaded)

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
