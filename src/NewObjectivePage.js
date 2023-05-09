import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewObjectivePage() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [hoursPerDay, setHoursPerDay] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear un objeto con los datos del objetivo
    const objective = {
      id: uuidv4(),
      name,
      startDate,
      hoursPerDay,
    };
    
    // Obtener los objetivos guardados en el localStorage
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];

    // Agregar el nuevo objetivo al array de objetivos
    objectives.push(objective);

    // Guardar los objetivos actualizados en el localStorage
    localStorage.setItem('objectives', JSON.stringify(objectives));
  };

  const totalHours = Object.values(hoursPerDay).reduce((total, hours) => {
    const parsedHours = parseFloat(hours) || 0;
    return total + parsedHours;
  }, 0);

  return (
    <div>
      <h2>Crear nuevo objetivo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del objetivo:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha inicial:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          Horas dedicadas por día:
        </label>
        <br />
        <label>
          Lunes:
          <input type="number" value={hoursPerDay.Monday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Monday: e.target.value })} />
        </label>
        <br />
        <label>
          Martes:
          <input type="number" value={hoursPerDay.Tuesday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Tuesday: e.target.value })} />
        </label>
        <br />
        <label>
          Miércoles:
          <input type="number" value={hoursPerDay.Wednesday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Wednesday: e.target.value })} />
        </label>
        <br />
        <label>
          Jueves:
          <input type="number" value={hoursPerDay.Thursday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Thursday: e.target.value })} />
        </label>
        <br />
        <label>
          Viernes:
          <input type="number" value={hoursPerDay.Friday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Friday: e.target.value })} />
        </label>
        <br />
        <label>
          Sábado:
          <input type="number" value={hoursPerDay.Saturday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Saturday: e.target.value })} />
        </label>
        <br />
        <label>
          Domingo:
          <input type="number" value={hoursPerDay.Sunday} onChange={(e) => setHoursPerDay({ ...hoursPerDay, Sunday: e.target.value })} />
        </label>
        <br />
        <p>Total de horas: {totalHours}</p>
        <br />
        <button type="submit">Crear objetivo</button>
      </form>
    </div>
  );
}

export default NewObjectivePage;
