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
        sideNavColor: 'gold',
        backgroundColor: '#000',
        fontColor: '#fff',
      };
    }
    return {
      primaryColor: 'dodgerblue',
      sideNavColor: 'lightskyblue',
      backgroundColor: '#fff',
      fontColor: '#000',
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
