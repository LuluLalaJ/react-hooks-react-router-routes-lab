import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map(actor =>
    <div>
      <p>Name: {actor.name} </p>
      <ul>
        Movies: 
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  )
}

export default Actors;
