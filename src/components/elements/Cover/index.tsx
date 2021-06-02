import styles from './styles.module.scss';

export function Cover(): JSX.Element {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 40" preserveAspectRatio="none">
        <path d="M120 0H0v41h350V31H120V0z" />
      </svg>
    </div>
  );
}
