import IArrow from 'assets/icons/IArrow';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './intro.module.scss';

interface IntroProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
}

export const Intro: React.FC<IntroProps> = (props) => {
  const router = useRouter();

  return (
    <section className={styles.intro}>
      <div className={styles['image-container']}>
        <Image src={props.project.image} layout="fill" objectFit="cover" />
      </div>

      <div className={styles['project-details']}>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
      </div>

      <button className={styles['back-btn']} onClick={() => router.back()}>
        <IArrow />
        back
      </button>
    </section>
  );
};
