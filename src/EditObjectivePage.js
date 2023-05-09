import React, { useState, useEffect } from 'react';

function EditObjectivePage({ match, history }) {
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

  useEffect(() => {
    // Obtener el id del objetivo a editar
    const id = match.params.id;

    // Obtener los objetivos guardados en el localStorage
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];

    // Encontrar el objetivo con el id correspondiente
    const objective = objectives.find((o) => o.id === id);

    // Mostrar los valores del objetivo en los campos correspondientes
    setName(objective.name);
    setStartDate(objective.startDate);
    setHoursPerDay(objective.hoursPerDay);
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtener el id del objetivo a editar
    const id = match.params.id;

    // Crear un objeto con los datos del objetivo actualizados
    const objective = {
      id,
      name,
      startDate,
      hoursPerDay,
    };
    
    // Obtener los objetivos guardados en el localStorage
    const objectives = JSON.parse(localStorage.getItem('objectives')) || [];

    // Encontrar el índice del objetivo con el id correspondiente
    const index = objectives.findIndex((o) => o.id === id);

    // Reemplazar el objetivo antiguo con el objetivo actualizado
    objectives[index] = objective;

    // Guardar los objetivos actualizados en el localStorage
    localStorage.setItem('objectives', JSON.stringify(objectives));

    // Redirigir a la página de detalles del objetivo
    history.push(`/objectives/${id}`);
  };

  const totalHours = Object.values(hoursPerDay).reduce((total, hours) => {
    const parsedHours = parseFloat(hours) || 0;
    return total + parsedHours;
  }, 0);

  return (
    <div>
      <h2>Editar objetivo</h2>
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
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditObjectivePage;
