import React, { useState, useEffect } from "react";

const GetDate = ({ release_date }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const dateObject = new Date(release_date);
    const fullYear = dateObject.getFullYear();
    setDate(fullYear.toString());
  }, [release_date]);

  return (
    <div className="movieDetails__start__underTitle__date">
      {date}
    </div>
  );
};

export default GetDate;
