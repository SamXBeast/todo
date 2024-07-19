import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo, editTodo }) => {
  const handleEdit = () => {
    const newTodoText = prompt('Edit todo:', todo.text);
    const newDate = prompt('Edit date (YYYY-MM-DD):', todo.date);
    const newTime = prompt('Edit time (HH:MM):', todo.time);
    if (newTodoText && newDate && newTime) {
      editTodo(index, newTodoText, newDate, newTime);
    }
  };

  return (
    <div className={`flex flex-col justify-between items-start p-2 mb-2 rounded ${todo.completed ? 'bg-green-200' : 'bg-yellow-200'}`}>
      <div
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </div>
      <div className="text-sm text-gray-600">
        Due on: {todo.date} at {todo.time}
      </div>
      <div className="flex mt-2">
        <button onClick={handleEdit} className="mr-2 p-1 bg-yellow-500 text-white rounded">
          Edit
        </button>
        <button onClick={() => deleteTodo(index)} className="p-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
