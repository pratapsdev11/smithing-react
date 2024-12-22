//demonstrating staemanagement use state and props together in functional component
import React, { useState } from 'react';

// Props interface
interface TodoListProps {
  initialTodos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos }) => {
  // Using useState to manage the todo list
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="py-1">
            {todo}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Managing input state
        className="border px-2 py-1 rounded"
        placeholder="Add a new todo"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded ml-2"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
