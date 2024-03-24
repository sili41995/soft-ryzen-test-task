import styled from '@emotion/styled';
import { IStyledProps } from './Header.types';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 62px;
  width: 100%;

  @media screen and (min-width: 768px) {
    top: 66px;
  }

  @media screen and (min-width: 1280px) {
    top: 40px;
  }
`;

export const Container = styled.div<IStyledProps>`
  position: relative;
  max-width: ${({ theme }) => 328 + theme.padding.mobileHeader * 2}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.padding.mobileHeader}px;
  padding-right: ${({ theme }) => theme.padding.mobileHeader}px;

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => 712 + theme.padding.tabletHeader * 2}px;
    padding-left: ${({ theme }) => theme.spacing(3)};
    padding-right: ${({ theme }) => theme.spacing(3)};
  }

  @media screen and (min-width: 1280px) {
    max-width: ${({ theme }) => 1216 + theme.padding.container * 2}px;
    padding-left: ${({ theme }) => theme.padding.container}px;
    padding-right: ${({ theme }) => theme.padding.container}px;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 8px;

  & > a {
    & > svg {
      display: block;
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

  @media screen and (min-width: 1280px) {
    top: 15px;
  }
`;
