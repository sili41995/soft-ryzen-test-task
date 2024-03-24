import styled from '@emotion/styled';
import { ClassNames } from '@/constants';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(15)};

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(30)};
  }

  & .${ClassNames.collectionSliderMobile} {
    margin-top: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & .${ClassNames.collectionSliderTablet} {
    display: none;
    margin-top: ${({ theme }) => theme.spacing(10)};

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: block;
    }
  }

  & .${ClassNames.collectionSliderDesktop} {
    display: none;
    margin-top: ${({ theme }) => theme.spacing(20)};

    @media screen and (min-width: 1280px) {
      display: block;
    }
  }
`;

export const Image = styled.img`
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 336px;
    border-radius: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 280px;
  }
`;
