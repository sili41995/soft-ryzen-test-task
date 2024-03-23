import styled from '@emotion/styled';

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  & > a {
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: 8px;
    backdrop-filter: blur(12px);
    background-color: rgba(30, 30, 30, 0.1);

    & > svg {
      display: block;
      width: 16px;
      height: 16px;
      fill: ${({ theme }) => theme.colors.primaryColor};
      transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

      @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }

    &:is(:hover, :focus) svg {
      fill: ${({ theme }) => theme.colors.white};
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

export const MenuBtn = styled.button`
  height: 48px;
  border: none;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc},
    text-decoration-color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: 768px) {
    border-radius: 12px;
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
    font-size: 16px;
    line-height: 1.19;
  }

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.white};
    text-decoration-color: currentColor;
  }
`;
