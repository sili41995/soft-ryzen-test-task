import { FC } from 'react';
import FakeSectionTitle from '@/components/FakeSectionTitle';
import HiddenSectionTitle from '@/components/HiddenSectionTitle';
import Slider from '@/components/Slider';
import Container from '@/components/Container';
import { ClassNames } from '@/constants';
import { IProps } from './ArtsSection.types';
import { Image, Section } from './ArtsSection.styled';

const ArtsSection: FC<IProps> = ({ sectionRef, artsSectionCards }) => {
  const cards = artsSectionCards.map((avatar) => (
    <Image src={avatar} alt='card avatar' />
  ));

  return (
    <Section ref={sectionRef}>
      <Container>
        <HiddenSectionTitle title='Arts' />
        <FakeSectionTitle title='COLLECTION' />
        <Slider
          slidesPerView={1}
          cards={cards}
          className={ClassNames.collectionSliderMobile}
        />
        <Slider
          slidesPerView={2}
          cards={cards}
          className={ClassNames.collectionSliderTablet}
        />
        <Slider
          slidesPerView={4}
          cards={cards}
          className={ClassNames.collectionSliderDesktop}
        />
      </Container>
    </Section>
  );
};

export default ArtsSection;
