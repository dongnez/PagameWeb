import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../modules/RootLayout";
import Home from "../modules/pages/Home";
import Novedades from "../modules/pages/Novedades";
import PoliticaPrivacidad from "../modules/pages/PoliticaPrivacidad";
import Ayuda from "../modules/pages/Ayuda";
import { ErrorPage } from "../modules/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
	errorElement: <ErrorPage/>,
    element: <RootLayout />,
	children: [
		{ path: "/", element: <Home/>},
		{ path: "/novedades", element: <Novedades/>},
		{ path: "/politica-privacidad", element: <PoliticaPrivacidad/>},
		{ path: "/ayuda", element: <Ayuda/>},
	],
  },
]);
