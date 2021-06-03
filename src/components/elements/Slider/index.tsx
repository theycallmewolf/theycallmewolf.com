import { useEffect, useState } from 'react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

type Slide = {
  caption: string;
  image: string;
  slug: string;
  title: string;
};

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  jobTitle: string;
  date: string;
};

interface SliderProps {
  slides?: Slide[];
  testimonials?: Testimonial[];
  contentType: 'image' | 'testimonial';
}

export function Slider({ slides, testimonials, contentType }: SliderProps): JSX.Element {
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
        effect={contentType === 'testimonial' ? 'fade' : 'slide'}
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
            <SwiperSlide key={slide.slug}>
              <figure>
                <img src={slide.image} alt={slide.title} />
                <figcaption>{slide.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}

        {contentType === 'testimonial' &&
          testimonialList.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <p>{testimonial.quote}</p>
              <small>
                <strong>{testimonial.name}</strong>, {testimonial.jobTitle}
              </small>
            </SwiperSlide>
          ))}

        {contentType === 'image' && <SwiperSlide></SwiperSlide>}
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
}
