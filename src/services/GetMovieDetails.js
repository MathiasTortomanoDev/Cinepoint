
import { OPTIONS } from './Settings.js';
import { useEffect, useState } from 'react';

async function fetchMovieDetails(movieId) {


  const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?language=es-MX`;

  try {
    const res = await fetch(apiURL, OPTIONS);

    if (!res.ok) {
      throw new Error(`Error en la llamada a la API: ${res.status}`);
    }

    const movieDetails = await res.json();

    return movieDetails;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

function GetMovieDetails({ movieId }) {
    const [movieDetails, setMovieDetails] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        
        try {
            const data = await fetchMovieDetails(movieId);

            const { adult, backdrop_path, poster_path, budget, revenue, original_title, overview,
              popularity, release_date, runtime, tagline, title, genres, vote_average, id,
              vote_count } = data;
      
            const movieDetailsObject = { adult, backdrop_path, poster_path, budget, revenue, original_title, overview, 
              popularity, release_date, runtime, tagline, title, genres, vote_average, id,
              vote_count };
      
            setMovieDetails([movieDetailsObject]);
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchData();
    }, []);
  
    return movieDetails;
  }

export default GetMovieDetails;

