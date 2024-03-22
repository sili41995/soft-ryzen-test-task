import { FC } from 'react';
import FakeSectionTitle from '@/components/FakeSectionTitle';
import HiddenSectionTitle from '@/components/HiddenSectionTitle';
import Slider from '@/components/Slider';
import { ClassNames, artsSectionCards } from '@/constants';
import { Image, Section } from './ArtsSection.styles';

const ArtsSection: FC = () => {
  const cards = artsSectionCards.map((avatar) => (
    <Image src={avatar} alt='card avatar' />
  ));

  return (
    <Section>
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
    </Section>
  );
};

export default ArtsSection;
