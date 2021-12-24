import { createContext } from 'react';

const ColorContext = createContext({
  primaryColor: '',
  sideNavColor: '',
  backgroundColor: '',
  fontColor: '',
  onToggleDarkMode: () => {},
});

export default ColorContext;
