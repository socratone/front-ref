import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ColorContext from '../context/colorContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [colors, setColors] = useState({
    primaryColor: 'yellow',
    sideNavColor: 'yellow',
    backgroundColor: '#fff',
    fontColor: '#000',
  });

  const handleToggleDarkMode = () => {
    if (colors.backgroundColor === '#fff') {
      setColors({
        primaryColor: 'dodgerblue',
        sideNavColor: 'gold',
        backgroundColor: '#000',
        fontColor: '#fff',
      });
    } else {
      setColors({
        primaryColor: 'dodgerblue',
        sideNavColor: 'lightskyblue',
        backgroundColor: '#fff',
        fontColor: '#000',
      });
    }
  };

  return (
    <ColorContext.Provider
      value={{
        ...colors,
        onToggleDarkMode: handleToggleDarkMode,
      }}
    >
      <Component {...pageProps} />
    </ColorContext.Provider>
  );
}

export default MyApp;
