import Image from 'next/image';
import { MutableRefObject } from 'react';
import { NextProject as NextProjectTypes } from 'types';

import styles from './next-project.module.scss';

type NextProjectProps = {
  nextProject: NextProjectTypes;
  projectPreviewRef: MutableRefObject<HTMLDivElement>;
};

export const NextProject: React.FC<NextProjectProps> = (props) => {
  if (!props.nextProject) return null;

  return (
    <section className={`${styles.intro} ${styles.next}`} ref={props.projectPreviewRef}>
      <div className={styles.title}>
        <h2>Next</h2>
        <p>just keep scrolling</p>
      </div>
      <div className={styles['image-container']}>
        <Image
          src={props.nextProject.images.cover_large_2x}
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </div>
      <div className={styles['project-details']}>
        <h1>{props.nextProject.title}</h1>
        <p>{props.nextProject.description}</p>
      </div>
    </section>
  );
};
