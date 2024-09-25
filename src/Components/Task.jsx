import React from 'react';

function Task({ task }) {
  return (
    <li className="card">
      {task.name}
    </li>
  );
}

export default Task;