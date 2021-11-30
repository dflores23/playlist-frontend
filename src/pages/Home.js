import { useNavigate } from "react-router"
import { useEffect} from "react"

const Home = (props) => {

  let navigate = useNavigate()
  let gravy = null
  let biscuits = 0



  useEffect(()=> gravy ? navigate("/playlist") : (biscuits += 1),[])
  
  
  
  return (
    <>
      
      <h1 className="home-title">Welcome to Vidster</h1>
      <h3>A social video saving, bookmarking, and playlisting app</h3>
      <h3>Login to begin creating your personal playlists</h3>
    </>
  );
}
export default Home