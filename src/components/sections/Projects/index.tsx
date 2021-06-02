import { Slider } from '../../elements/Slider';
import styles from './styles.module.scss';

type Project = {
  id: number;
  imageURL: string;
  caption: string;
  title: string;
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
