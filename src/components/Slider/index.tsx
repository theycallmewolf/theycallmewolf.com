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

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  jobDescription: string;
  date: string;
};

interface SliderProps {
  slides?: Slide[];
  testimonials?: Testimonial[];
  contentType: 'image' | 'testimonial';
}

export const Slider: React.FC<SliderProps> = ({ slides, testimonials, contentType }) => {
  const [slideNumber, setSlideNumber] = useState('01');
  const [slideList, setSlideList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    setSlideList(slides);
    setTestimonialList(testimonials);
  }, [slides, testimonials]);

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
        className={contentType === 'testimonial' && 'testimonial'}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: contentType === 'image' ? 2 : 1,
            spaceBetween: 0
          }
        }}
        onSlideChange={(swiper) => handleSlideNumber(swiper.activeIndex)}>
        {contentType === 'image' &&
          slideList.map((slide) => (
            <SwiperSlide key={slide.id}>
              <figure>
                <img src={slide.imageURL} alt={slide.title} />
                <figcaption>{slide.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}

        {contentType === 'testimonial' &&
          testimonialList.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <p>{testimonial.quote}</p>
              <small>
                {testimonial.name} - {testimonial.jobDescription}
              </small>
            </SwiperSlide>
          ))}

        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
};
