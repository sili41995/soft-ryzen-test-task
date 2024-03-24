import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.body};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) =>
    theme.containerWidth.mobile + theme.padding.container * 2}px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 294px;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  text-transform: uppercase;
`;

export const Copyright = styled.p`
  color: white;
`;
