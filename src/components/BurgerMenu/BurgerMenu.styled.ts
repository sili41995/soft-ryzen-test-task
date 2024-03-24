import styled from '@emotion/styled';
import { IStyledProps } from './BurgerMenu.types';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;

  @media screen and (max-width: 767px) {
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.body};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 48px;
  }

  @media screen and (min-width: 1280px) {
    right: 80px;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({ theme }) =>
      theme.containerWidth.mobile + theme.padding.container * 2}px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 294px;
    padding-bottom: ${({ theme }) => theme.spacing(20)};
    padding-left: ${({ theme }) => theme.padding.container}px;
    padding-right: ${({ theme }) => theme.padding.container}px;
  }
`;

export const List = styled.ul`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
  }
`;

export const ListItem = styled.li`
  &:first-of-type {
    @media screen and (min-width: 768px) {
      border-radius: 12px 0 0 12px;
      overflow: hidden;
    }
  }
`;

export const Button = styled.button<IStyledProps>`
  height: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 48px;
    backdrop-filter: blur(12px);
    background-color: ${({ scrollingOccurred }) =>
      scrollingOccurred ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)'};
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.white : theme.colors.primaryColor};
    font-family: Messina Sans Mono;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      text-decoration-color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    font-size: 16px;
    line-height: 1.19;
  }

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
