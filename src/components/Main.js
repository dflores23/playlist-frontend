import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Route, Routes, Outlet, useParams, useLocation } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import VidIndex from "../pages/VidIndex"
import Search from "./Search";
import Login from "../pages/Login"
import Newform from "./Newform";
  


const Main = props => {
  const {createVideo, createPlaylist, deletePlaylist, playlists, videos} = props



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
          <Route path="newvideo" element={
            <Search playlists={playlists} createVideo={createVideo} />
          } />
          
          <Route path="login" element={
            <Login/>
          } />

        </Route>
        <Route path="newplaylist" element={
          <Newform playlist={playlists}/>
        } />

      </Routes>
    </main>
  );

  

}

export default Main