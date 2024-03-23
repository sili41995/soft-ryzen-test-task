import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 54px;

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContentWrap = styled.div`
  max-width: 344px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({ theme }) => theme.spacing(9)};
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    max-width: 736px;
    padding-top: ${({ theme }) => theme.spacing(31)};
    padding-bottom: 35px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1408px;
    padding-top: 197px;
    padding-bottom: 81px;
    border-radius: 24px;
  }
`;

export const Question = styled.p`
  color: ${({ theme }) => theme.colors.cardBg};
  font-family: Biro Script Plus;
  font-size: 16px;
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
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.cardBg};
  font-family: Right Grotesk;
  font-size: 44px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    font-size: 92px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    letter-spacing: 0;
  }
`;

export const TextWrap = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 286px;
  }
`;

export const Warning = styled.p`
  color: ${({ theme }) => theme.colors.cardBg};
  font-family: Biro Script Plus;
  font-size: 16px;
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
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const DescriptionWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 190px;
  }

  @media screen and (min-width: 1280px) {
    width: 337px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.cardBg};
  font-family: Messina Sans Mono;
  font-size: 12px;
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
    color: ${({ theme }) => theme.colors.cardBg};
    font-family: Messina Sans Mono;
    font-size: 12px;
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
    color: ${({ theme }) => theme.colors.cardBg};
    font-family: Messina Sans Mono;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.19;
    text-align: justify;
    text-transform: uppercase;
  }
`;
