import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useAuth from '../hooks/useAuth';
import {  useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState('');

  const credentials = {
    email,
    password,
  };

  const handleLogin = async () => {
    try {
      // Validar los campos antes de enviar el formulario
      if (!email || !password) {
        setError("All fields are required.");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValid.test(email)) {
        setError("Email is not valid.");
        return false;}
      setError(""); // Limpiar el mensaje de error si los campos son válidos

      const response = await axios.post('http://localhost:3000/auth/login', credentials);
      const token = response.data.data;
      const decodedToken: unknown = jwtDecode(token);
      setAuth(response.data);
      navigate(from, { replace: true });
      console.log(decodedToken, response.data, useAuth);
    } catch (error) {
      setError("Error in sign in, verify your credentials.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Uknow is a cutting-edge application designed for programming enthusiasts and aspiring developers.
Uknow has you covered.</p>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                <b>Email</b>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                <b>Password</b>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                ¿Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
