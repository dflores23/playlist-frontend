import { useState } from "react";
const VideoCard = props => {
  const { vidSource, vidTitle, playlists, videoInfo, createVideo } = props
  const vidChannel = props.search ? videoInfo.snippet.channelTitle: ""
  const [video, setVideo] = useState({
    playlistName: "",
    vidComments: "",
    playlistID: "",
    vidRating: "",
    vidUrl: vidSource,
    vidChannel: vidChannel
  });
  // console.log("This is vidSource: " + vidSource)
  // console.log("This is vidTitle: " + vidTitle)
  // console.log(vidSource, vidTitle)
  const handleChange = (event) => {
    setVideo({
      ...video,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddToPlaylist = (event) => {
    event.preventDefault();
    let videoCorrected = video;
    videoCorrected.playlistID = playlists
      .filter(playlist=> playlist.playlistName === videoCorrected.playlistName )[0]._id
    console.log(videoCorrected);

    createVideo(videoCorrected)
  };
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
        </datalist>
      </>
    );
  };

  const displayForm = () => (
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

          <input type="hidden" value={videoInfo.snippet.channelTitle} name="vidChannel" />
          <input type="hidden" value={vidSource} name="vidUrl" />
          <input type="hidden" value="" name="playlistID" />
          <input type="submit" value="+" />
        </form>

  )

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
        {props.search ? displayForm(): <></>}
    </>
  );

}

export default VideoCard