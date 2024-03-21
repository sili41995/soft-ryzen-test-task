declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    body: string;
    accent: string;
    white: string;
  };
  // fontWeight: { };
  // fontSize: {  };
  padding: { container: number };
  // borderRadius: {  };
  // primaryGap: number;
  containerWidth: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    body: '#4A4A4A',
    accent: '#DC3B5A',
    white: '#FFFFFF',
  },
  // fontWeight: {
  // },
  // fontSize: {
  // },
  padding: {
    container: 16,
  },
  // borderRadius: {
  // },
  containerWidth: {
    mobile: 216,
    tablet: 592,
    desktop: 1032,
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
