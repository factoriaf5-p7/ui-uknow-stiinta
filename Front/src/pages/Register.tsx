import React, { useState } from "react";
import axios from "axios";
import Button from "@/components/ui/Button";

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
    <div className="bg-background min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
       <img className='m-auto' src="logo.svg" alt="logo:Uknow" />
       <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">Create an account</h2>
      <p className="mt-2 text-center text-sm text-text">
        Uknow is a cutting-edge application designed for programming enthusiasts
        and aspiring developers. <br /> Uknow has you covered.
      </p>
      {errorMessage && (
        <p className="text-red-500 text-center my-4">{errorMessage}
        <img src="advertencia.png" className="block mx-auto mt-2 max-w-24 max-h-24" alt="Imagen de advertencia" />
        </p>
      )}
       </div>
       <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="rounded-md shadow-sm space-y-4" > 
              <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark">
                <b>Name</b>
              </label>
              <input 
                id="name"
                name="name"
                type="name"
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-dark rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

             <div> 
              <label htmlFor="lastName" className="block text-sm font-medium text-dark">
                <b>Last Name</b>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-dark rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              </div>
             <div> 
              <label htmlFor="email" className="block text-sm font-medium text-dark">
                <b>Email</b>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-dark rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div> 
              <label htmlFor="password" className="block text-sm font-medium text-dark">
                <b>Password</b>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-dark rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
              <label htmlFor="remember_me" className="ml-2 block text-sm text-remember">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-dark hover:text-text">
                ¿Forgot your password?
              </a>
            </div>
          </div>
          <div className='flex w-full '>
         <Button color="bg-btnOscuro" text="text-white" >
        Sign Up
      </Button>
      </div>
   
        <p className="p-6 text-text">You don't have an account yet? <span className="text-orange-500 underline p-1">Sign in</span></p>
     
      </form>
      </div>
      </div>
  );
};

export default Register;
