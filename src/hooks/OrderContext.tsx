import { useMutation } from '@apollo/client';
import { createContext, useContext } from 'react';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface OrderContextType {
  subtotal: number;
  addToOrder: (productId: string, price: number) => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: any) => {
  const [subtotal, setSubtotal] = useStateWithStorage('orderSubtotal', 0);
  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER);

  const addToOrder = async (productVariantId: string, price: number) => {
    try {
      const { data } = await addItemToOrder({
        variables: { productVariantId: productVariantId, quantity: 1 },
      });
      if (data) {
        setSubtotal((previus: number) => previus + price);
      }
    } catch (error) {
      console.error('Error adding item to order:', error);
    }
  };
  return (
    <OrderContext.Provider value={{ subtotal, addToOrder }}>
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
