import { OPTIONS } from './Settings';

export const GetTrailer = async ({ movie_id }) => {

  const urlFetch = `https://api.themoviedb.org/3/movie/${movie_id}/videos`;

  try {
    const response = await fetch(urlFetch, OPTIONS);
    const data = await response.json();

    const trailerResult = data.results.find(result => result.type === 'Trailer').key;
    
    return trailerResult;

  } catch (error) {
    console.error(error);
    return null;
  }
};
