import styled from '@emotion/styled';
import { IStyledProps } from './Menu.types';

export const Container = styled.div`
  display: flex;
`;

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const BurgerMenuBtn = styled.button<IStyledProps>`
  width: 100%;
  height: 48px;
  border: none;
  padding: 0;
  backdrop-filter: blur(12px);
  border-radius: 8px;
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

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuBtn = styled.button<IStyledProps>`
  width: 100%;
  height: 48px;
  border: none;
  padding: 0;
  backdrop-filter: blur(12px);
  border-radius: ${({ showMenu }) => (showMenu ? '0px 12px 12px 0px' : '12px')};
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

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
    font-size: 16px;
    line-height: 1.19;
  }
`;
