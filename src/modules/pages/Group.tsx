import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Group = () => {
  const { id } = useParams();
  const customUrl = `pagame://group/${id}/`;

  //TODO IR A STORE SI NO INSTALADA
  function checkAppInstalled() {
    const appScheme = "pagame://"; // Reemplaza con el esquema de URL de la aplicación
    const testLink = document.createElement("a");
    testLink.href = appScheme;
    document.body.appendChild(testLink);

    testLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = customUrl;
    });

    testLink.click();
  }

  useEffect(() => {
    checkAppInstalled();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-6xl">Group {id}</p>

      <button 
	  onClick={()=>{
			  window.open(customUrl)
	  }} 
	  className="text-primary text-3xl border border-primary rounded-full p-2 mx-auto mt-6">
        Abre la app
      </button>
    </div>
  );
};
