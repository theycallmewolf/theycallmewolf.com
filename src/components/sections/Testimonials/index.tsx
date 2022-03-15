import React from 'react';

import { Slider } from '../../elements/Slider';
import styles from './styles.module.scss';

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  publish_date: string;
  update_date: string;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className={styles.section}>
    <div className={styles.cover}>
      <h2>mentions</h2>
    </div>
    <Slider testimonials={testimonials} contentType="testimonial" className={styles.slider} />
  </section>
);
