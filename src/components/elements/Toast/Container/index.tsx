import { ToastElement as Toast } from '../Element';
import { ToastProps } from '../types';
import styles from './styles.module.scss';

interface ToastContainerProps {
  messages: ToastProps[];
}

export function ToastContainer({ messages }: ToastContainerProps): JSX.Element {
  return (
    <div className={styles.toastContainer}>
      {messages.map(({ title, description, id, type }) => (
        <Toast id={id} key={id} title={title} description={description} type={type} />
      ))}
    </div>
  );
}
