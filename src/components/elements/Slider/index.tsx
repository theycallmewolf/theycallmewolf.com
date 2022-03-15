import { useTheme } from 'hooks/useTheme';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from 'types';

import { CustomLink } from '../Link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export function Slider({
  slides,
  testimonials,
  contentType,
  hasLink,
  hasIcon,
  additionalClass = '',
  ...props
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
    <div className={`slider-container ${hasDarkMode && 'dark'} ${additionalClass}`} {...props}>
      <Swiper
        spaceBetween={48}
        navigation
        grabCursor={true}
        loop={true}
        speed={1200}
        effect={contentType === 'testimonial' ? 'fade' : 'slide'}
        className={contentType === 'testimonial' && 'testimonial'}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: contentType === 'image' ? 2 : 1,
            spaceBetween: 24
          }
        }}
        onSlideChange={(swiper) => handleSlideNumber(swiper.activeIndex)}>
        {contentType === 'image' &&
          slideList.map(({ slider, project_date, slug }, i) => {
            const { image_large_2x, caption } = slider;
            return (
              <SwiperSlide key={i} className={contentType === 'image' && 'shadow'}>
                <figure>
                  <Image src={image_large_2x} layout="fill" quality={90} />
                  {caption && <figcaption>{`(${project_date}) ${caption}`}</figcaption>}
                </figure>
                {hasLink && <CustomLink href={`work/project/${slug}`} hasIcon={hasIcon} />}
              </SwiperSlide>
            );
          })}

        {contentType === 'testimonial' &&
          testimonialList.map(({ quote, name, jobTitle, publish_date }, i) => {
            return (
              <SwiperSlide key={i}>
                <div tabIndex={-1}>
                  {quote.map((paragraph: string, i: number) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div>
                  <p>
                    <strong>{name}</strong>, {jobTitle}, {publish_date}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="current-slide">{slideNumber}</div>
    </div>
  );
}
