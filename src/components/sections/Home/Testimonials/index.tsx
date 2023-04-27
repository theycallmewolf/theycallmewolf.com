import React from 'react';
import { TestimonialData } from 'types';

import { Slider } from '../../../elements/Slider';
import styles from './testimonials.module.scss';

interface TestimonialsProps {
  testimonials: TestimonialData[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className={styles.section}>
    <div className={styles.cover}>
      <h2>mentions</h2>
    </div>
    <Slider testimonials={testimonials} contentType="testimonial" className={styles.slider} />
  </section>
);
