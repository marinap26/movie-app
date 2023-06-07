  import React, { useEffect } from "react";
  import Carousel from "./Carousel";
  import GridLayout from "./GridLayout";
  import Error from "../Error";
  import SearchBar from "../Search/SearchBar";
  import GenreFilter from "../Filtering/GenreFilter";
  import YearFilter from "../Filtering/YearFilter";

  export default function Dashboard(){

      const [movies, setMovies] = React.useState([]);
      const [selectedGenre, setSelectedGenre] = React.useState(""); 
      const [selectedYear, setSelectedYear] = React.useState("");
      const [decades, setDecades] = React.useState([]);
      
      useEffect(() => {
        fetch('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json')
          .then(response => response.json())
          .then(data => setMovies(data.movies))
          .catch(error => {
            <Error error={error} />
          })
      }, [])

      useEffect(() => {
        
        function calculateDecades() {
          const years = movies.map((movie) => movie.year);
          const uniqueYears = [...new Set(years)]; 
          const sortedYears = uniqueYears.sort(); 
        
          const uniqueDecades = new Set();
          sortedYears.forEach((year) => {
            const startYear = Math.floor(year / 10) * 10; 
            uniqueDecades.add(`${startYear}s`);
          });
        
          setDecades(Array.from(uniqueDecades));
        };
        calculateDecades();
      }, [movies]);

      const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
      };

      const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
      };
    
      return (
        <>
          <div className="header">
            <h2>Movie World</h2>
            <div className="header-options">
              <SearchBar movies={movies} />
              <div className="header-links">
                <a href="#fav-movies">Favorite Movies</a>
                <a href="#later-movies">Watch later</a>
              </div> 
            </div>
          </div>
          <Carousel movies={movies} />
          <div className="filter-section">
            <GenreFilter  
                selectedGenre={selectedGenre}
                onGenreChange={handleGenreChange}/>
            <YearFilter 
              selectedYear={selectedYear} 
              onYearChange={handleYearChange} 
              decades={decades} />
          </div>
          <GridLayout movies={movies} selectedGenre={selectedGenre} selectedYear={selectedYear}/>
        </>
      );
    }