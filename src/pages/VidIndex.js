/*----------------------------------
   Variables
----------------------------------*/


import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Newform from "../components/Newform"
import Form from "../components/Newform"
import Search from "../components/Search"
import VideoCard from "../components/VideoCard"
import CustomButton from "../components/CustomButton"

const VidIndex = props => {
  const navigate = useNavigate()

  const {getVideos} = props



  const removeVideo = (e) => {
    props.deletePlaylist(e.target.id)
    navigate("/")
  }


  useEffect(()=> getVideos(props.videos), [])


  const loaded = () => (
    props.videos.map((video) => {
      console.log("video:", video)
      const { _id, vidName, genre, artist, album, image, vidUrl, playlistID } = video
      console.log("id: ",_id)
    
      return (
        <div key={_id} className="video-card">
          <VideoCard vidSource={vidUrl} vidTitle={vidName} />
          <CustomButton
            buttonText="delete video"
            buttonFunction={props.deleteVideo}
            buttonType="delete-btn"
            _id = {`${playlistID}/${_id}`}
          />
        </div>
      );
    })
  )


  const loading = () => {
    return <h1>Loading...</h1>;
  };   


  return (
    <>
      <h1></h1>
      {props.videos ? loaded() : loading()}
    </>
  );
}

export default VidIndex
