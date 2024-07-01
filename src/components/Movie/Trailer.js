import React, { useEffect, useState } from "react";
import { GetTrailer } from "../../services/GetTrailer";

const Trailer = ({ id }) => {
  const [youtubeKey, setYoutubeKey] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        // Llamada a la función GetTrailer para obtener la clave del video de YouTube
        const videoKey = await GetTrailer({ movie_id: id });

        setYoutubeKey(videoKey);
      } catch (error) {
        console.error("Error al obtener el tráiler:", error);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className="movieDetails__start__description__container">
      <div style={{padding: "10px 0"}}>
        {youtubeKey && (
          <iframe
            title="Ver trailer"
            width="100%"
            height="320"
            outline="none"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Trailer;
