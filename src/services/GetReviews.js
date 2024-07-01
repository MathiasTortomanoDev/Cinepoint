import { OPTIONS } from './Settings';

export const GetReviews = async (movie_id ) => {

  const urlFetch = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;

  try {
    const response = await fetch(urlFetch, OPTIONS);
    const data = await response.json();

    const reviews = data.results
    
    return reviews;

  } catch (error) {
    console.error(error);
    return null;
  }
};
