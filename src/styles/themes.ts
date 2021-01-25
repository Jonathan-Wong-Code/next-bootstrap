import { ThemeInterface } from './styled.d';

// TODO: The Moderna Theme will be imported from the Component Library.
export const modernaTheme: ThemeInterface = {
  colors: {
    primaryColor: 'red',
  },
};

// Custom theme will be used to overwrite/add theme values that are not present on the imported theme.
const customTheme: ThemeInterface = {
  colors: {
    primaryColor: 'blue',
  },
};

export const theme = { ...modernaTheme, ...customTheme };
