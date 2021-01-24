// import original module declarations
import 'styled-components';

export interface ThemeInterface {
  colors: {
    primaryColor: string;
  };
}

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface ITheme extends ThemeInterface {}
}
