import styled from '@emotion/styled';
import { IStyledProps } from './AnchorLinksList.types';

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
  }
`;

export const ListItem = styled.li`
  height: 48px;

  &:first-of-type {
    border-radius: 8px 0 0 8px;
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
  }
`;

export const Link = styled.a<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 100%;
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

  &:is(:hover, :focus) {
    color: ${({ theme, scrollingOccurred }) =>
      scrollingOccurred ? theme.colors.accent : theme.colors.white};
    text-decoration-color: currentColor;
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    font-size: 16px;
    line-height: 1.19;
  }
`;
