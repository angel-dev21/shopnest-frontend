const UserComponent = () => {

    

  return (
    <div className="absolute flex flex-col justify-center items-center bg-white text-black w-75 h-50 shadow-lg px-5">
      <h1 className="mb-3">Escoga una opción para entrar</h1>
      <button className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 w-full cursor-pointer">
        REGISTRARSE CON EMAIL
      </button>
      <button className="text-xs font-semibold outline-2 rounded-xs outline-black hover:bg-black hover:text-white mb-2 mx-2 py-2 w-full cursor-pointer">
        ENTRAR CON E-MAIL Y CONTRASEÑA
      </button>
    </div>
  );
};
export default UserComponent;
