import { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = props => {
  const [vidPlaylists, setVidplaylists] = useState(null)
  
  const { URL, APIKEY } = process.env;

  return (
    <h1>MAIN</h1>
  )

  

}

export default Main