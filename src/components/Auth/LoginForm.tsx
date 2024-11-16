import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../state/atoms';
import { useNavigate } from 'react-router-dom'; 

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login with test credentials
    if (email === 'fahad@coffee.com' && password === 'coffee123') {
      setAuth({
        isAuthenticated: true,
        user: {
          name: 'fahad samara', email,
          id: ''
        },
      });
      navigate('/'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-auto">
      <h2 className="text-3xl font-light text-emerald-900 mb-6 text-center">
        Welcome Back
      </h2>
      <div className="bg-emerald-100 p-4 rounded-lg mb-6 text-sm text-emerald-800">
        <p>
          <strong>Test Email:</strong> <span className="font-mono">fahad@coffee.com</span>
        </p>
        <p>
          <strong>Test Password:</strong> <span className="font-mono">coffee123</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
