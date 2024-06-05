import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, todoIndex) =>
        todoIndex === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo App</h1>
        <div className="enterTask">
          <input
            type="text"
            className="taskInput"
            placeholder="Add your new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="addBtn" onClick={addTodo}>
            +
          </button>
        </div>
        <ul className="taskList">
          {todos.map((todo, index) => (
            <li key={index} className={`task ${todo.completed ? "completed" : ""}`}>
              <span className="taskText" onClick={() => toggleComplete(index)}>
                {todo.text}
              </span>
              <div className="taskActions">
                <button className="deleteBtn" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="clearAllTask">
          <p className="taskCount">You have {todos.length} pending tasks</p>
          <button className="clearBtn" onClick={clearTodos}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
