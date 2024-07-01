import React from "react";
import Movie from "./Movie/Movie.js";
import { Link } from "wouter";

const ListOfMovies = ({ movies }) => {
    
    return (
        movies.map((movie) => (
            <Link href={"Movie/" + movie.id} className="movie__container" key={movie.id}>
              <Movie id={movie.id} 
                    poster={movie.poster} 
                    title={movie.title} 
                    genreIds={movie.genre_ids} 
                    voteAverage={movie.vote_average} 
              />
            </Link>
        ))
    )
}

export default ListOfMovies;