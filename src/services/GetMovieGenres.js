
import { useState, useEffect } from "react";
import { OPTIONS } from './Settings.js';

const GetMovieGenres = ({ ids }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', OPTIONS)
            .then(response => response.json())
            .then(data => {
                const filteredGenres = ids.map((id) => {
                    const genre = data.genres.find((g) => g.id === id);
                    return genre ? genre : null;
                }).filter(genre => genre !== undefined);

                const limitedGenres = filteredGenres.slice(0, 2);

                setGenres(limitedGenres || []);
            })
            .catch(error => console.error(error));
    }, [ids]);

    return genres;
};

export default GetMovieGenres;