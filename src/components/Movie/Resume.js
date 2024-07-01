import React, { useEffect, useState } from "react";
import { GetCredits } from "../../services/GetCredits";
import "../../styles/resume.css"

const Resume = ({ id, genres, overview }) => {
  const [credits, setCredits] = useState({ directingCast: [], actingCast: [] });
  const onlyActing = false

  useEffect(() => {
    GetCredits(id, onlyActing)
      .then(data => setCredits(data))
      .catch(error => console.error(error));
  }, [id, onlyActing]);

  const formattedActingCast = credits.actingCast.map(actor => actor.name).join(', ');
  const formattedDirectingCast = credits.directingCast.map(director => director.name).join(', ');

  return (
    <div className="resume__container">
      <p className="resume__overview">{overview}</p>
      <ul className="resume__list">
        <li className="resume__element">
          <span className="resume__element__title">
            Género
          </span>
          <p className="resume__element__data">
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </li>
        <li className="resume__element">
          <span className="resume__element__title">
            Dirección
          </span>
          <p className="resume__element__data">
            {formattedDirectingCast}
          </p>
        </li>
        <li className="resume__element">
          <span className="resume__element__title">
            Elenco
          </span>
          <p className="resume__element__data">
            {formattedActingCast}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Resume;