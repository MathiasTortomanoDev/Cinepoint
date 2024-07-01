import React, { useState, useEffect } from "react";

const GetIsAdult = ({ adult }) => {
  const [isAdult, setIsAdult] = useState("");

  useEffect(() => {
    setIsAdult(adult ? "Para Adultos" : "Para Todos los Públicos");
  }, [adult]);

  return (
    <div className="movieDetails__start__underTitle__isAdult">
      {isAdult}
    </div>
  );
};

export default GetIsAdult;

