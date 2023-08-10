import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PagameTitle from "./PagameTitle";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useMedia } from "react-use";

const routes = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Novedades",
    path: "/novedades",
  },
  {
    name: "Política de privacidad",
    path: "/politica-privacidad",
  },
  {
    name: "Ayuda",
    path: "/ayuda",
  },
];

const LinkLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const isMobile = useMedia("(max-width: 640px)");

  // Use useEffect to detect window size and set openMenu to true based on width
  useEffect(() => {
    if (isMobile) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }, [isMobile]);

  return (
    <header className="w-full bg-black p-2 font-bold">
      <div className="flex text-white text-2xl items-center pb-2 px-2 sm:hidden">
        <Link to="/" className="flex-1 sm:hidden">
          <PagameTitle className="text-2xl " />
        </Link>
        <button
          className="rounded-full "
          onClick={() => {
            setOpenMenu(!openMenu);
          }}>
          {openMenu ?  <HiOutlineX /> : <HiOutlineMenuAlt3 /> }
        </button>
      </div>

      <div
        style={{
          height: openMenu ? "100%" : 0,
          opacity: openMenu ? 1 : 0,
          pointerEvents: openMenu ? "auto" : "none",
        }}
        className={`flex flex-col absolute left-0 top-14  bg-black z-20  w-full
        items-center py-2 gap-24 
        transition-all duration-500 ease-in-out 
        pt-14 sm:pt-2 sm:justify-center sm:flex-row sm:static sm:bg-transparent
        `}>
        {routes.map((route) => (
          <NavLink
            onClick={() => {
              if (!isMobile) return;
              setOpenMenu(false);
            }}
            key={route.name}
            to={route.path}
            className={({ isActive, isPending }) =>
              `${
                isPending ? "pending" : isActive ? "underline text-primary" : ""
              }
              text-white hover:underline`
            }>
            {route.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default LinkLayout;
