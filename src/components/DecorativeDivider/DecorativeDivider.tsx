import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import { decorativeSubtitles } from '@/constants';
import { List, ListItem, Subtitle } from './DecorativeDivider.styled';

const DecorativeDivider: FC = () => (
  <List>
    {decorativeSubtitles.map((subtitle) => (
      <ListItem key={subtitle}>
        <Subtitle>{subtitle}</Subtitle>
        <IoMdClose size={36} />
      </ListItem>
    ))}
  </List>
);

export default DecorativeDivider;
