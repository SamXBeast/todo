import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Login from './components/Login';
import { useAuth } from './context/AuthContext';
import { useTodos } from './context/TodoContext';


const App = () => {
  const { user, logout } = useAuth();
  const { todos } = useTodos();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'all') {
      return matchesSearch;
    }
    const matchesFilter = filter === 'completed' ? todo.completed : !todo.completed;
    return matchesSearch && matchesFilter;
  });

  if (!user) {
    return <Login />;
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-white">Tudum - Your Todo List</h1>
      <button onClick={logout} className="mb-4 p-2 bg-red-700 text-white rounded">
        Logout
      </button>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TodoForm />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default App;
