import { FC } from 'react';
import Container from '@/components/Container';
import mobileBgImage from '@/images/heroSection/mobileBgImage.png';
import tabletBgImage from '@/images/heroSection/tabletBgImage.png';
import desktopBgImage from '@/images/heroSection/desktopBgImage.png';
import { IProps } from './HeroSection.types';
import {
  Accent,
  Button,
  ContentWrap,
  Description,
  DescriptionWrap,
  DesktopDescription,
  Question,
  Section,
  TabletDescription,
  TextWrap,
  Title,
  TitleAccent,
  Warning,
} from './HeroSection.styled';

const HeroSection: FC<IProps> = ({ onMeetApesBtnClick }) => (
  <Section>
    <ContentWrap
      mobileBgImage={mobileBgImage}
      tabletBgImage={tabletBgImage}
      desktopBgImage={desktopBgImage}
    >
      <Container>
        <Question>diD yOu seE iT ?</Question>
        <Title>
          <TitleAccent>YACHT</TitleAccent> <TitleAccent>APES</TitleAccent>
        </Title>
        <TextWrap>
          <Warning>Apes aRe eveRywhere</Warning>
          <DescriptionWrap>
            <Button type='button' onClick={onMeetApesBtnClick}>
              MEET APES
            </Button>
            <Description>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </Description>
            <TabletDescription>
              <Accent>Yacht Ape is a</Accent>
              <br />
              collection of unique digital apes that you can own in NFT format
            </TabletDescription>
            <DesktopDescription>
              <Accent>Yacht Ape is a collection</Accent>
              <br />
              of unique digital apes that you can own in NFT format
            </DesktopDescription>
          </DescriptionWrap>
        </TextWrap>
      </Container>
    </ContentWrap>
  </Section>
);

export default HeroSection;
