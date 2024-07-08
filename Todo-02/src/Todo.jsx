import React from 'react';
import './style.css'; // Ensure this path is correct
import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    setTodos((prevTodos) =>
      prevTodos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />
      <button type="button" onClick={handleSubmit} className="add-todo-button">
        Add Todo
      </button>
      <ul className='todos-list'>
        {todos.map((todo) => (
          <li  key={todo.id} className="todo">
            <span style={{marginRight:10}}>{todo.text}</span>
            <button type="button" onClick={() => removeTodo(todo.id)} className="close">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
