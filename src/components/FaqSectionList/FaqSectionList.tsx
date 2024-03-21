import { FC, useState } from 'react';
import { IProps } from './FaqSectionList.types';
import {
  Description,
  Image,
  List,
  ListItem,
  Number,
  Title,
  TitleWrap,
} from './FaqSectionList.styled';

const FaqSectionList: FC<IProps> = ({ faqSectionCards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return (
    <List>
      {faqSectionCards.map(({ avatar, description, title }, index) => {
        const isActiveCard = index === activeCardIndex;
        const cardNumber = `[ ${index + 1} ]`;

        const onCardClick = () => {
          setActiveCardIndex(index);
        };

        return (
          <ListItem
            isActiveCard={isActiveCard}
            key={index}
            onClick={onCardClick}
          >
            {isActiveCard && <Image src={avatar} alt='card avatar' />}
            <Number isActiveCard={isActiveCard}>{cardNumber}</Number>
            <TitleWrap>
              <Title isActiveCard={isActiveCard}>{title}</Title>
              {isActiveCard && <Description>{description}</Description>}
            </TitleWrap>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FaqSectionList;
