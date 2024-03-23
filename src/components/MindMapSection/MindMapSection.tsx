import { FC } from 'react';
import SectionTitle from '../SectionTitle';
import Slider from '../Slider';
import {
  Card,
  CardText,
  CardTitle,
  Link,
  Section,
} from './MindMapSection.styled';
import Arrow from '@/icons/up-right-arrow.svg?react';
import CardsList from '../CardsList';
import { ClassNames, mindMapSectionCards } from '@/constants';
import Container from '@/components/Container';

const MindMapSection: FC = () => {
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
    <Section>
      <Container>
        <SectionTitle title='MIND map' />
        <Slider cards={cards} slidesPerView={1} className={ClassNames.slider} />
        <CardsList cards={cards} />
      </Container>
    </Section>
  );
};

export default MindMapSection;
