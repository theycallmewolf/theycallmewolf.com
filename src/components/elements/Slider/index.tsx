import { IPlus } from 'assets/icons';
import { Button } from 'components/elements/Button';
import { useTheme } from 'hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { A11y, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideData, SliderProps, TestimonialData } from 'types';

import { CustomLink } from '../Link';

export const Slider: React.FC<SliderProps> = ({
  slides,
  testimonials,
  contentType,
  hasLink,
  className = '',
  ...props
}) => {
  // const [slideNumber, setSlideNumber] = useState('01');
  const [slideList, setSlideList] = useState<SlideData[]>([]);
  const [testimonialList, setTestimonialList] = useState<TestimonialData[]>([]);
  const [showCaption, setShowCaption] = useState(false);

  const { hasDarkMode } = useTheme();

  useEffect(() => {
    setSlideList(slides);
    setTestimonialList(testimonials);
  }, [slides, testimonials]);

  // const handleSlideNumber = (sliderIndex: number) => {
  //   setSlideNumber(String(sliderIndex + 1).padStart(2, '0'));
  // };

  return (
    <div className={`slider-container ${hasDarkMode ? 'dark' : ''} ${className}`}>
      <Swiper
        modules={[Navigation, A11y, EffectFade]}
        spaceBetween={48}
        navigation
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        speed={1000}
        effect={contentType === 'testimonial' ? 'fade' : 'slide'}
        className={contentType === 'testimonial' ? 'testimonial' : ''}
        // onSlideChange={(swiper) => handleSlideNumber(swiper.activeIndex)}
        {...props}>
        {contentType === 'image' &&
          slideList.map((slide, i) => (
            <SwiperSlide key={i}>
              <figure className={contentType === 'image' ? 'shadow' : ''}>
                <Image
                  src={slide.slider.image_large_2x}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  priority
                />

                {slide.slider.caption && (
                  <figcaption className={showCaption ? 'show' : ''}>
                    <span>{slide.project_date}</span>
                    <strong>{slide.slider.caption}</strong>
                    {hasLink && (
                      <CustomLink
                        href={`work/project/${slide.slug}`}
                        label="visit project"
                        className="link"
                      />
                    )}
                  </figcaption>
                )}
              </figure>
              {slide.slider.caption && (
                <Button
                  className={`show-caption-button ${showCaption ? 'rotate' : ''}`}
                  onClick={() => setShowCaption((state) => !state)}>
                  <IPlus />
                </Button>
              )}
            </SwiperSlide>
          ))}

        {contentType === 'testimonial' &&
          testimonialList.map(({ quote, name, jobTitle, publish_date }, i) => (
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
          ))}
      </Swiper>
      {/* <div className="current-slide">{slideNumber}</div> */}
    </div>
  );
};
