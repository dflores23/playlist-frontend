import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Route, Routes, Outlet, useParams, useLocation } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import VidIndex from "../pages/VidIndex"
  


const Main = props => {
  //Playlists state
  const [playlists, setPlaylists] = useState(null)
  //Videos state
  const [videos, setVideos] = useState(null)
  //params State
  

  const playlistId = useLocation().pathname.slice(10)




  const URL = "https://playlist-backend1.herokuapp.com/playlist/";


  
  const getPlaylists = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    console.log(data)
    setPlaylists(data)
  }

  const getVideos = async () => {
    const response = await fetch(URL + playlistId);
    const data = await response.json()
    console.log(data)
    setVideos(data)
  }

  const createPlaylist = async (playlist) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playlist)
    })
    getPlaylists()
  }

  const deletePlaylist = async (id) => {
    await fetch(URL + id, {
      method: "delete"
    })
    getPlaylists()
  }

  useEffect(() => getPlaylists(), []);


  useEffect(() => getVideos(), []);
 

  return (
    <main>
      <Routes>
        <Route path="playlist" element={<><Outlet/></>}>
          <Route
            path=""
            element={
              <Index
                playlists={playlists}
                createPlaylist={createPlaylist}
                deletePlaylist={deletePlaylist}
              />
            }
          />
          <Route path=":id" element={
            <VidIndex videos={videos} />
          } />
        </Route>
      </Routes>
    </main>
  );

  

}

export default Main