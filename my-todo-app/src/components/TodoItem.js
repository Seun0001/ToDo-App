import React, { useEffect, useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, onTaskComplete }) => {
  const [timeLeft, setTimeLeft] = useState(todo.duration);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !todo.completed) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !todo.completed) {
      deleteTodo(todo.id);
      onTaskComplete(false);
    }
  }, [timeLeft, todo.completed, todo.id, deleteTodo, onTaskComplete]);

  useEffect(() => {
    if (todo.completed) {
      onTaskComplete(true);
    }
  }, [todo.completed, onTaskComplete]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins < 10 ? "0" : ""}${mins}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  return (
    <li className="todo-item">
      <div className="todo-main">
        <span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.task}
          <button
            className="info-button"
            onClick={() => setShowInfo(!showInfo)}
          >
            i
          </button>
        </span>
        <span>Price: #{todo.price}</span>
        <span>
          {todo.completed ? "Completed" : `Time left: ${formatTime(timeLeft)}`}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
      {showInfo && <p className="info-text">{todo.info}</p>}
    </li>
  );
};

export default TodoItem;
