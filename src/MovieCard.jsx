import React from 'react';


const MovieCard = ({movie}) => {
    return (
        <div className="movie_tile">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img className = "poster" src = {movie.Poster}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;