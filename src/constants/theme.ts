declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    body: string;
    accent: string;
    white: string;
    primaryColor: string;
  };
  // fontWeight: { };
  // fontSize: {  };
  padding: {
    container: number;
    mobileHeader: number;
    tabletHeader: number;
  };
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
    primaryColor: '#1e1e1e',
    accent: '#DC3B5A',
    body: '#171717',
    white: '#FFFFFF',
  },
  // fontWeight: {
  // },
  // fontSize: {
  // },
  padding: {
    container: 16,
    mobileHeader: 8,
    tabletHeader: 12,
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
