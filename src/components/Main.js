import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
require("dotenv").config();
console.log(process.env.URL)
const { APIKEY } = process.env;
 
const Main = props => {
  const [playlists, setPlaylists] = useState(null)

  const URL = "https://playlist-backend1.herokuapp.com/playlist/";
  
 
  console.log(process.env)
  console.log("URL:",URL)

  const getPlaylists = async () => {
    const response = await fetch(URL);
    const data = await response.json()
    console.log(data)
    setPlaylists(data)
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

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index playlists={playlists} createPlaylist={createPlaylist} deletePlaylist={deletePlaylist}/>}
        />
      </Routes>
    </main>
  )

  

}

export default Main