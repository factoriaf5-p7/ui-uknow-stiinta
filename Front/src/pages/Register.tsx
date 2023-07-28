import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const credentials = {
    name,
    last_name: lastName,
    email,
    password,
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/auth/signup', {
        name,
        last_name: lastName,
        email,
        password,
      });
      console.log('Usuario registrado exitosamente.');
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">Create an account</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ipsum non elit
        ultricies, eget malesuada sapien iaculis. Sed pharetra sit amet odio sit amet volutpat.
        Pellentesque euismod lectus in urna cursus, eget pharetra ipsum rhoncus.
      </p>
      <div className="mb-4">
        <label className="font-bold">Name</label>
        <input
          className="w-full bg-white rounded-md p-2"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-bold">Last Name</label>
        <input
          className="w-full bg-white rounded-md p-2"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-bold">Email</label>
        <input
          className="w-full bg-white rounded-md p-2"
          type="text"
          placeholder="carlos.saiz@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-bold">Password</label>
        <input
          className="w-full bg-white rounded-md p-2"
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="text-center">
        <a href="https://example.com/forgot-password" className="text-blue-500 underline">
          Forgot Password?
        </a>
      </p>
      <div className="mb-4 flex items-center">
        <input type="checkbox" className="mr-2" />
        <label>Remember Me</label>
      </div>
      <div className="mb-4">
        <button
          className="w-full bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleRegister}
        >
          SIGN UP
        </button>
      </div>
     
    </div>
  );
};

export default Register;
