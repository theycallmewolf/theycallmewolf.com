import { useState } from 'react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Slider: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState('01');

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
        <SwiperSlide>
          <figure>
            <img src="/assets/img/cover-about.jpg" alt="..." />
            <figcaption>2019, BAÚ, academic project at etic_</figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/assets/img/footer.jpg" alt="..." />
            <figcaption>2019, Onlive, Cenas academic project at etic_</figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/assets/img/cover-bytes.jpg" alt="..." />
            <figcaption>2019, BAÚ, academic project at etic_</figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/assets/img/cover-work.jpg" alt="..." />
            <figcaption>2019, BAÚ, academic project at etic_</figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
};
