import '../styles/fonts.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ColorContext from '../context/colorContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  const colors = () => {
    if (darkMode) {
      return {
        primaryColor: 'dodgerblue',
        navColor: '#1f1f1f',
        backgroundColor: '#121212',
        fontColor: '#f3f3f3',
      };
    }
    return {
      primaryColor: 'dodgerblue',
      navColor: '#f4f4f8',
      backgroundColor: '#fff',
      fontColor: '#595C5E',
    };
  };

  return (
    <ColorContext.Provider
      value={{
        ...colors(),
        setDarkMode: setDarkMode,
      }}
    >
      <Component {...pageProps} />
    </ColorContext.Provider>
  );
}

export default MyApp;
