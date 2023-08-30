import PagameTitle from "../../components/PagameTitle";
import { useTranslation } from "react-i18next";

export const PoliticaPrivacidad = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 text-white max-w-6xl text-justify">
      <div className="flex">
        <h2 className="text-4xl font-bold mb-4 mr-2 right">
          {t("privacy.title")}
        </h2>
        <PagameTitle className="text-4xl" />
      </div>
      <p className="mb-4 underline text-md">{t("privacy.update-date")}</p>

      <p>{t("privacy.description")}</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        {t("privacy.info.title")}
      </h3>
      <ul className="list-disc list-inside">
        <li className="mb-2">{t("privacy.info.points.a")}</li>
        <li className="mb-2">{t("privacy.info.points.b")}</li>
        <li className="mb-2">{t("privacy.info.points.c")}</li>
        <li className="mb-2">{t("privacy.info.points.d")}</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        {t("privacy.use-info.title")}
      </h3>
      <p>{t("privacy.use-info.intro")}</p>
      <ul className="list-disc list-inside">
        <li className="mb-2">{t("privacy.use-info.points.a")}</li>
        <li className="mb-2">{t("privacy.use-info.points.b")}</li>
        <li className="mb-2">{t("privacy.use-info.points.c")}</li>
        <li className="mb-2">{t("privacy.use-info.points.d")}</li>
        <li className="mb-2">{t("privacy.use-info.points.e")}</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
      {t("privacy.share-info.title")}
      </h3>
      <p>
      {t("privacy.share-info.intro")}
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
        {t("privacy.share-info.points.a")}
        </li>
        <li className="mb-2">
        {t("privacy.share-info.points.b")}
        </li>
        <li className="mb-2">
        {t("privacy.share-info.points.c")}
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        {t("privacy.security.title")}
      </h3>
      <p>
       {t("privacy.security.intro")}
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">{t("privacy.integrated-payments.title")}</h3>
      <p>{t("privacy.integrated-payments.intro")}
      </p>

      <p className="mt-6">
      {t("privacy.end-privacy.info")}{" "}
        <a href="mailto:pagame.me@proton.me">pagame.me@proton.me</a>.
      </p>

      <p className="mt-6">
      {t("privacy.end-privacy.info2")}
      </p>
    </div>
  );
};

export default PoliticaPrivacidad;
