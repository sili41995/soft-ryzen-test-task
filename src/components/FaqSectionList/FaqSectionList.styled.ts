import styled from '@emotion/styled';
import { IStyledProps } from './FaqSectionList.types';

24;
48;
80;

export const List = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const ListItem = styled.li<IStyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: 12px;
  background-color: ${({ theme, isActiveCard }) =>
    isActiveCard && theme.colors.cardBg};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(2)}`} 10px;

  @media screen and (min-width: 768px) {
    border-radius: 16px;
    padding: 18px ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Number = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-family: Biro Script Plus;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.67;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.69;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const TitleWrap = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Right Grotesk;
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(9)};
    font-size: 16px;
    line-height: 1.19;
  }
`;
