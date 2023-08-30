import { Component } from "react";
import PagameTitle from "../../components/PagameTitle";
import { useTranslation } from "react-i18next";

export const Ayuda = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 text-white max-w-6xl text-justify">
      <div className="flex text-3xl font-bold">
        <h2 className="font-bold mb-4 mr-1.5">{t("help.title")} </h2>
        <PagameTitle className="text-3xl" />
        <h2>?</h2>
      </div>

      
      <h3 className="text-xl font-bold mb-2">{t("help.q1.question")}</h3>
      <p className="mb-4">{t("help.q1.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q2.question")}</h3>
      <p className="mb-4">{t("help.q2.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q3.question")}</h3>
      <p className="mb-4">{t("help.q3.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q4.question")}</h3>
      <p className="mb-4">{t("help.q4.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q5.question")}</h3>
      <p className="mb-4">{t("help.q5.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q6.question")}</h3>
      <p className="mb-4">{t("help.q6.answer")}</p>

      <h3 className="text-xl font-bold mb-2">{t("help.q7.question")}</h3>
      <p>{t("help.q7.answer")}</p>

      <div className="flex items-center justify-center text-center mt-8">
        <p className="text-xl font-light ">
        {t("help.contact")}
        </p>
        <a className="text-xl ml-2 text-[#3DA2FD]" href="mailto:pagame.me@proton.me">pagame.me@proton.me</a>
      </div>
      
    </div>
    
  );
};

export default Ayuda;
