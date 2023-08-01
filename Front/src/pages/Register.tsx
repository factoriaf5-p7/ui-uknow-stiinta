import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const credentials = {
    name,
    last_name: lastName,
    email,
    password,
  };

  const validateForm = () => {
    if (!name || !lastName || !email || !password) {
      setErrorMessage("Por favor rellene todos los campos");
      return false;
    }
    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!nameRegex.test(name)) {
      setErrorMessage(
        "El nombre debe comenzar con mayúscula y solo puede contener letras"
      );
      return false;
    }

    const lastNameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!lastNameRegex.test(lastName)) {
      setErrorMessage(
        "El apellido debe comenzar con mayúscula y solo puede contener letras"
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor inserte una direccion de correo valida.");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("Contraseña debe contener al menos 8 caracteres");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        await axios.post("http://localhost:3000/auth/signup", credentials);
        alert("Se ha registrado correctamente.");
      } catch (error) {
        console.error("Error al registrarse:", error);
      }
    }
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6  flex flex-col md:items-center md:justify-center">
      <h2 className="text-3xl font-bold mb-2 text-center">Create an account</h2>
      <p className="text-center m-3 italic hover:not-italic">
        Uknow is a cutting-edge application designed for programming enthusiasts
        and aspiring developers. <br /> Uknow has you covered.
      </p>
      {errorMessage && (
        <p className="text-red-500 text-center my-4">{errorMessage}
        <img src="advertencia.png" className="block mx-auto mt-2 max-w-24 max-h-24" alt="" />
        </p>
      )}
      <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                <b>Name</b>
              </label>
              <input 
                id="name"
                name="name"
                type="name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
             <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                <b>Last Name</b>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div> 
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
      <p className="text-center p-6 ">
        <a href="" className="text-blue-500 underline">
          Forgot Password?
        </a>
      </p>
      <div className="mb-4 flex items-center ">
        <input type="checkbox" className="mr-2" />
        <label>Remember Me</label>
      </div>
      <div className="mb-4">
        <button
          className="w-full bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleRegister}
        >
          Sign up
        </button>
        <p className="p-6">You don't have an account yet? <span className="text-orange-500 underline p-1">Sign in</span></p>
      </div>
    </div> 
  );
};

export default Register;
