import React from "react";

const Tips = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-10/12 flex items-center justify-center">
      <div className="w-full flex items-center justify-start flex-col">
        <p className="text-sky-700 font-bold w-full text-left text-xl mb-2">
          ATENÇÃO:
        </p>
        <p className="text-zinc-500 font-medium w-full text-left mb-1">
          Não solicitamos nenhum dado referente à sua conta; <br />
          Você deve estar logado no site do Club Cooee, marque a opção
          "Lembre-me"; <br />
          Você deve configurar a sua privacidade para que todos possam
          visualizar sua lista de amigos durante todo o processo; <br />
          Configurar o navegador para permitir "PopUps".
        </p>
      </div>
    </div>
  );
};

export default Tips;
