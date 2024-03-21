import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.accent};
  padding-top: 6px;
  padding-bottom: 9px;

  @media screen and (min-width: 768px) {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(9)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
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
