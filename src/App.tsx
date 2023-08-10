import LinkLayout from "./components/LinkLayout";
import SideLayout from "./components/SideLayout";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./modules/pages/Home";
import Novedades from "./modules/pages/Novedades";
import Ayuda from "./modules/pages/Ayuda";
import PoliticaPrivacidad from "./modules/pages/PoliticaPrivacidad";
import "./index.css";
import { router } from "./routes/router";

export const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
};
