import React from "react";
import { directors } from "../data";

function Directors() {
  const renderDirectors = directors.map(director =>
    <div>
      <p>Name: {director.name}</p>
      <ul>Movies:
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  )
}

export default Directors;
