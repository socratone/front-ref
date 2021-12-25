import { createContext } from 'react';

const ColorContext = createContext({
  primaryColor: '',
  navColor: '',
  backgroundColor: '',
  fontColor: '',
  setDarkMode: (checked: boolean) => {},
});

export default ColorContext;
