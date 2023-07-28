import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/auth/signup', { name, last_name: lastName, email, password });
      console.log('Usuario registrado exitosamente.');
    } catch (error) {
      console.error('Error al registrarse:',error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input className='bg-red-500' type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;
