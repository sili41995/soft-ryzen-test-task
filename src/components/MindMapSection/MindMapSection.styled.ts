import styled from '@emotion/styled';

export const Section = styled;

export const CardsList = styled.ul``;

export const Card = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:first-of-type) {
      display: none;
    }
  }
`;
