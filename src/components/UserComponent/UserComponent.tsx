"use client";
import { useState } from "react";

const UserComponent = () => {
  const [menuState, setMenuState] = useState(0);

  if (menuState == 1) {
    return (
      <div className="absolute right-8 top-14 flex flex-col justify-center items-center bg-white text-black py-6 shadow-lg px-5">
        <h1 className="mb-3">Regístrese con e-mail y contraseña</h1>
        <form className="flex flex-col">
          <input
            className="text-xs outline-2 rounded-xs outline-gray-300 hover:outline-gray-400 focus:outline-gray-500 placeholder:text-gray-300 mb-2 mx-2 py-2 px-2"
            type="text"
            placeholder="Ej.: ejemplo@mail.com"
          ></input>
          <input
            className="text-xs outline-2 rounded-xs outline-gray-300 hover:outline-gray-400 focus:outline-gray-500 placeholder:text-gray-300 mb-2 mx-2 py-2 px-2"
            type="password"
            placeholder="Ingrese su contraseña"
          ></input>
          <button
            className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 cursor-pointer"
            onClick={() => setMenuState(0)}
          >
            Volver
          </button>
          <button
            className="text-xs font-semibold outline-2 rounded-xs bg-red-600 outline-red-600 text-white mb-2 mx-2 py-2 cursor-pointer"
            onClick={() => setMenuState(0)}
          >
            Registrarse
          </button>
        </form>
      </div>
    );
  }

  if (menuState == 2) {
    return (
      <div className="absolute right-8 top-14 flex flex-col justify-center items-center bg-white text-black w-75 h-50 shadow-lg px-5">
        <h1 className="mb-3">Entrar con e-mail y contraseña</h1>
        <form>
          <input
            className="text-xs font-semibold outline-2 rounded-xs outline-gray-300 hover:outline-gray-400 focus:outline-gray-500 mb-2 mx-2 py-2 px-2 w-full"
            type="text"
          ></input>
          <input
            className="text-xs font-semibold outline-2 rounded-xs outline-gray-300 hover:outline-gray-400 focus:outline-gray-500 mb-2 mx-2 py-2 px-2 w-full"
            type="password"
          ></input>
        </form>
        <button
          className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 w-full cursor-pointer"
          onClick={() => setMenuState(0)}
        >
          Volver
        </button>
        <button
          className="text-xs font-semibold outline-2 rounded-xs bg-red-600 text-white mb-2 mx-2 py-2 w-full cursor-pointer"
          onClick={() => setMenuState(0)}
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="absolute right-8 top-14 flex flex-col justify-center items-center bg-white text-black w-75 h-50 shadow-lg px-5">
      <h1 className="mb-3">Escoga una opción para entrar</h1>
      <button
        className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 w-full cursor-pointer"
        onClick={() => setMenuState(1)}
      >
        REGISTRARSE CON EMAIL
      </button>
      <button
        className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 w-full cursor-pointer"
        onClick={() => setMenuState(2)}
      >
        ENTRAR CON E-MAIL Y CONTRASEÑA
      </button>
    </div>
  );
};
export default UserComponent;
