import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router";

export const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
};
