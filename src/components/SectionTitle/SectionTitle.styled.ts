import styled from '@emotion/styled';
import { IStyledProps } from './SectionTitle.types';

export const Title = styled.h2<IStyledProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: Right Grotesk;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
