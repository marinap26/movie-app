import React from "react";
import FavoriteMovies from "../Lists/FavoriteMovies";
import WatchLater from "../Lists/WatchLater";
import watch from "../images/watch.png"

export default function GridLayout({ movies, selectedGenre, selectedYear }) {
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);
  const [watchLater, setWatchLater] = React.useState([]);

  function addFavoriteMovie(movie) {
    if (!favoriteMovies.find((favMovie) => favMovie.id === movie.id)) {
      setFavoriteMovies((prevFavoriteMovies) => [...prevFavoriteMovies, movie]);
    }
  }  

  function removeFavoriteMovie(movie) {
    setFavoriteMovies((prevFavoriteMovies) =>
      prevFavoriteMovies.filter((favMovie) => favMovie.id !== movie.id));
  }

  function addWatchLater(movie){
    if (!watchLater.find((watchLaterMovie) => watchLaterMovie.id === movie.id)){
      setWatchLater((prevWatchLater) => [...prevWatchLater, movie]);
    }
  }

  function removeWatchLater(movie){
    setWatchLater((prevWatchLater) => 
    prevWatchLater.filter((watchLaterMovie) => watchLaterMovie.id !== movie.id));
  }

  const filteredMovies = movies.filter((movie) => {
    const genreCondition = !selectedGenre || movie.genres.includes(selectedGenre);
    const yearCondition = !selectedYear || Math.floor(movie.year / 10) * 10 === parseInt(selectedYear);
    return genreCondition && yearCondition;
  });


    return (
      <>
        <div className="grid-container">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="grid-item">
              <img src={movie.posterUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              <div className="btns">
                <button className="fav-icon" onClick={() => addFavoriteMovie(movie)}>
                  &#10084;
                </button>
                <button className="later-icon" onClick={() => addWatchLater(movie)}>
                  <img src={watch} alt="Watch Later" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div id="fav-movies">
          <FavoriteMovies favoriteMovies={favoriteMovies} removeFavoriteMovie={removeFavoriteMovie} />
        </div>
        <div id="later-movies">
          <WatchLater watchLater={watchLater} removeWatchLater={removeWatchLater} />
        </div>
      </>
    );
}