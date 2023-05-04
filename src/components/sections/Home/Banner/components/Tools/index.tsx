import { IShuffle } from 'assets/icons';

import styles from './tools.module.scss';

interface ToolsProps {
  addBackgroundImage: () => void;
}

export const Tools: React.FC<ToolsProps> = (props) => {
  return (
    <div className={styles.tools}>
      <button
        className={styles['shuffle-button']}
        onClick={props.addBackgroundImage}
        aria-label="shuffle background">
        <IShuffle />
      </button>
    </div>
  );
};
