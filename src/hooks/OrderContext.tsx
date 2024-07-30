import { createContext, useContext } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface OrderContextType {
  subtotal: number;
  setLocalStorageValue: (price: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: any) => {
  const [subtotal, setLocalStorageValue] = useStateWithStorage(
    'orderSubtotal',
    0
  );

  return (
    <OrderContext.Provider value={{ subtotal, setLocalStorageValue }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
