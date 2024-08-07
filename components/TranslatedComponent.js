"use client"
import { useLanguage } from '../context/LanguageContext';

const TranslatedComponent = () => {
  const { t } = useLanguage();

  return (
    <div>
      <p>{t('greeting')}</p>
      <p>{t('farewell')}</p>
    </div>
  );
};

export default TranslatedComponent;
