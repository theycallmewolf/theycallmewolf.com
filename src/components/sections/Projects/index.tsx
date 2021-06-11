import { Slider } from '../../elements/Slider';
import styles from './styles.module.scss';

type SliderData = {
  image_large: string | null;
  image_small: string | null;
  caption: string;
};

type Project = {
  id: number;
  slider: SliderData;
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
      <Slider slides={projects} contentType="image" />
    </section>
  );
}
