import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../context/TodoContext';

const TodoList = ({ todos }) => {
  const { toggleComplete, deleteTodo, editTodo } = useTodos();

  return (
    <div className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
