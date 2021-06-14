import { useEffect, useState } from 'react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTheme } from '../../../hooks/useTheme';
import { CustomLink } from '../Link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

type SliderData = {
  image_large: string | null;
  image_small: string | null;
  caption?: string;
};

type Slide = {
  slider: SliderData;
  slug: string;
  title?: string;
};

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  publishDate: string;
  updateDate: string;
};

interface SliderProps extends React.HTMLAttributes<HTMLElement> {
  slides?: Slide[];
  testimonials?: Testimonial[];
  contentType: 'image' | 'testimonial';
  additionalClass?: string;
  hasLink?: boolean;
  hasIcon?: boolean;
}

export function Slider({
  slides,
  testimonials,
  contentType,
  hasLink,
  hasIcon,
  additionalClass = '',
  ...rest
}: SliderProps): JSX.Element {
  const [slideNumber, setSlideNumber] = useState('01');
  const [slideList, setSlideList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);

  const { hasDarkMode } = useTheme();

  useEffect(() => {
    setSlideList(slides);
    setTestimonialList(testimonials);
  }, [slides, testimonials]);

  function handleSlideNumber(sliderIndex: number) {
    setSlideNumber(String(sliderIndex + 1).padStart(2, '0'));
  }

  return (
    <div className={`slider-container ${hasDarkMode ? 'dark' : ''} ${additionalClass}`} {...rest}>
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
                <picture>
                  <source srcSet={slide.slider.image_large} media="(min-width: 1440px)" />
                  <source srcSet={slide.slider.image_small} media="(min-width: 1024px)" />
                  <source srcSet={slide.slider.image_large} media="(min-width: 600px)" />
                  <img src={slide.slider.image_small} alt={slide.title} />
                </picture>
                {slide.slider.caption && (
                  <figcaption>{`(${slide.project_date}) ${slide.slider.caption}`}</figcaption>
                )}
              </figure>
              {hasLink && <CustomLink href={`work/project/${slide.slug}`} hasIcon={hasIcon} />}
            </SwiperSlide>
          ))}

        {contentType === 'testimonial' &&
          testimonialList.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <p>{testimonial.quote}</p>
              <p>
                <small>
                  <strong>{testimonial.name}</strong>, {testimonial.jobTitle},{' '}
                  {testimonial.publishDate}
                </small>
              </p>
            </SwiperSlide>
          ))}

        {contentType === 'image' && <SwiperSlide></SwiperSlide>}
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
}
