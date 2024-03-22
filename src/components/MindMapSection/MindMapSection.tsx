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

const MindMapSection: FC = () => {
  const cards = [
    <Card>
      <CardText>
        All owners of APE NFTs and all future collections will receive a
        percentage of sales based on the number of NFTs they own
      </CardText>
      <CardTitle>YAPE DROP</CardTitle>
    </Card>,
    <Card>
      <CardText>
        Launch of the 2nd YACHT Collection Releasing the first version of the
        Ape Slam Game
      </CardText>
      <CardTitle>New Collection</CardTitle>
    </Card>,
    <Card>
      <CardText>
        Launch your own token, the proceeds of which will go to a global fund to
        LAUNCH YACHT CLUB AND PROMOTE it
      </CardText>
      <CardTitle>Token</CardTitle>
    </Card>,
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
      <SectionTitle title='MIND map' />
      <Slider cards={cards} slidesPerView={1} />
      <CardsList cards={cards} />
    </Section>
  );
};

export default MindMapSection;
