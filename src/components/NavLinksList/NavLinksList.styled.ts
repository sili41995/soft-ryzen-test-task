import styled from '@emotion/styled';
import { IStyledProps } from './NavLinksList.types';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ListItem = styled.li<IStyledProps>`
  & > a {
    display: block;
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: 8px;
    backdrop-filter: blur(12px);
    background-color: ${({ scrollingOccurred, showBurgerMenu, theme }) =>
      scrollingOccurred || showBurgerMenu
        ? theme.colors.primaryBlur
        : theme.colors.secondaryBlur};

    @media screen and (min-width: 768px) {
      background-color: ${({ scrollingOccurred, theme }) =>
        scrollingOccurred
          ? theme.colors.primaryBlur
          : theme.colors.secondaryBlur};
    }

    & > svg {
      display: block;
      width: 16px;
      height: 16px;
      fill: ${({ theme, scrollingOccurred, showBurgerMenu }) =>
        scrollingOccurred || showBurgerMenu
          ? theme.colors.white
          : theme.colors.primaryColor};
      transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

      @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
        fill: ${({ theme, scrollingOccurred }) =>
          scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};
      }
    }

    &:is(:hover, :focus) svg {
      fill: ${({ theme, scrollingOccurred, showBurgerMenu }) =>
        scrollingOccurred || showBurgerMenu
          ? theme.colors.accent
          : theme.colors.white};

      @media screen and (min-width: 768px) {
        fill: ${({ theme, scrollingOccurred }) =>
          scrollingOccurred ? theme.colors.accent : theme.colors.white};
      }
    }

    @media screen and (min-width: 768px) {
      background-color: ${({ scrollingOccurred, theme }) =>
        scrollingOccurred
          ? theme.colors.primaryBlur
          : theme.colors.secondaryBlur};
      padding: ${({ theme }) => theme.spacing(3)};
      border-radius: 12px;
    }

    @media screen and (min-width: 1280px) {
      padding: ${({ theme }) => theme.spacing(7)};
    }
  }
`;
