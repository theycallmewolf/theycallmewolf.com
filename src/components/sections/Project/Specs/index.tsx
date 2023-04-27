import { IArrow, IMinus, IPlus } from 'assets/icons';
import { useCallback, useEffect, useState } from 'react';
import { AboutData, DependenciesData, SpecData } from 'types';
import { formatDate } from 'utils';

import styles from './specs.module.scss';

interface SpecsProps {
  project: {
    about: AboutData[];
    project_date: string;
    link: string;
    repository: string;
    specs: SpecData[];
    dependencies: DependenciesData[];
  };
}

export const Specs: React.FC<SpecsProps> = ({ project }) => {
  const [hidesAbout, setHidesAbout] = useState(true);
  const [hidesSpecs, setHidesSpec] = useState(true);

  const handleAccordion = useCallback(
    (content: 'about' | 'specs') => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setHidesAbout(false);
        setHidesSpec(false);
        return;
      }

      if (content === 'about') setHidesAbout(!hidesAbout);
      if (content === 'specs') setHidesSpec(!hidesSpecs);
    },
    [hidesAbout, hidesSpecs]
  );

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    setHidesAbout(false);
    setHidesSpec(false);
  }, []);

  return (
    <section className={styles.specs}>
      <div className={styles.toggle}>
        <button onClick={() => handleAccordion('about')} className={styles.button}>
          <h2>About</h2>
          {hidesAbout ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
        </button>

        <div className={`${styles.content} ${hidesAbout ? styles.hide : ''}`}>
          {project.about.map((item, i) => item.type === 'paragraph' && <p key={i}>{item.text}</p>)}
        </div>
      </div>

      <div className={styles.toggle}>
        <button onClick={() => handleAccordion('specs')} className={styles.button}>
          <h2>Specs</h2>
          {hidesSpecs ? <IPlus className={styles.icon} /> : <IMinus className={styles.icon} />}
        </button>

        <div className={`${styles.content} ${hidesSpecs ? styles.hide : ''}`}>
          {project.project_date && (
            <div>
              <strong>release date</strong>
              <span>{formatDate(project.project_date)}</span>
            </div>
          )}
          <div className={!project.link && !project.repository ? 'hide' : undefined}>
            {project.link && (
              <a
                href={project.link}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer ">
                visit project website <IArrow />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer ">
                check the code at GitHub <IArrow />
              </a>
            )}
          </div>
          {project.specs && (
            <div>
              <strong>technologies</strong>
              <div className={styles.tags}>
                {project.specs.map(({ spec }, i) => (
                  <span key={i}>{spec}</span>
                ))}
              </div>
            </div>
          )}
          {project.dependencies && (
            <div>
              <strong>dependencies</strong>
              <div className={styles.tags}>
                {project.dependencies.map(({ label, url }, i) => (
                  <a href={url} key={i} target="_blank" rel="noreferrer noopener">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
