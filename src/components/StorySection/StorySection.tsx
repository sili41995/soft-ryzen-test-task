import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  Accent,
  MobileSubtitle,
  MobileTitle,
  Section,
  Subtitle,
  Text,
  TextWrap,
  Title,
  TitleWrap,
} from './StorySection.styles';
import mobileImg from '@/images/storySection/mobileBgImage.png';
import tabletImg from '@/images/storySection/tabletBgImage.png';
import desktopImg from '@/images/storySection/desktopBgImage.png';

const StorySection: FC = () => (
  <Section mobileImg={mobileImg} tabletImg={tabletImg} desktopImg={desktopImg}>
    <TitleWrap>
      <MobileTitle>
        a Story that started with{' '}
        <Accent>
          one simple
          <br />
          ape
        </Accent>
      </MobileTitle>
      <Title>
        a Story that started with <Accent>one simple ape</Accent>
      </Title>
      <MobileSubtitle>
        WHO GOT
        <br />
        FED UP WITH BORING
        <br />
        AND HYPOCRITIC
        <br />
        COMMONPLACE THIS IS
        <br />
        HOW THE IDEA OF
        <br />
        ESCAPING AND DYNAMIC
        <br />
        JOURNEY ON THE YACHT
      </MobileSubtitle>
      <Subtitle>
        WHO GOT FED UP WITH BORING
        <br />
        AND HYPOCRITIC COMMONPLACE
        <br />
        THIS IS HOW THE IDEA OF
        <br />
        ESCAPING AND DYNAMIC
        <br />
        JOURNEY ON THE
        <br />
        YACHT
      </Subtitle>
    </TitleWrap>
    <TextWrap>
      <IoMdClose size={24} />
      <Text>
        EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
        RANDOMLY GENERATED BY USERS
      </Text>
    </TextWrap>
  </Section>
);

export default StorySection;