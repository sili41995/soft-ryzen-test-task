import { FC } from 'react';
import { Global, css } from '@emotion/react';
import 'modern-normalize';
import {
  rightGroteskCompactBlack,
  messinaSansMonoRegular,
  biroScriptUSPlusBold,
  messinaSansMonoSemiBold,
  biroScriptPlusBold,
  interBlack,
  interRegular,
} from '@/fonts';
import { theme } from '@/constants';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Right Grotesk';
        src: local('Right Grotesk'),
          url(${rightGroteskCompactBlack}) format('opentype');
        font-weight: 900;
      }

      @font-face {
        font-family: 'Messina Sans Mono';
        src: local('Messina Sans Mono'),
          url(${messinaSansMonoRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Biro Script Plus US';
        src: local('Biro Script Plus US'),
          url(${biroScriptUSPlusBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: 'Messina Sans Mono';
        src: local('Messina Sans Mono'),
          url(${messinaSansMonoSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: 'Biro Script Plus';
        src: local('Biro Script Plus'),
          url(${biroScriptPlusBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${interRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${interBlack}) format('truetype');
        font-weight: 900;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
        background-color: ${theme.colors.body};
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
