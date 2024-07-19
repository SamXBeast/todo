import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && date && time) {
      addTodo(text, date, time);
      setText('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
