import React from "react";


export default function WatchLater({ watchLater, removeWatchLater }) {
  return (
    <div className="later-container">
      <center><h1>Watch Later List</h1></center>
      {watchLater.length === 0 ? (
        <center><p>You haven't added any movies to your Watch Later list. Let's add some!</p></center>
      ) : (
        <div className="grid-container">
          {watchLater.map((movie) => (
            <div key={movie.id} className="grid-item">
              <img src={movie.posterUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              <button className="remove-btn" onClick={() => removeWatchLater(movie)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
