import { FC } from 'react';
import FakeSectionTitle from '@/components/FakeSectionTitle';
import HiddenSectionTitle from '@/components/HiddenSectionTitle';
import Slider from '@/components/Slider';
import { ClassNames, Sections, artsSectionCards } from '@/constants';
import { Image, Section } from './ArtsSection.styles';
import Container from '@/components/Container';

const ArtsSection: FC = () => {
  const cards = artsSectionCards.map((avatar) => (
    <Image src={avatar} alt='card avatar' />
  ));

  return (
    <Section id={Sections.arts}>
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
