import styled from '@emotion/styled';
import { IStyledMenuBtnProps, IStyledProps } from './Menu.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li<IStyledProps>`
  & > a {
    display: block;
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: 8px;
    backdrop-filter: blur(12px);
    background-color: ${({ scrollingOccurred }) =>
      scrollingOccurred ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)'};

    & > svg {
      display: block;
      width: 16px;
      height: 16px;
      fill: ${({ theme, scrollingOccurred }) =>
        scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};
      transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

      @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }

    &:is(:hover, :focus) svg {
      fill: ${({ theme, scrollingOccurred }) =>
        scrollingOccurred ? theme.colors.accent : theme.colors.white};
    }

    @media screen and (min-width: 768px) {
      padding: ${({ theme }) => theme.spacing(3)};
      border-radius: 12px;
    }

    @media screen and (min-width: 1280px) {
      padding: ${({ theme }) => theme.spacing(7)};
    }
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const MenuBtn = styled.button<IStyledMenuBtnProps>`
  height: 48px;
  border: none;
  border-radius: ${({ showMobileMenu }) =>
    showMobileMenu ? '0px 8px 8px 0px' : '8px'};
  backdrop-filter: blur(12px);
  background-color: ${({ scrollingOccurred }) =>
    scrollingOccurred ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)'};
  color: ${({ theme, scrollingOccurred }) =>
    scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc},
    text-decoration-color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: 768px) {
    border-radius: ${({ showMobileMenu }) =>
      showMobileMenu ? '0px 12px 12px 0px' : '12px'};
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
    font-size: 16px;
    line-height: 1.19;
  }

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
  }
`;
