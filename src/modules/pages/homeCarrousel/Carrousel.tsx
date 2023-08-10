import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight,ChevronLeft } from "react-feather";
import image1 from "/imagen1.svg";
import image2 from "/imagen2.svg";

import Paginator from "./Paginator";
import PagameTitle from "../../../components/PagameTitle";
import Calculator from "../../../components/calculator/Calculator";

const Carousel = () => {
  const pages = [
    {
      text: "¿Dividir cuentas con amigos es un caos?",
      text1: "Disfruta de momentos increíbles sin preocuparte por las cuentas",
      image: image1,
    },
    {
      text: "¡Hazlo fácil y sin complicaciones con",
      text1: "Descarga la app y disfruta de cada momento sin preocupaciones",
      image: image2,
    },
    {
      text: "",
      image: "prueba",
    },
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    let interval:NodeJS.Timer;

    // Función para cambiar automáticamente la página
    const changePageAutomatically = () => {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
    };

    // Detener el cambio automático en la página 3 (índice 2) durante 10 segundos
    if (currentPageIndex === 2) {
      interval = setInterval(changePageAutomatically, 100000); // 10 segundos (en milisegundos)
    } else {
      // Cambio automático cada 3 segundos en las páginas 1 y 2
      interval = setInterval(changePageAutomatically, 5000); // 3 segundos (en milisegundos)
    }

    return () => clearInterval(interval);
  }, [currentPageIndex, pages.length]);

  const handlePageClick = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
  };

  return (
    <div className="relative mx-auto text-center sm:px-5">
      <div className="justify-center items-center flex flex-col">
        {currentPageIndex === 2 && (
          <div className="">
            <Calculator />
          </div>
        )}
        {currentPageIndex !== 2 && (
          <motion.img
            src={pages[currentPageIndex].image}
            alt=""
            className="w-[600px] h-[600px] mb-16 pointer-events-none cursor-default select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.375 }}
          />
        )}
        {currentPageIndex !== 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.375 }}
            className="h-16 w-full bottom-0 bg-gradient-to-b from-transparent to-black -mt-32"
          />
        )}
        {currentPageIndex === 1 && (
          <motion.div
            className="-mt-12 mb-16 items-center flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.375 }}
          >
            <motion.div
              className="flex  flex-col sm:flex-row "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.375 }}
            >
              <div className="mr-1.5 text-2xl sm:text-4xl ">{pages[currentPageIndex].text}</div>
              <div className="flex justify-center">
                <PagameTitle className="text-2xl sm:text-4xl text-center" />
                <p className="text-2xl sm:text-4xl">!</p>
              </div>
            </motion.div>
            <motion.div
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.375 }}
            >
              {pages[currentPageIndex].text1}
            </motion.div>
          </motion.div>
        )}
        {currentPageIndex === 0 && (
          <motion.div
            className="flex flex-col -mt-12 mb-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.375 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.375 }}
            >
              {pages[currentPageIndex].text}
            </motion.div>
            <motion.div
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.375 }}
            >
              {pages[currentPageIndex].text1}
            </motion.div>
          </motion.div>
        )}
      </div>
      <Paginator
        pagesCount={pages.length}
        currentPageIndex={currentPageIndex}
        onPageClick={handlePageClick}
      />
      <button
       onClick={() => setCurrentPageIndex((prevIndex) => Math.max(0,(prevIndex - 1)))}
       className="absolute text-2xl top-0 bottom-0 left-0 ">
        <ChevronLeft  />
      </button>
      <button
        onClick={() => setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length)}
       className="absolute text-2xl top-0  bottom-0 right-0">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
