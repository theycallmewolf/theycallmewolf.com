import { IPlus } from 'assets/icons';
import { Button } from 'components/elements';
import { useTheme } from 'hooks/useTheme';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from 'types';

import { CustomLink } from '../Link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export const Slider: React.FC<SliderProps> = ({
  slides,
  testimonials,
  contentType,
  hasLink,
  className = '',
  ...props
}) => {
  const [slideNumber, setSlideNumber] = useState('01');
  const [slideList, setSlideList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);
  const [showCaption, setShowCaption] = useState(false);

  const { hasDarkMode } = useTheme();

  useEffect(() => {
    setSlideList(slides);
    setTestimonialList(testimonials);
  }, [slides, testimonials]);

  const handleSlideNumber = (sliderIndex: number) => {
    setSlideNumber(String(sliderIndex + 1).padStart(2, '0'));
  };

  return (
    <div className={`slider-container ${hasDarkMode && 'dark'} ${className}`} {...props}>
      <Swiper
        spaceBetween={48}
        navigation
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        speed={1200}
        effect={contentType === 'testimonial' ? 'fade' : 'slide'}
        className={contentType === 'testimonial' && 'testimonial'}
        onSlideChange={(swiper) => handleSlideNumber(swiper.activeIndex)}>
        {contentType === 'image' &&
          slideList.map(({ slider, project_date, slug }, i) => {
            const { image_large_2x, caption } = slider;
            return (
              <SwiperSlide key={i}>
                <figure className={contentType === 'image' && 'shadow'}>
                  <Image src={image_large_2x} layout="fill" quality={90} />

                  {caption && (
                    <figcaption className={showCaption && 'show'}>
                      <span>{project_date}</span>
                      <strong>{caption}</strong>
                      {hasLink && (
                        <CustomLink
                          href={`work/project/${slug}`}
                          label="visit project"
                          className="link"
                        />
                      )}
                    </figcaption>
                  )}
                </figure>
                {caption && (
                  <Button
                    className={`show-caption-button  ${showCaption && 'rotate'}`}
                    onClick={() => setShowCaption((state) => !state)}>
                    <IPlus />
                  </Button>
                )}
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
};
