declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  // colors: {  };
  // fontWeight: { };
  // fontSize: {  };
  // padding: {  };
  // borderRadius: {  };
  // primaryGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  // colors: {
  // },
  // fontWeight: {
  // },
  // fontSize: {
  // },
  // padding: {
  // },
  // borderRadius: {
  // },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
