
const VideoCard = props => {
  const { vidSource, vidTitle } = props
  console.log("This is vidSource: " + vidSource)
  console.log("This is vidTitle: " + vidTitle)
  console.log(vidSource, vidTitle)
  
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={vidSource}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1>{vidTitle}</h1>

      <button >Add to your playlist</button>
    </>
  );

}

export default VideoCard