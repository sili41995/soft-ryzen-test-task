import { FC } from 'react';
import ArrowIcon from '@/icons/up-right-arrow.svg?react';
import { Card, CardsList } from './MindMapSection.styled';
import SectionTitle from '../SectionTitle';

const MindMapSection: FC = () => {
  return (
    <section>
      <SectionTitle title='MIND map' />
      {/* <CardsList>
        <Card>
          <p>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <p>YAPE DROP</p>
        </Card>
        <Card>
          <p>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <p>New Collection</p>
        </Card>
        <Card>
          <p>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <p>Token</p>
        </Card>
        <Card>
          <ArrowIcon />
          <p>Learn more in mind map</p>
        </Card>
      </CardsList> */}
      <ul>
        <li>
          <button type='button'>Prev</button>
        </li>
        <li>
          <button type='button'>Next</button>
        </li>
      </ul>
    </section>
  );
};

export default MindMapSection;
