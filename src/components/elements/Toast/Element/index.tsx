import { ICross } from 'assets/icons';
import { useToast } from 'hooks/useToast';
import { useEffect } from 'react';
import { animated, config, useSpring } from 'react-spring';

import { ToastProps } from '../types';
import styles from './styles.module.scss';

export const ToastElement: React.FC<ToastProps> = ({ title, description, id }) => {
  const { removeToast, hasToast, timeout } = useToast();

  const appearFromBottom = useSpring({
    y: hasToast ? 0 : 200,
    delay: 0 * 1000,
    config: config.slow
  });

  useEffect(() => {
    setTimeout(() => {
      removeToast(id);
    }, timeout);
  }, [id, removeToast, timeout]);

  return (
    <animated.div className={styles.toast} style={appearFromBottom} data-message-id={id}>
      <strong>{title}</strong>
      <span>{description}</span>
      <button onClick={() => removeToast(id)} aria-label="Close" title="Close">
        <ICross />
      </button>
    </animated.div>
  );
};
