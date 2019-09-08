import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import enJson from './locales/en.json';
import jaJson from './locales/ja.json';

import './App.css';

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  lng: 'ja',
  fallbackLng: false,
  returnEmptyString: false,
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
        <p>{t('ようこそ React と react-i18next へ。')}</p>
        <small>{t('定義していない文字列')}</small>
        <div>
          <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>
            {t('言語を切り替え')}
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
