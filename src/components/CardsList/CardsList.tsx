import { FC } from 'react';
import { IProps } from './CardsList.types';
import { List, ListItem } from './CardsList.styled';

const CardsList: FC<IProps> = ({ cards }) => (
  <List>
    {cards.map((card, index) => (
      <ListItem key={index}>{card}</ListItem>
    ))}
  </List>
);

export default CardsList;
