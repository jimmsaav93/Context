import React, { useContext } from 'react';
import { useLanguage } from './LanguageContext';

const Clock = () => {
  const { language } = useLanguage();

  const getCurrentTimeMessage = () => {
    const now = new Date().toLocaleTimeString();
    switch (language) {
      case 'en':
        return `Current time: ${now}`;
      case 'es':
        return `Hora actual: ${now}`;
      case 'fr':
        return `Heure actuelle: ${now}`;
      default:
        return `Current time: ${now}`;
    }
  };

  return <div>{getCurrentTimeMessage()}</div>;
};

export default Clock;