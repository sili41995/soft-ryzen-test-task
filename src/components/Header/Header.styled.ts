import styled from '@emotion/styled';
import { IStyledProps } from './Header.types';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 70px;
  width: 100%;

  @media screen and (min-width: 768px) {
    top: 74px;
  }

  @media screen and (min-width: 1280px) {
    top: 55px;
  }
`;

export const Container = styled.div<IStyledProps>`
  display: flex;
  justify-content: ${({ scrollingOccurred }) =>
    scrollingOccurred ? 'flex-end' : 'space-between'};
  max-width: ${({ theme }) => 318 + theme.padding.mobileHeader * 2}px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => 712 + theme.padding.tabletHeader * 2}px;
  }

  @media screen and (min-width: 1280px) {
    max-width: ${({ theme }) => 1216 + theme.padding.container * 2}px;
  }
`;

export const Nav = styled.nav`
  & > a {
    & > svg {
      width: 48px;
      height: 32px;
      fill: ${({ theme }) => theme.colors.primaryColor};
      transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

      @media screen and (min-width: 1280px) {
        width: 72px;
        height: 50px;
      }
    }

    &:is(:hover, :focus) svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
