import React from "react";
import { directors } from "../data";


function Directors() {


  const mapDirectors = directors.map((dir) => {
      const mapDirectorMovies = dir.movies.map((movies) => 
        <li key={movies}>{movies}</li>)
    return(
    <div key={dir.name}>
      {dir.name}
      <ul>{mapDirectorMovies}</ul>
    </div>
    )})

return (
  <div>
    <h1>Directors Page</h1>
    {mapDirectors}
  </div>
  )
}

export default Directors;
