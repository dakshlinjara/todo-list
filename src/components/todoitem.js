import React, { useState } from "react";

function TodoItem({ id, text, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li className={isCompleted ? "completed" : ""} onClick={() => setIsCompleted(!isCompleted)}>
      {text}
      <button className="delete-btn" onClick={(e) => {
        e.stopPropagation(); // Prevent toggling completion
        onDelete(id); // Call delete function
      }}>🗑️</button>
    </li>
  );
}

export default TodoItem;
