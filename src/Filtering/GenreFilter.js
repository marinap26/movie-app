import React, {useEffect} from "react";
import Error from "../Error";

export default function GenreFilter( {selectedGenre, onGenreChange}){

    const [genres, setGenres] = React.useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json')
          .then(response => response.json())
          .then(data => setGenres(data.genres))
          .catch(error => {
            <Error error={error} />
          })
      }, [])

      const handleGenreChange = (e) => {
        onGenreChange(e.target.value);
      };
    
    return (
        <div>
            <select className="filter" value={selectedGenre} onChange={handleGenreChange}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                    {genre}
                    </option>
                ))}
            </select>
        </div>
    )
}