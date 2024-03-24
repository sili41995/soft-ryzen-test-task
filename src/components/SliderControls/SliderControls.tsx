import { FC } from 'react';
import { useSlider } from '@/hooks';
import { AriaLabels } from '@/constants';
import { Button, List, ListItem } from './SliderControls.styled';

const SliderControls: FC = () => {
  const { onNextBtnClick, onPrevBtnClick } = useSlider();

  return (
    <List>
      <ListItem>
        <Button
          type='button'
          onClick={onPrevBtnClick}
          aria-label={AriaLabels.prevSlideBtn}
        >
          Prev
        </Button>
      </ListItem>
      <ListItem>
        <Button
          type='button'
          onClick={onNextBtnClick}
          aria-label={AriaLabels.nextSlideBtn}
        >
          Next
        </Button>
      </ListItem>
    </List>
  );
};

export default SliderControls;
