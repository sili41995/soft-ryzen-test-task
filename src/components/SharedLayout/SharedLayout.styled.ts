import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
