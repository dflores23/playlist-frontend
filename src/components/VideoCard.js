import { useState } from "react";
const VideoCard = props => {

  const { vidSource, vidTitle, playlists, videoInfo, createVideo, updateVideo, thisVid } = props
  const vidChannel = props.search ? videoInfo.snippet.channelTitle: ""
  
  const [video, setVideo] = useState({
    playlistName: "",
    vidComments: "",
    playlistID: "",
    vidRating: "",
    vidName: vidTitle,
    vidUrl: vidSource,
    vidChannel: vidChannel
  });
  
  const [update, setUpdate] = useState(
    !props.search ? (
      {
        playlistName: thisVid.playlistName,
        vidName: vidTitle,
        vidComments: thisVid.vidComments,
        playlistID: thisVid.playlistID,
        vidRating: thisVid.vidRating,
        vidUrl: vidSource,
        vidChannel: vidChannel,
        _id: thisVid._id
      }) : {}
    );
  
  // console.log("This is vidSource: " + vidSource)
  // console.log("This is vidTitle: " + vidTitle)
  // console.log(vidSource, vidTitle)
  const handleChange = (event) => {
    props.search
      ? setVideo({
          ...video,
          [event.target.name]: event.target.value,
        })
      : setUpdate({
          ...update,
          [event.target.name]: event.target.value,
        });
  };

  const handleAddToPlaylist = (event) => {
    event.preventDefault();
    let videoCorrected = video;
    videoCorrected.playlistID = playlists
      .filter(playlist=> playlist.playlistName === videoCorrected.playlistName )[0]._id
    createVideo(videoCorrected)
    setVideo({
    vidComments: "",
    playlistID: "",
    vidRating: "",
    vidUrl: vidSource,
    vidChannel: vidChannel})
  };

  const handleUpdateVideo = (event) => {
    event.preventDefault();
    let updateCorrected = update;
    updateCorrected.playlistID = playlists
      .filter(playlist => playlist.playlistName === updateCorrected.playlistName)[0]._id
    console.log("updateVideo", updateVideo)
    updateVideo(updateCorrected)
    alert("Video Information Updated")
  }
  const getPlaylistOptions = () => {
    return (
      <>
        <input
          list="playlist-options"
          id="playlist-choices"
          placeholder="Choose a Playlist"
          name="playlistName"
          onChange={handleChange}
          required
        />
        <datalist id="playlist-options">
          {playlists.map((playlist) => (
            <option
              value={playlist.playlistName}
              
            />
            ))}
            <option value=""/>
        </datalist>
      </>
    );
  };

  const displayForm = () => {
     return props.search ? (
       <form onSubmit={handleAddToPlaylist}>
         {getPlaylistOptions()}
         <input
           placeholder="Comments"
           value={video.vidComments}
           onChange={handleChange}
           name="vidComments"
           />

         <input
           placeholder="Rating"
           name="vidRating"
           value={video.vidRating}
           onChange={handleChange}
         />

         <input
           type="hidden"
           value={videoInfo.snippet.channelTitle}
           name="vidChannel"
         />
         <input type="hidden" value={vidSource} name="vidUrl" />
         <input type="hidden" value="" name="playlistID" />
         <input type="submit" value="+" />
       </form>
     ) : (
       <form onSubmit={handleUpdateVideo}>
           <input value={update.vidName}
             onChange={handleChange}
             placeholder="Video Name"
             name="vidName"
             />
             {getPlaylistOptions()}
         <input
           placeholder="Comments"
           value={update.vidComments}
           onChange={handleChange}
           name="vidComments"
         />

         <input
           placeholder="Rating"
           name="vidRating"
           value={update.vidRating}
           onChange={handleChange}
         />

         <input
           type="hidden"
           value={update.vidChannel}
           name="vidChannel"
         />
         <input type="hidden" value={vidSource} name="vidUrl" />
         <input type="hidden" value="" name="playlistID" />
         <input type="hidden" value="" name="vidName" />
         <input type="hidden" value="" name="_id" />
         <input type="submit" value="update video" />
       </form>
     );
  }

  return (
    <>
      <h1>{vidTitle}</h1>
      <iframe
        width="560"
        height="315"
        src={vidSource}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen

        ></iframe>
      {props? displayForm() : <h1>Loading</h1>}

    </>
  );

}

export default VideoCard