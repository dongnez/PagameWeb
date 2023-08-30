import { useTranslation } from "react-i18next";

const Novedades: React.FC = () => {
  const newsData = [
    {
      date: "27-07-2023",
      title: "Mejoras en la interfaz de usuario",
      description:
        "Hemos realizado mejoras en la interfaz de usuario para hacerla más intuitiva y atractiva. ¡Disfruta de una experiencia aún más fluida! Mejoras en la navegación y nuevos colores.",
    },
  ];
  const {t} = useTranslation();
  return (
    <div className="p-4 max-w-6xl text-white">
      <div className="sticky top-0 bg-black p-2 font-bold mb-8">
        <h2 className="text-4xl font-bold">{t("news.title")}</h2>
      </div>
      <div className="flex flex-col">
        {newsData.map((item, index) => (
          <div key={index} className="mb-6 text-lg">
            <div className="flex justify-between  bg-black text-gray-400  text-sm sm:text-base mb-4">
              <div className="text-right">{item.title}</div>
              <div className="text-center">{item.date}</div>
            </div>
            <div className="border-l-2 border-black pl-6 ml-4 mb-4">
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Novedades;
