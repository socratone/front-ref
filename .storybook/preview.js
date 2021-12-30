import '../styles/fonts.css';
import '../styles/globals.css';
import ColorContext from '../context/colorContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ColorContext.Provider
        value={{
          primaryColor: 'dodgerblue',
          navColor: '#f4f4f8',
          backgroundColor: '#fff',
          fontColor: '#595C5E',
          setDarkMode: (checked) => {},
        }}
      >
        <Story />
      </ColorContext.Provider>
    );
  },
];
