import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    gap: 2px;
  }
`;

export const InputWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 8px 0 0 8px;
  backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.colors.primaryColor};

  @media screen and (min-width: 1280px) {
    padding: ${({ theme }) => theme.spacing(5)};
    border-radius: 12px 0 0 12px;
  }
`;

export const StyledInput = styled.input<IStyledProps>`
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  align-self: stretch;
  border: 1px solid;
  border-color: ${({ theme, invalidField }) =>
    invalidField ? theme.colors.accent : theme.colors.primaryColor};
  background-color: transparent;
  border-radius: 0 8px 8px 0;
  color: ${({ theme, invalidField }) =>
    invalidField ? theme.colors.accent : theme.colors.white};
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: ${({ theme, invalidField }) =>
      invalidField ? theme.colors.accent : theme.colors.white};
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ theme }) => theme.spacing(5)};
    border-radius: 0 12px 12px 0;
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const Error = styled.p<IStyledProps>`
  color: ${({ theme, invalidField }) =>
    invalidField ? theme.colors.accent : 'transparent'};
  font-family: Messina Sans Mono;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  text-align: right;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: 1.17;
  }
`;
