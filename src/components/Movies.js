import React from "react";
import { movies } from "../data";
import { render } from "@testing-library/react";

function Movies() {
  const renderMovies = movies.map( movie =>
    <div>
      <p>Title: {movie.title}</p>
      <p>Time: {movie.time}</p>
      <ul>Genres:
        {movie.genres.map(genre =>
          <li>
            {genre}
          </li>)}
      </ul>
    </div>)
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  )
}

export default Movies;
