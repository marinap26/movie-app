import React from "react";

export default function FavoriteMovies({ favoriteMovies, removeFavoriteMovie }) {
  return (
    <div className="fav-container">
      <center><h1>Favorite Movies</h1></center>
      {favoriteMovies.length === 0 ? (
        <center><p>No favorite movies yet. Add some movies to your list! </p></center>
      ) : (
        <div className="grid-container">
        {favoriteMovies.map((movie) => (
            <div key={movie.id} className="grid-item">
            <img src={movie.posterUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <button className="remove-btn" onClick={() => removeFavoriteMovie(movie)}>Remove</button>
            </div>
      ))}
    </div>
      )}
    </div>
  );
}
 