import { OPTIONS } from './Settings.js';

export const GetCredits = async (movie_id, onlyActing) => {

  const urlFetch = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;

  try {
    const response = await fetch(urlFetch, OPTIONS);
    const data = await response.json();

    if (onlyActing) {

    return data.cast.filter(actor => actor.known_for_department === "Acting").slice(0, 30);

    } 

    const actingCastArray = data.cast
      .filter(actor => actor.known_for_department === "Acting")
      .slice(0, 6);

    const directingCastArray = data.crew
      .filter(director => director.known_for_department === "Directing")
      .slice(0, 2);

    return {
      directingCast: directingCastArray,
      actingCast: actingCastArray
    };
  } catch (error) {
    console.error(error);
    return {
      directingCast: [],
      actingCast: []
    };
  }
};