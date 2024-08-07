"use client"
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSwitcher;
