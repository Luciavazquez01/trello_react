import React, { useState } from 'react';
import Task from './Task';

function Column({ column, addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      addTask(column.id, taskName);
      setTaskName(''); 
    }
  };

  return (
    <div className="list">
      <h2>{column.name}</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {column.tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default Column;