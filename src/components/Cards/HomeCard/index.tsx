import { Button } from '../../Button';
import { Graph } from '../../Graph';
import styles from './styles.module.scss';

export const HomeCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>
          coder
          <br /> + designer
        </h3>
        <div>
          <Graph title="html" percentage={80} />
          <Graph title="JavaScript" percentage={60} />
          <Graph title="ReactJS" percentage={60} />
          <Graph title="React Native" percentage={50} />
          <Graph title="Photoshop" percentage={90} />
          <Graph title="Illustrator" percentage={90} />
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 190">
          <path d="M0 132.8l27.1 8.7L54.5 93l.2-.7H107L147 53.6l2.1-7.2-7.3-10 15.8-3.3 6.2-12.3h1.4l10.5.5L192 0l7.4 3-.5 2.4a18.8 18.8 0 012.9 4.1l.2.4-8 24.9-1 16.4-10.4 24-1.5 28.7v.2L160 149.3l-13.7 3.1 3.9 37.6-2.8-5c-6.1-10.8-13-22.4-16.4-26.8l-3.4 20-5 11.6-13-37.3-21.8-12-25.4 45.1-2.1 3.7-1.3-32.1L36.7 185l-3.2 4 6.3-28.7-23 .4zm17.4 24.4l8.6-13.7-20.8-6.6zm86.8-32.4l8.4-3-4.8-14.8-3.6 17.9zM107 99l-.1-2.4-1.2 1.6-8 10.4-6.4 8 14.1-10.2 1.6-7.3zm2.3.2l.3 6 17.9 55.4 1-6 .8-.3h.2l9.7-2.5 28.4-46.5 5.2-28.5-28-17.7-35.7 34.6zm37.1-41.7l22.2 14-20.4-15.7zM159.3 35l-13.5 2.8 6 8-2.3 7.8 24.6 19 15.7-27.8 1.9-17.7v-.1l-26.4-4zm33.5-32.3l-14.4 18.9 13.9 2.8 4.4-20.2zm5.8 4a.7.7 0 000-.2zm-.4 1.6l-3.8 17.4 5-15.5-1.2-1.9zm-19.4 95.2l1.5-29 10.4-23.9.2-3-15.3 27L170 106v.2L142.5 151l15.8-3.6zm-38 65.5a543 543 0 015.9 10L144 153l-3.7.8-8.2 2.2a228 228 0 018.6 13.2zm-18 14.3l2.5-5.7 1.8-10.8-13.8-42.9-10.4 3.7.4-.2zm-21.7-55l.3-2 3.4-16.8-18.7 13.6-7.5 9.4 29.8 16.7zm-38.8 52.5l23.5-41.6-8.6-4.8-4.2 5.3-11.7 14.5zm43.1-86.2H56.5l-18.5 85c25.6-31.8 60.6-75.7 67.5-85zM52.7 101l-24.4 43.2-8.7 14.1 20.7-.3z" />
        </svg>
      </div>
      <Button genre="fill">about</Button>
    </div>
  );
};
