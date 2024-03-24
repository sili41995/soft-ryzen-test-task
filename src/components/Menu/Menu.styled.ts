import styled from '@emotion/styled';
import { IStyledBurgerMenuBtnProps, IStyledProps } from './Menu.types';

export const Container = styled.div`
  position: relative;
`;

export const ControlsWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const BurgerMenuBtn = styled.button<IStyledBurgerMenuBtnProps>`
  width: 100%;
  height: 48px;
  border: none;
  padding: 0;
  backdrop-filter: blur(12px);
  border-radius: 8px;
  background-color: ${({ scrollingOccurred, showBurgerMenu, theme }) =>
    scrollingOccurred || showBurgerMenu
      ? theme.colors.primaryBlur
      : theme.colors.secondaryBlur};
  color: ${({ theme, scrollingOccurred, showBurgerMenu }) =>
    scrollingOccurred || showBurgerMenu
      ? theme.colors.white
      : theme.colors.primaryColor};
  font-family: Messina Sans Mono;
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc},
    text-decoration-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred, showBurgerMenu }) =>
      scrollingOccurred || showBurgerMenu
        ? theme.colors.accent
        : theme.colors.white};
    text-decoration-color: currentColor;
  }

  @media screen and (min-width: 768px) {
    background-color: ${({ scrollingOccurred, theme }) =>
      scrollingOccurred
        ? theme.colors.primaryBlur
        : theme.colors.secondaryBlur};
    border-radius: ${({ showBurgerMenu }) =>
      showBurgerMenu ? '0px 12px 12px 0px' : '12px'};
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};

    &:is(:hover, :focus) {
      color: ${({ theme, scrollingOccurred }) =>
        scrollingOccurred ? theme.colors.accent : theme.colors.white};
      text-decoration-color: currentColor;
    }
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
    font-size: ${({ theme }) => theme.fontSize.primary}px;
    line-height: 1.19;
  }
`;

export const MenuBtn = styled.button<IStyledProps>`
  background-color: ${({ scrollingOccurred, theme }) =>
    scrollingOccurred ? theme.colors.primaryBlur : theme.colors.secondaryBlur};
  color: ${({ theme, scrollingOccurred }) =>
    scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};
  font-family: Messina Sans Mono;
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc},
    text-decoration-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
