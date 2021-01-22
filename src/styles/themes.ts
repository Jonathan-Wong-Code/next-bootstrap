// The Moderna Theme will be imported from the Component Library.
// TODO: Remove this placeholder when that happens.
export const modernaTheme = {
  colors: {
    primaryColor: 'red',
  },
};

// Custom theme will be used to overwrite/add theme values that are not present on the imported theme.
const customTheme = {
  colors: {
    primaryColor: 'blue',
  },
};

export const theme = { ...modernaTheme, ...customTheme };
