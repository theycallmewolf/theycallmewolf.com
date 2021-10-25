import { ProjectImages } from 'types';

import { Slider } from '../../elements/Slider';
import styles from './styles.module.scss';

type Project = {
  id: string;
  slider: ProjectImages;
  title: string;
  slug: string;
};

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps): JSX.Element {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <Slider slides={projects} contentType="image" hasLink hasIcon />
    </section>
  );
}
