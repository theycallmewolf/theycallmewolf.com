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

export function Testimonials({ testimonials }: TestimonialsProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.cover}></div>
      <Slider testimonials={testimonials} contentType="testimonial" />
    </section>
  );
}
