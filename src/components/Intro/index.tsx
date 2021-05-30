import styles from './styles.module.scss';

export const Intro: React.FC = () => {
  return (
    <section className={styles.container}>
      <svg className={styles.wire} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 601">
        <path d="M1366 197.3v-8h-295.3l56.5-56.5 1.2-1.1V0h-8v128.4l-102.6 102.5L787 0h-11.3L1012 236.6 840 408.7 658.2 227l-1.2-1.2H315.7L413 0h-8.7l-25 58H0v8h375.8L153 583.6h8.8l150.6-349.9h339V601h8V239.4L1010 590h11.3L845.7 414.4l217-217H1366z" />
      </svg>
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
