import React from "react";
import GetMovieGenres from "../../services/GetMovieGenres";

const MovieGenres = ({ genres }) => {
  
  const genresArray = GetMovieGenres({ ids: genres });

  return (
    <div className="movie__genres">
      {genresArray && genresArray.length > 0 && (
        <span>
          {genresArray.map((genre, index) => (
            <span key={index}>
              {genre.name}
              {index < genresArray.length - 1 && ', ' /* agrega coma si no es el último género */}
            </span>
          ))}
        </span>
      )}
    </div>
  );
};

export default MovieGenres;
