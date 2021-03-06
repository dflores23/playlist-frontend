import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Route, Routes, Outlet, useParams, useLocation } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import VidIndex from "../pages/VidIndex"
import Search from "./Search";
import Login from "../pages/Login"
import Newform from "./Newform";
  

import Home from "../pages/Home"
// import Signup from "../pages/Signup"


const Main = props => {
  const {createVideo, createPlaylist, deletePlaylist, playlists, videos, getVideos, deleteVideo, updateVideo} = props



  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="playlist"
          element={
            <>
              <Outlet />
            </>
          }
        >
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


          <Route path="newvideo" element={
            <Search playlists={playlists} createVideo={createVideo} />
          } />
          
          <Route path="login" element={
            <Login/>
          } />


          <Route
            path=":id"
            element={<VidIndex updateVideo={updateVideo} videos={videos} getVideos={getVideos} deleteVideo={deleteVideo} playlists={playlists}/>}
          />

          <Route path="login" element={<Login />} />

          {/* <Route path="signup" element={
            <Signup/>
          } /> */}
        </Route>

          <Route path="newplaylist" element={
          <Newform addPlaylist={createPlaylist} playlist={playlists}/>
          } />
        <Route
          path="search"

          element={<Search playlists={playlists} createVideo={createVideo} />}
        />
      </Routes>
    </main>
  );

  

}

export default Main