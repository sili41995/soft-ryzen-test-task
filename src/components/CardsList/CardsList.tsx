import { FC } from 'react';
import { List, ListItem } from './CardsList.styled';
import { IProps } from './CardsList.types';

const CardsList: FC<IProps> = ({ cards }) => (
  <List>
    {cards.map((card, index) => (
      <ListItem key={index}>{card}</ListItem>
    ))}
  </List>
);

export default CardsList;
