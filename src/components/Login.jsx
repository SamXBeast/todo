import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="p-2 border rounded mb-2 w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded mb-2 w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
