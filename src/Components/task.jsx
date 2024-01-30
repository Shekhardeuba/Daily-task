import React from 'react';

const Task = ({ title, description, deleteTask, id }) => {
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={() => deleteTask(id)}>-</button>
    </div>
  );
};

export default Task;
