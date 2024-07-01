import React, { useState } from "react";
import GetMovieDetails from "../../services/GetMovieDetails.js";
import Star from "./Star.js";
import Heart from "./Heart.js";
import GetDate from "../../services/GetDate.js";
import GetDuration from "../../services/GetDuration.js";
import GetIsAdult from "../../services/GetIsAdult.js";
import "../../styles/movieDetails.css";
import Resume from "./Resume.js";
import Trailer from "./Trailer.js";
import Reviews from "./Reviews.js";
import Details from "./Details.js";

const MovieDetails = ({ movieId }) => {
  const movieDetails = GetMovieDetails({ movieId });
  const [selectedTab, setSelectedTab] = useState("resume");

  const handleTabClick = (e, tab) => {
    e.preventDefault()
    setSelectedTab(tab);
  };

  if (!movieDetails) {
    return <div>Cargando detalles...</div>;
  }

  const imgPosterPath = "https://image.tmdb.org/t/p/w500/";
  const imgBackgroundPath = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movieDetails">
      {movieDetails.map((movie) => (
        <div
          className="movieDetails__start__background"
          key={movie.id}
          style={{ backgroundImage: `url(${imgBackgroundPath}${movie.backdrop_path})` }}
        >
          <article className="movieDetails__start__content">
            <div className="movieDetails__start__container">
              <section className="movieDetails__start__poster__container">
                <Star rating={movie.vote_average} />
                <Heart />
                <img
                  className="movieDetails__start__poster"
                  src={imgPosterPath + movie.poster_path}
                  alt={"poster de " + movie.title}
                />
              </section>
              <section className="movieDetails__start__data__container">
                <h1 className="movieDetials__start__title">{movie.title}</h1>
                <div className="movieDetails__start__underTitle__container">
                  <GetDate release_date={movie.release_date} /> | <GetDuration runtime={movie.runtime} /> |
                  <GetIsAdult adult={movie.adult} />
                </div>
                <div className="movieDetails__start__moredata__container">
                  <a
                    href="/"
                    onClick={(e) => handleTabClick(e, "resume")}
                    className={`movieDetails__start__moredata ${
                      selectedTab === "resume" && "movieDetails__start__moredata-active"
                    } movieDetails__start__resume__container`}
                  >
                    Resumen
                  </a>
                  <a
                    href="/"
                    onClick={(e) => handleTabClick(e, "trailer")}
                    className={`movieDetails__start__moredata ${
                      selectedTab === "trailer" && "movieDetails__start__moredata-active"
                    } movieDetails__start__trailer__container`}
                  >
                    Trailer
                  </a>
                  <a
                    href="/"
                    onClick={(e) => handleTabClick(e, "reviews")}
                    className={`movieDetails__start__moredata ${
                      selectedTab === "reviews" && "movieDetails__start__moredata-active"
                    } movieDetails__start__reviews__container`}
                  >
                    Criticas
                  </a>
                  <a
                    href="/"
                    onClick={(e) => handleTabClick(e, "details")}
                    className={`movieDetails__start__moredata ${
                      selectedTab === "details" && "movieDetails__start__moredata-active"
                    } movieDetails__start__details__container`}
                  >
                    Detalles
                  </a>
                </div>

                {/* Renderizar el componente seleccionado según el estado */}
                {selectedTab === "resume" && <Resume id={movie.id} genres={movie.genres} overview={movie.overview} />}
                {selectedTab === "trailer" && <Trailer id={movie.id} />}
                {selectedTab === "reviews" && <Reviews id={movie.id} />}
                {selectedTab === "details" && <Details id={movie.id} revenue={movie.revenue} budget={movie.budget} />}
              </section>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
