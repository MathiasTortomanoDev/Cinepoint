import React, { useState, useEffect } from "react";
import MovieGenres from "./MovieGenres";
import Heart from "./Heart";
import Star from "./Star";
import '../../styles/movie.css';

function Movie({ id, poster, title, genreIds, voteAverage}) {

  const [trimmedTitle, setTrimmedTitle] = useState(title);
  const [rating, setRating] = useState(Number(voteAverage));

  useEffect(() => {
    if (title.length > 18) {
      setTrimmedTitle(title.substring(0, 18) + "...");
    }
    setRating(voteAverage);
  }, [title, voteAverage]);

  return (
    <div className="movie" key={id}>
      <img className="movie__poster" src={poster} alt={poster} />
      <h4 className="movie__title">{trimmedTitle}</h4>
      <MovieGenres genres={genreIds} />
      <Heart />
      <Star rating={rating}/>
    </div>
  );
}

export default Movie;
