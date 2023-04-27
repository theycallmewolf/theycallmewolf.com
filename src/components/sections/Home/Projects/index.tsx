import { SlideData } from 'types';

import { Slider } from '../../../elements/Slider';
import styles from './styles.module.scss';

interface ProjectsProps {
  projects: SlideData[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <Slider slides={projects} contentType="image" hasLink />
    </section>
  );
};
