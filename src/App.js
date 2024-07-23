import React, { useState } from 'react';
import { useEffect } from 'react';


import MovieCard from './MovieCard';
import "./App.css";
const movie1 = 
{
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


//c3b71b7b

const API_URL = 'http://www.omdbapi.com?apikey=c3b71b7b';

const App = () =>{
    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) =>{
        const response  = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        // alert('test');
        searchMovies('Shrek');
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => searchMovies(searchTerm)}/>
            </div>
            <div className="container">
                {
                    movies.map((movie) =>(
                        <MovieCard movie ={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;