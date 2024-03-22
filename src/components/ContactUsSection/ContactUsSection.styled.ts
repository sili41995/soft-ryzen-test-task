import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(15)};
  padding-bottom: ${({ theme }) => theme.spacing(15)};

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(30)};
    padding-bottom: ${({ theme }) => theme.spacing(30)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(6)};
    width: 397px;
    margin-top: ${({ theme }) => theme.spacing(10)};
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(10)};
    width: 581px;
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
  }
`;
