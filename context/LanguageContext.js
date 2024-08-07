"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import en from '../translations/en/common.json';
import fr from '../translations/fr/common.json';
import es from '../translations/es/common.json';

export const LanguageContext = createContext();

const translations = { en, fr, es };

export const LanguageProvider = ({ children }) => {
  const [language, setLan] = useState('en');
  const [loader, setLoader] = useState(1)
  useEffect(() => { 
  const savedLang =  localStorage.getItem("lang")
  if(savedLang){
      setLan(savedLang)
  }
//   console.log(savedLang)
   },[loader])
  const setLanguage = (lan) => { 
    localStorage.setItem("lang",lan)
    setLoader(loader + 1)
    // console.log(lan)
   }

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
