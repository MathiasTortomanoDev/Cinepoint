import React, { useState, useEffect } from "react";

const GetDuration = ({ runtime }) => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;

      const hoursString = hours > 0 ? `${hours}h` : "";
      const minutesString = minutes > 0 ? ` ${minutes}min` : "";

      setDuration(`${hoursString}${minutesString}`);
  }, [runtime]);

  return (
    <div className="movieDetails__start__underTitle__duration">
      {duration}
    </div>
  );
};

export default GetDuration;

