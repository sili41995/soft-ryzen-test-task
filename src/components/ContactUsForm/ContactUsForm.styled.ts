import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const SubmitFormBtn = styled.button`
  padding: 10px 10px ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
  border-color: transparent;
  backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-family: Right Grotesk;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(5)}`};
    border-radius: 12px;
    font-size: 28px;
    line-height: 1.21;
  }
`;
