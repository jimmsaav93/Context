import React from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import Clock from './components/Clock';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Clock />
    </LanguageProvider>
  );
};

export default App;