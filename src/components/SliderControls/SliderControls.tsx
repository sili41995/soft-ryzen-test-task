import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import { Button, List, ListItem } from './SliderControls.styled';

const SliderControls: FC = () => {
  const swiper = useSwiper();

  const onPrevBtnClick = () => {
    swiper.slidePrev();
  };

  const onNextBtnClick = () => {
    swiper.slideNext();
  };

  return (
    <List>
      <ListItem>
        <Button type='button' onClick={onPrevBtnClick}>
          Prev
        </Button>
      </ListItem>
      <ListItem>
        <Button type='button' onClick={onNextBtnClick}>
          Next
        </Button>
      </ListItem>
    </List>
  );
};

export default SliderControls;
