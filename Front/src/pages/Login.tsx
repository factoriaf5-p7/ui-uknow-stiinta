import React, { useState, useContext } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  { setAuth }  = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log(useAuth())

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const token = response.data.data;
      const decodedToken: any = jwtDecode(token);
      setAuth(response.data)
      navigate(from, { replace: true });
      console.log(decodedToken, response.data, useAuth);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2 className='bg-red-500'>Iniciar sesión</h2>
      <input type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;