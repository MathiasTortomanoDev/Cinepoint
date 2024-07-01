
import { OPTIONS, API_URL } from './Settings.js';

async function GetCollection({ collection, page }) {

  const apiURL = `${API_URL}/movie/${collection}?language=es-MX&page=${page}`;

  try {
    const res = await fetch(apiURL, OPTIONS);

    if (!res.ok) {
      throw new Error(`Error en la llamada a la API: ${res.status}`);
    }

    const data = await res.json();
    const movies = fromApiResponseToMovieCollection(data);

    return movies;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

const fromApiResponseToMovieCollection = (apiResponse) => {
  const { results } = apiResponse;

  if (Array.isArray(results)) {
    const movies = results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      background: "https://image.tmdb.org/t/p/w780" + movie.backdrop_path,
      genre_ids: movie.genre_ids,
      vote_average: movie.vote_average
    }));

    return movies;
  }

  return [];
}

export default GetCollection;

