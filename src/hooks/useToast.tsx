import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Toast } from '../components/elements/Toast';
import { ToastProps } from '../components/elements/Toast/types';

interface ToastContextData {
  addToast({ type, title, description, duration }: ToastProps): void;
  removeToast(id: string): void;
  hasToast: boolean;
  timeout: number;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastProps[]>([] as ToastProps[]);
  const [hasToast, setHasToast] = useState(false);
  const [timeout, setTimeout] = useState(3000);

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
    },
    [messages]
  );

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((msg) => msg.id !== id));
  }, []);

  useEffect(() => {
    messages.length !== 0 ? setHasToast(true) : setHasToast(false);
  }, [messages.length]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, hasToast, timeout }}>
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
