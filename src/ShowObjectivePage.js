import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowObjectivePage() {
  const { id } = useParams();
  const [objective, setObjective] = useState(null);

  useEffect(() => {
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];
    const foundObjective = objectives.find((obj) => obj.id === id);
    setObjective(foundObjective);
  }, [id]);

  return (
    <div>
      <h1>Objective {id}</h1>
      {objective ? (
        <>
          <p>Name: {objective.name}</p>
          <p>Start date: {objective.startDate}</p>
          <p>Hours per day:</p>
          <ul>
            <li>Monday: {objective.hoursPerDay.Monday}</li>
            <li>Tuesday: {objective.hoursPerDay.Tuesday}</li>
            <li>Wednesday: {objective.hoursPerDay.Wednesday}</li>
            <li>Thursday: {objective.hoursPerDay.Thursday}</li>
            <li>Friday: {objective.hoursPerDay.Friday}</li>
            <li>Saturday: {objective.hoursPerDay.Saturday}</li>
            <li>Sunday: {objective.hoursPerDay.Sunday}</li>
          </ul>
        </>
      ) : (
        <p>Objective not found</p>
      )}
    </div>
  );
}

export default ShowObjectivePage;
