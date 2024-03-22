import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(12)};
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: Biro Script Plus;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
`;
