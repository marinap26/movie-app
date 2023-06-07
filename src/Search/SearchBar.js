import React from "react";
import SearchResults from "./SearchResults";

export default function SearchBar({movies}){

    const [searchQuery, setSearchQuery] = React.useState("")
    const [searchResults, setSearchResults] = React.useState([])

    function handleChange(e){
        setSearchQuery(e.target.value)
    }

    function handleSearch() {
        const searchedMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(searchedMovies);
      }

    return (
        <>
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleChange}/>
                <button onClick={handleSearch}>&#x1F50D;</button>
            </div>
            <div className="search-results">
                {searchResults && <SearchResults searchResults={searchResults} />}
            </div>
        </>
    )
}


