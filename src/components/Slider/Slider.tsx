import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IProps } from './Slider.types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SliderControls from '@/components/SliderControls';
import { ClassNames } from '@/constants';

const Slider: FC<IProps> = ({ cards, slidesPerView }) => {
  return (
    <>
      <Swiper
        className={ClassNames.slider}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>{card}</SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </>
  );
};

export default Slider;
