import { useEffect } from 'react';

import { ICross } from '../../../../assets/icons';
import { useToast } from '../../../../hooks/useToast';
import { ToastProps } from '../types';
import styles from './styles.module.scss';

export function ToastElement({ title, description, id }: ToastProps): JSX.Element {
  const { removeToast, hasToast, timeout } = useToast();

  useEffect(() => {
    setTimeout(() => {
      removeToast(id);
    }, timeout);
  }, [id, removeToast, timeout]);

  return (
    <div className={`${styles.toast} ${hasToast ? styles.show : ''}`} data-message-id={id}>
      <strong>{title}</strong>
      <span>{description}</span>
      <button onClick={() => removeToast(id)} aria-label="Close" title="Close">
        <ICross />
      </button>
    </div>
  );
}
