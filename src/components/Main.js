import { getByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Route, Routes, Outlet, useParams, useLocation } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import VidIndex from "../pages/VidIndex"
import Search from "./Search";
import Login from "../pages/Login"
import Home from "../pages/Home"
// import Signup from "../pages/Signup"


const Main = props => {
  const {createVideo, createPlaylist, deletePlaylist, playlists, videos, getVideos} = props



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
          <Route
            path=":id"
            element={<VidIndex videos={videos} getVideos={getVideos} />}
          />

          <Route path="login" element={<Login />} />

          {/* <Route path="signup" element={
            <Signup/>
          } /> */}
        </Route>
        <Route
          path="newplaylist"
          element={<Search playlists={playlists} createVideo={createVideo} />}
        />
      </Routes>
    </main>
  );

  

}

export default Main