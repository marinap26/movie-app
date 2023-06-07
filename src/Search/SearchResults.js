import React from "react";

export default function SearchResults ({searchResults}){
    return (
        searchResults.map((movie) => (
            <div key={movie.id}>
                <img src={movie.posterUrl} alt={movie.title} />
                <h2>{movie.title}</h2>
            </div>
        ))
    )
}