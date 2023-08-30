import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  
    const {i18n} = useTranslation();

  const selectedLanguage = i18n.language || "ES";

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="p-4">
      <select
        className="p-2 rounded border border-black bg-black text-white"
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
