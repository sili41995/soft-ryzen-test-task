import { FC } from 'react';
import { Button, List, ListItem } from './SliderControls.styled';
import { useSlider } from '@/hooks';

const SliderControls: FC = () => {
  const { onNextBtnClick, onPrevBtnClick } = useSlider();

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
