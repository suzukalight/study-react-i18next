import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import './App.css';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next.',
        'change language': 'change language',
      },
    },
    ja: {
      translation: {
        'Welcome to React': 'ようこそ React と react-i18next へ。',
        'change language': '言語を切り替え',
      },
    },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

const App: React.FC = () => {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{t('Welcome to React')}</p>
        <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>{t('change language')}</button>
      </header>
    </div>
  );
};

export default App;
