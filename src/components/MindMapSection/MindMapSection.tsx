import { FC } from 'react';
import SectionTitle from '@/components/SectionTitle';
import Slider from '@/components/Slider';
import {
  Card,
  CardText,
  CardTitle,
  Link,
  Section,
} from './MindMapSection.styled';
import Arrow from '@/icons/up-right-arrow.svg?react';
import CardsList from '@/components/CardsList';
import { ClassNames, Sections, mindMapSectionCards } from '@/constants';
import Container from '@/components/Container';
import { IProps } from './MindMapSection.types';

const MindMapSection: FC<IProps> = ({ sectionRef }) => {
  const cards = [
    ...mindMapSectionCards.map(({ text, title }) => (
      <Card key={title}>
        <CardText>{text}</CardText>
        <CardTitle>{title}</CardTitle>
      </Card>
    )),
    <Link
      href='https://github.com/sili41995'
      target='_blank'
      rel='noreferrer noopener'
    >
      <Card>
        <Arrow />
        <CardTitle>
          Learn
          <br />
          more
          <br />
          in mind map
        </CardTitle>
      </Card>
    </Link>,
  ];

  return (
    <Section id={Sections.mMap} ref={sectionRef}>
      <Container>
        <SectionTitle title='MIND map' />
        <Slider cards={cards} slidesPerView={1} className={ClassNames.slider} />
        <CardsList cards={cards} />
      </Container>
    </Section>
  );
};

export default MindMapSection;
