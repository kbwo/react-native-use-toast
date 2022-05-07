import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Text } from 'react-native';
import { Popup, PopupProps } from './Popup';
import { Toast } from './Toast';

type ToastProviderProps = {
  children: ReactNode;
};

type ToastContext = {
  close: (id: number) => void;
  toast: (props: PopupProps) => void;
};

const toastCotext = createContext<ToastContext>({
  close: () => {},
  toast: () => {},
});

export const useToast = () => useContext(toastCotext);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasters, setToasters] = useState<Toast[]>([]);
  const toast = (props: PopupProps) => {
    const id: number = toasters[toasters.length]?.id || 0;
    setToasters((t) => [...t, new Toast(id, props)]);
  };
  const close = (id: number) => {
    setToasters((t) =>
      t.filter((prev) => {
        prev.props?.onCloseComplete && prev.props?.onCloseComplete();
        return prev.id !== id;
      })
    );
  };

  return (
    <toastCotext.Provider value={{ toast, close }}>
      {toasters.map((t) => (
        <Popup key={t.id} {...t.props} id={t.id} />
      ))}
      {toasters.map((t, index) => (
        <Text key={t.id}>{`${index} is opened`}</Text>
      ))}
      {children}
    </toastCotext.Provider>
  );
};

export default ToastProvider;
