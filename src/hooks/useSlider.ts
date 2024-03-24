import { useSwiper } from 'swiper/react';
import { IUseSlider } from '@/types/types';

const useSlider = (): IUseSlider => {
  const swiper = useSwiper();

  const onPrevBtnClick = () => {
    swiper.slidePrev();
  };

  const onNextBtnClick = () => {
    swiper.slideNext();
  };

  return { onPrevBtnClick, onNextBtnClick };
};

export default useSlider;
