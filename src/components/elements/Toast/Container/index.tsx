import { ToastElement as Toast } from '../Element';
import { ToastProps } from '../types';
import styles from './container.module.scss';

interface ToastContainerProps {
  messages: ToastProps[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <div className={styles.toastContainer}>
    {messages.map(({ title, description, id, type }) => (
      <Toast id={id} key={id} title={title} description={description} type={type} />
    ))}
  </div>
);
