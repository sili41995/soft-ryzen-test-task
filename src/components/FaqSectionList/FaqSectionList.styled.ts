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

export const ListItem = styled.li`
  width: 100%;
`;

export const Card = styled.button<IStyledProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme, isActiveCard }) =>
    isActiveCard ? theme.colors.primaryColor : 'transparent'};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(2)}`} 10px;
  padding-bottom: ${({ theme, isActiveCard }) =>
    isActiveCard ? '10px' : theme.spacing(2)};
  text-align: left;

  @media screen and (min-width: 768px) {
    border-radius: 16px;
    padding: 18px ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ isActiveCard }) => (isActiveCard ? '23px' : '18px')};
  }

  @media screen and (min-width: 1280px) {
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing(6)};
  }

  &:is(:hover, :focus) {
    & > p {
      color: ${({ theme }) => theme.colors.white};
    }

    & > div > p:first-of-type {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 19px;
  top: 50%;
  width: 148px;
  height: 183px;
  border-radius: 16px;
  transform: translateY(-50%) rotate(-16deg);

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    left: 16px;
    transform: translateY(-50%) rotate(-8deg);
    width: 248px;
    height: 282px;
  }
`;

export const Number = styled.p<IStyledProps>`
  flex-shrink: 0;
  color: ${({ theme, isActiveCard }) =>
    isActiveCard ? theme.colors.white : theme.colors.accent};
  font-family: Biro Script Plus;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.67;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.69;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 339px;
  }

  @media screen and (min-width: 1280px) {
    width: 635px;
  }
`;

export const Title = styled.p<IStyledProps>`
  color: ${({ theme, isActiveCard }) =>
    isActiveCard ? theme.colors.accent : theme.colors.white};
  font-family: Right Grotesk;
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

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
