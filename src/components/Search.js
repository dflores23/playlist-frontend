import VideoCard from "./VideoCard"
import {useState} from "react"
require('dotenv').config()

const Search = (props) => {
  const apiKey = process.env.REACT_APP_APIKEY
  const [searchPhrase, setSearchPhrase] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const getResults = async (term) => {
    term = term.split(" ").join("%20")
    console.log(term)
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&key=${apiKey}`
      );
      const data = await response.json()
      console.log(data);
      setSearchResults(data.items)
  };


  
  
    const displayResults = () => (
      searchResults.map((searchResult) => {
        
        const { id, snippet } = searchResult
        let title = snippet.title.replaceAll('&#39;', "'")

        const source = `https://www.youtube.com/embed/${id.videoId}`
        return (
          <VideoCard key={id} vidSource={source} vidTitle={title} videoInfo={searchResult} />
        )

      })
    )
  
  const handleSearch = async(event) => {
    event.preventDefault()
    await getResults(searchPhrase)


    setSearchPhrase("");
  
  }

  const handleChange = event => {
    setSearchPhrase( event.target.value )

  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search on Youtube"
          value={searchPhrase}
          onChange={handleChange}
        />
        <input type="submit" value="search"></input>
      </form>

      {searchResults.length > 1 ? displayResults() : <h1>Search Now</h1>}
    </>
  );


} 

export default Search