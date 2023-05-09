import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [currentDate, setCurrentDate] = useState('');
  const [percentages, setPercentages] = useState('');
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    // Obtención de los datos del Local Storage
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];

    // Cálculo del porcentaje de cada objetivo activo
    const activeObjectives = objectives.filter(objective => objective.isActive);
    const totalHours = activeObjectives.reduce((total, objective) => total + objective.hoursPerDay, 0);
    const percentages = activeObjectives.map(objective => `${objective.name}: ${(objective.hoursPerDay / totalHours) * 100}%`).join(', ');
    setPercentages(percentages);

    // Obtención de la fecha actual
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    setCurrentDate(date);

  }, [localStorage.getItem('objectives')]);

  const updateBadges = (percentage) => {
    const newBadges = [];

    if (percentage >= 25 && !badges.includes('25%')) {
      newBadges.push('25%');
    }
    if (percentage >= 33 && !badges.includes('33%')) {
      newBadges.push('33%');
    }
    if (percentage >= 50 && !badges.includes('50%')) {
      newBadges.push('50%');
    }
    if (percentage >= 66 && !badges.includes('66%')) {
      newBadges.push('66%');
    }
    if (percentage >= 75 && !badges.includes('75%')) {
      newBadges.push('75%');
    }

    if (newBadges.length > 0) {
      setBadges([...badges, ...newBadges]);
    }
  };

  return (
    <div>
      <p>Fecha actual: {currentDate}</p>
      <p>Porcentaje de cada objetivo activo: {percentages}</p>
      <Link to="/new-objective">Crear nuevo objetivo</Link>
    </div>
  );
}

export default HomePage;
