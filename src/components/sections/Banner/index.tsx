import 'react-typed/dist/animatedCursor.css';

import Typed from 'react-typed';

import styles from './styles.module.scss';

export function Banner(): JSX.Element {
  const introCopy = [
    '"Mr. Wolf", actually.',
    'Cames from the movie.',
    'Pulp Fiction…',
    'My favorite!',
    'Like the character',
    'they say I solve problems.',
    'Who are they?',
    'Well...',
    'You are starting to ask too much.',
    '...',
    '👋 Hi there!',
    "I'm Bruno",
    'I’m a frontend developer + designer.'
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>
          They
          <br /> Call Me
          <br /> {'<Wolf />'}
        </h1>
        <Typed
          strings={introCopy}
          typeSpeed={40}
          backSpeed={20}
          startDelay={2000}
          backDelay={1000}
          className={styles.typed}
        />
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
}
