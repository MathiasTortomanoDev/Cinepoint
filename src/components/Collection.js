
import React, { useState, useEffect } from "react";
import GetMovieCollection from "../services/GetCollection.js";
import '../styles/collection.css';
import ListOfMovies from "./ListOfMovies.js"

function Collection({ titleCollection, collection }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    GetMovieCollection({ collection: collection, page: 1 }).then((moviesData) => {
      setMovies(moviesData);
    });
  }, []); 

  return (
    <div className="movieCollection">
      <div className="movieCollection__content">
        <h3 className="movieCollection__title">{titleCollection}</h3>
        <hr />
        <div className="movieCollection__slider">
          <ListOfMovies movies={movies}/>
        </div>
      </div>
    </div>
  );
}

export default Collection;
