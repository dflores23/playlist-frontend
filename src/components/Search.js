
import VideoCard from "./VideoCard";
import { useState } from "react";
import CustomButton from "./CustomButton";
require("dotenv").config();

const Search = (props) => {
  const apiKey = process.env.REACT_APP_APIKEY;
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const getResults = async (term) => {
    term = term.split(" ").join("%20");
    console.log("This is term: " + term);
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&key=${apiKey}`
    );
    const data = await response.json();
    //console.log("This is response: " + response);
    //console.log("This is data: " + data);
    //console.log("This is data: " + data.items);
    setSearchResults(data.items);
  };

  const handleChange = (event) => {
    setSearchPhrase(event.target.value);
  };


  const displayResults = () =>
    searchResults.map((searchResult) => {
      console.log("searchResult:", searchResult);
      const { id, snippet } = searchResult;
      const source = `https://www.youtube.com/embed/${id.videoId}`;
      let title = snippet.title.replaceAll("&#39;", "'");


      return (
        <>
          <VideoCard
            key={id.videoId}
            vidSource={source}
            vidTitle={title}
            videoInfo={searchResult}
            search
            {...props}
          />
        </>
      );
    });

  const handleSearch = async (event) => {
    event.preventDefault();
    await getResults(searchPhrase);

    setSearchPhrase("");
  };

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


      {searchResults.length > 1 ? (
        displayResults()
      ) : (
        <h1>Type in the searchbox above to add videos to your playlist</h1>
      )}

    </>
  );
};

export default Search;
