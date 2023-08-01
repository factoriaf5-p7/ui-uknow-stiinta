import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axiosClient from '@/services/apiClient';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  { setAuth, persist, setPersist }  = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ||"/";

  console.log(useAuth())

  const handleLogin = async () => {
    try {
      const response = await axiosClient.post('/auth/login', { email, password }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });
      const token = response.data.data;
      const decodedToken: any = jwtDecode(token);
      setAuth({token: response.data.data,roles:  response.data.roles})
      // setPersist(true)
      // localStorage.setItem('token',response.data.data)
      navigate(from, { replace: true });
      console.log(response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };
  useEffect(() => {
    localStorage.setItem('persist', true)
  }, [persist])

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