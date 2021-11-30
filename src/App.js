import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom"


function App() {
  //Playlists state
  const [playlists, setPlaylists] = useState(null);
  //Videos state
  const [videos, setVideos] = useState(null);
  
  const playlistId = useLocation().pathname.slice(10);
  

  const URL = "https://playlist-backend1.herokuapp.com/playlist/";

  const getPlaylists = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setPlaylists(data);
  };

  const getVideos = async () => {
    const response = await fetch(URL + playlistId);
    const data = await response.json();
    console.log(data);
    setVideos(data);
  };

  const createPlaylist = async (playlist) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    });
    getPlaylists();
  };

  const createVideo = async (video) => {
    await fetch(URL + "newvideo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    });
    getPlaylists();
  };

  const deletePlaylist = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getPlaylists();
  };
  const deleteVideo = async (slug) => {
    await fetch(URL + slug, {
      method: "delete",
    });
    getVideos();
  };
  
  useEffect(() => getPlaylists(), []);

  useEffect(() => getVideos(), []);
  return (
    <div className="App">
      <Header playlists={playlists}/>
      <Main
        createPlaylist={createPlaylist}
        deletePlaylist={deletePlaylist}
        deleteVideo={deleteVideo}
        playlists={playlists}
        videos={videos}
        createVideo={createVideo}
        getVideos = {getVideos}
      />
    </div>
  );
}

export default App;

