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
    </section>
  );
}
