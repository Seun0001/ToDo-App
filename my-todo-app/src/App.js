import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addTodo = (task, duration, info, price) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task,
        duration: parseInt(duration),
        info,
        price,
        completed: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTaskComplete = (isSuccess) => {
    if (isSuccess) {
      setModalMessage("Congratulations for completing this!");
    } else {
      setModalMessage("Too bad! Try to focus more to complete next time.");
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (todos.length > 0 && todos.every((todo) => todo.completed)) {
      setModalMessage("Congrats, you completed all tasks in the Task box");
      setShowModal(true);
    }
  }, [todos]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        onTaskComplete={handleTaskComplete}
      />
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default App;
