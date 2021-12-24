import { createContext } from 'react';

const ColorContext = createContext({
  primaryColor: '',
  sideNavColor: '',
  backgroundColor: '',
  fontColor: '',
  setDarkMode: (checked: boolean) => {},
});

export default ColorContext;
