export interface ToastProps {
  id: string;
  type?: 'error' | 'success' | 'info';
  title: string;
  description: string;
  duration?: number;
}
