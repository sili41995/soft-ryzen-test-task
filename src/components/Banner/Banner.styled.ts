import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  padding-top: 6px;
  padding-bottom: 9px;

  @media screen and (min-width: 768px) {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
  padding-left: 100%;
  animation: text 10s infinite linear;

  @keyframes text {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-400%, 0);
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes text {
      0% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(-250%, 0);
      }
    }
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(9)};

    @keyframes text {
      0% {
        transform: translate(0, 0);
      }

      100% {
        transform: translate(-200%, 0);
      }
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(9)};
  }
`;

export const Subtitle = styled.p`
  font-family: Right Grotesk;
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;
