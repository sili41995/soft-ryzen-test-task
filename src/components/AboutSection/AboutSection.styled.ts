import styled from '@emotion/styled';
import { IStyledProps } from './AboutSection.types';

export const Section = styled.section``;

export const ContentWrap = styled.div<IStyledProps>`
  padding-top: ${({ theme }) => theme.spacing(15)};
  padding-bottom: ${({ theme }) => theme.spacing(83)};
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: url(${({ mobileImg }) => mobileImg});

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(9)};
    background-image: url(${({ tabletImg }) => tabletImg});
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(30)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
    background-image: url(${({ desktopImg }) => desktopImg});
  }
`;

export const TitleWrap = styled.div`
  display: flex;

  & > h3 {
    color: ${({ theme }) => theme.colors.white};
    font-family: Right Grotesk;
    font-size: 40px;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 120px;
    }
  }

  & > p {
    color: ${({ theme }) => theme.colors.white};
    font-family: Messina Sans Mono;
    font-size: ${({ theme }) => theme.fontSize.primary}px;
    font-weight: 400;
    line-height: 1.19;
    text-transform: uppercase;
    text-align: right;

    @media screen and (min-width: 1280px) {
      font-size: ${({ theme }) => theme.fontSize.other}px;
      line-height: 1.21;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const MobileTitle = styled.h3`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h3`
  width: 269px;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    width: 538px;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const MobileSubtitle = styled.p`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Subtitle = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: 36px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(6)};
    width: 269px;
    margin-top: 68px;
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(9)};
    width: 417px;
    margin-top: 56px;
  }
`;

export const Text = styled.p`
  font-family: Messina Sans Mono;
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.primary}px;
    line-height: 1.19;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSize.other}px;
    line-height: 1.21;
  }
`;
