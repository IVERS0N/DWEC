import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteObjectivePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [objective, setObjective] = useState(null);

  useEffect(() => {
    const objectives = JSON.parse(localStorage.getItem('objectives'));
    const foundObjective = objectives.find(obj => obj.id === id);
    setObjective(foundObjective);
  }, [id]);

  const handleDelete = () => {
    const objectives = JSON.parse(localStorage.getItem('objectives'));
    const updatedObjectives = objectives.filter(obj => obj.id !== id);
    localStorage.setItem('objectives', JSON.stringify(updatedObjectives));
    navigate.push('/');
  };

  return (
    <div>
      <h2>¿Estás seguro que quieres borrar el objetivo "{objective?.name}"?</h2>
      <button onClick={handleDelete}>Sí, borrar objetivo</button>
    </div>
  );
}

export default DeleteObjectivePage;
