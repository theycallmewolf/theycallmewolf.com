import { useEffect, useState } from 'react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Slide = {
  id: number;
  imageURL: string;
  caption: string;
  title: string;
};

interface SliderProps {
  slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [slideNumber, setSlideNumber] = useState('01');
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    setSlideList(slides);
  }, [slides]);

  function handleSlideNumber(sliderIndex: number) {
    setSlideNumber(String(sliderIndex + 1).padStart(2, '0'));
  }

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={48}
        navigation
        grabCursor={true}
        loop={false}
        speed={600}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }}
        onSlideChange={(swiper) => handleSlideNumber(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}>
        {slideList.map((slide) => (
          <SwiperSlide key={slide.id}>
            <figure>
              <img src={slide.imageURL} alt={slide.title} />
              <figcaption>{slide.caption}</figcaption>
            </figure>
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
};
