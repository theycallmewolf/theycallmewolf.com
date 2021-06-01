import styles from './styles.module.scss';

export const Intro: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          They
          <br /> Call Me
          <br /> {'<Wolf />'}
        </h1>
        <p>You are starting to ask too much…</p>
      </div>
      <svg
        className={styles.clip}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366 17.4"
        preserveAspectRatio="none">
        <path d="M0 17h575V0H0zM911 6v11h455V6z" />
      </svg>
    </section>
  );
};
