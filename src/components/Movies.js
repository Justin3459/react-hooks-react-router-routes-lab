import React from "react";
import { movies } from "../data";


const mapMovies = movies.map((movie)=>{
  const mappedGenres = movie.genres.map((genre)=>{
    return <li key={genre}>{genre}</li>
  })

  return(
    <div key={movie.title}>
      <h1>Name: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>{mappedGenres}</ul>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
      {mapMovies}
    </div>
    )
}

export default Movies;
