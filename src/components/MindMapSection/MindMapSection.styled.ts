import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(20)};

  & .${ClassNames.slider} {
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 768px) {
    & .${ClassNames.slider} {
      display: none;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 242px;
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3)}`};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1280px) {
    min-height: 480px;

    & > svg {
      width: 64px;
      height: 64px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-family: Right Grotesk;
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const CardText = styled.p`
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 128px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 228px;
    margin-left: auto;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const Link = styled.a`
  & > div {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  & svg {
    margin-left: auto;
  }
`;
