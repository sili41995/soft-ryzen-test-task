declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    body: string;
    accent: string;
    white: string;
    primaryColor: string;
    primaryBlur: string;
    secondaryBlur: string;
  };
  fontSize: {
    primary: number;
    secondary: number;
    other: number;
  };
  padding: {
    container: number;
    mobileHeader: number;
    tabletHeader: number;
  };
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
    primaryColor: '#1e1e1e',
    accent: '#DC3B5A',
    body: '#181818',
    white: '#FFFFFF',
    primaryBlur: 'rgba(255, 255, 255, 0.1)',
    secondaryBlur: 'rgba(30, 30, 30, 0.1)',
  },
  fontSize: { primary: 16, secondary: 12, other: 24 },
  padding: {
    container: 16,
    mobileHeader: 8,
    tabletHeader: 12,
  },
  containerWidth: {
    mobile: 216,
    tablet: 592,
    desktop: 1032,
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
