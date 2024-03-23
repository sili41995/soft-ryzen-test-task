import { FC } from 'react';
import {
  Accent,
  ContentWrap,
  Description,
  DescriptionWrap,
  DesktopDescription,
  Question,
  Section,
  TabletDescription,
  TextWrap,
  Title,
  Warning,
} from './HeroSection.styled';
import Container from '../Container';

const HeroSection: FC = () => {
  return (
    <Section>
      <ContentWrap>
        <Container>
          <Question>diD yOu seE iT ?</Question>
          <Title>YACHT APES</Title>
          <TextWrap>
            <Warning>Apes aRe eveRywhere</Warning>
            <DescriptionWrap>
              <button type='button'>MEET APES</button>
              <Description>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
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
};

export default HeroSection;
