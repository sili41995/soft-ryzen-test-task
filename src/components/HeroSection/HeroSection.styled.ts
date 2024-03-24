import styled from '@emotion/styled';
import { IStyledProps } from './HeroSection.types';

export const Section = styled.section`
  padding-top: 54px;

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContentWrap = styled.div<IStyledProps>`
  max-width: 344px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({ theme }) => theme.spacing(9)};
  padding-bottom: 19px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.accent};
  background-image: url(${({ mobileBgImage }) => mobileBgImage});
  background-repeat: no-repeat;
  background-position: center bottom 110px;

  @media screen and (min-width: 768px) {
    max-width: 736px;
    padding-top: ${({ theme }) => theme.spacing(31)};
    padding-bottom: 35px;
    border-radius: 16px;
    background-image: url(${({ tabletBgImage }) => tabletBgImage});
    background-position: left calc(50% - 20.5px) bottom;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1408px;
    padding-top: 197px;
    padding-bottom: 81px;
    border-radius: 24px;
    background-image: url(${({ desktopBgImage }) => desktopBgImage});
    background-position: left calc(50% - 27.5px) bottom;
  }
`;

export const Question = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Biro Script Plus;
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 400;
  line-height: 1.69;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 7px;
    font-size: ${({ theme }) => theme.fontSize.other}px;
    line-height: 1.67;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Right Grotesk;
  font-size: 44px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    font-size: 92px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 7px;
    margin-right: 6px;
    font-size: 164px;
    letter-spacing: 0;
  }
`;

export const TitleAccent = styled.span``;

export const TextWrap = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 286px;
  }

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(4)};
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 30px;
    margin-left: 127px;
    margin-right: ${({ theme }) => theme.spacing()};
  }
`;

export const Warning = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Biro Script Plus;
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 400;
  line-height: 1.69;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSize.other}px;
    line-height: 1.67;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing(4)};
    width: 190px;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  @media screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(7)};
    width: 337px;
    margin-top: 10px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Messina Sans Mono;
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TabletDescription = styled.p`
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Messina Sans Mono;
    font-size: ${({ theme }) => theme.fontSize.secondary}px;
    font-weight: 400;
    line-height: 1.17;
    text-align: justify;
    text-transform: uppercase;
  }
`;

export const Accent = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
`;

export const DesktopDescription = styled.p`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Messina Sans Mono;
    font-size: ${({ theme }) => theme.fontSize.primary}px;
    font-weight: 400;
    line-height: 1.19;
    text-align: justify;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  padding: 10px 10px ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
  border: none;
  backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.colors.secondaryBlur};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Right Grotesk;
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 900;
  line-height: 1.19;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.white};
  }
`;
