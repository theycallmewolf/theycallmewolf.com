import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Toast } from '../components/elements/Toast';
import { ToastProps } from '../components/elements/Toast/types';

interface ToastContextData {
  addToast({ type, title, description, duration }: Omit<ToastProps, 'id'>): { id: string };
  removeToast(id: string): void;
  hasToast: boolean;
  timeout: number;
  hasClosed: { status: boolean; id: string };
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastProps[]>([] as ToastProps[]);
  const [hasToast, setHasToast] = useState(false);
  const [timeout, setTimeout] = useState(3000);
  const [hasClosed, setHasClosed] = useState({ status: false, id: '' });

  const addToast = useCallback(
    ({ type, title, description, duration }) => {
      const id = uuidv4();

      const toast = {
        id,
        type,
        title,
        description
      };

      setTimeout(duration);
      setMessages([...messages, toast]);
      setHasClosed({ status: false, id: '' });

      return { id };
    },
    [messages]
  );

  const removeToast = useCallback((id) => {
    setHasClosed({ status: true, id: id });
    setMessages((state) => state.filter((msg) => msg.id !== id));
  }, []);

  useEffect(() => {
    messages.length !== 0 ? setHasToast(true) : setHasToast(false);
  }, [messages.length]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, hasToast, timeout, hasClosed }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) throw Error('useToast must be used inside a ToastProvider');
  return context;
}

export { ToastProvider, useToast };
