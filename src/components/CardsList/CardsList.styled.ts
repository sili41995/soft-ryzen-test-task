import styled from '@emotion/styled';

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
    margin-top: ${({ theme }) => theme.spacing(10)};
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const ListItem = styled.li``;
