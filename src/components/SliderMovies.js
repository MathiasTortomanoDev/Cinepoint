import React, { useState, useEffect } from "react";
import GetMovieCollection from "../services/GetCollection.js";
import { Link } from "wouter";
import Heart from "./Movie/Heart.js"
import ArrowRight from "./ArrowRight.js"

function SliderMovies({ collection }) {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalTime = 10000;

  useEffect(() => {
    GetMovieCollection({ collection, page: 1 }).then((moviesData) => {
      const slicedMovies = moviesData.slice(0, 3);
      setMovies(slicedMovies);
    });
  }, [collection]);

  useEffect(() => {
    const handleInterval = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const newIntervalId = setInterval(handleInterval, intervalTime);

    return () => clearInterval(newIntervalId);
  }, [activeIndex, intervalTime, movies.length]);

  const getTransformValue = (index) => {
    const distance = index - activeIndex;
    let transformValue = distance * 300;
    if (distance > 1) {
      transformValue -= 300 * movies.length;
    } else if (distance < -1) {
      transformValue += 300 * movies.length;
    }
    return transformValue;
  };

  const handleControlClick = (index) => {
    console.log(activeIndex)
    setActiveIndex(index >= 0 ? index % movies.length : 2);

  };

  return (
    <article className="slider">
      <section className="slider__elements__container">
        
        
        
        {movies.map((movie, index) => (
          <Link href={"Movie/" + movie.id} key={index}
            className={`slider__element ${index === activeIndex ? 'slider__element-active' : ''}`}
            style={{transform: `translateX(${getTransformValue(index)}px) 
            ${index === activeIndex ? 'scale(1.2)' : 'scale(1)'}`}}
          > 
            <div className="slider__element__img"
                style={{ backgroundImage: `url(${movie.background})` }}
                key={movie.id}
            ></div>
            <div className="slider__element__item">
              <h3 className="slider__element__title">{movie.title}</h3>
              <div className="slider__element__heart">
                <Heart />
              </div>
              <div className="slider__element__link">Ver más</div>
            </div>
          </Link>
        ))}
      </section>
      <section className="slider__controler__container">
        <div className="slider__arrow" onClick={() => handleControlClick(activeIndex - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="slider__arrow__icon">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </div>
        {movies.map((_, index) => (
          <div
            className={`slider__controler__element ${index === activeIndex ? 'slider__controler__element-active' : ''}`}
            key={index}
            onClick={() => handleControlClick(index)}
          />
        ))}
        <div className="slider__arrow" onClick={() => handleControlClick(activeIndex + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="slider__arrow__icon">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
          </svg> 
        </div>
      </section>
    </article>
  );
}

export default SliderMovies;
