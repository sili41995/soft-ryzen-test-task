import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import { decorativeSubtitles } from '@/constants';
import {
  Container,
  List,
  ListItem,
  Subtitle,
} from './DecorativeDivider.styled';

const DecorativeDivider: FC = () => (
  <Container>
    <List>
      {decorativeSubtitles.map((subtitle) => (
        <ListItem key={subtitle}>
          <Subtitle>{subtitle}</Subtitle>
          <IoMdClose size={36} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default DecorativeDivider;
