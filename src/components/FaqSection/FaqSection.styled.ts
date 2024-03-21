import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(15)};

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(30)};
  }
`;
