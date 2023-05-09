import { useState, useEffect } from 'react';

function useActiveObjectivesData() {
  const [objectivesData, setObjectivesData] = useState([]);

  useEffect(() => {
    // Obtener los datos del Local Storage
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];

    // Filtrar los objetivos activos y establecer los datos del estado
    const activeObjectives = objectives.filter(objective => objective.isActive);
    setObjectivesData(activeObjectives);
  }, []);

  return objectivesData;
}

export default useActiveObjectivesData;
