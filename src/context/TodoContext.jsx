import React, { createContext, useState, useContext, useEffect } from 'react';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo, date, time) => {
    setTodos([...todos, { text: todo, completed: false, date, time }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newText, newDate, newTime) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].date = newDate;
    newTodos[index].time = newTime;
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
