import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const credentials = {email,password}
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', credentials);
      const token = response.data.data;
      const decodedToken: any = jwtDecode(token);
      //Para crear la rutas protegidas
      /* const role = response.data.roles
      console.log(role) */
      console.log(decodedToken);
      console.log(token)
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <input type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
