import { useMutation } from '@apollo/client';
import { CardContent, List, ListItem, Typography } from '@mui/material';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useOrder } from '../hooks/OrderContext';
import {
  SXBuyButton,
  SXCard,
  SXDescription,
  SXImage,
  SXPrice,
  SXTitle,
  SXVariantBox,
} from './Product.styled';

interface IFeaturedAsset {
  preview: string;
}

interface IVariant {
  id: string;
  name: string;
  price: number;
}

export interface IProduct {
  id: string;
  description: string;
  name: string;
  featuredAsset: IFeaturedAsset;
  variants: IVariant[];
}

export const Product = ({
  id,
  description,
  name,
  featuredAsset,
  variants,
}: IProduct) => {
  const { setLocalStorageValue } = useOrder();

  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted: (data) => {
      setLocalStorageValue(data.addItemToOrder.subTotal);
    },
    onError: (error) => {
      console.error('Error adding item to order:', error);
    },
  });

  const addItem = async (productVariantId: string) => {
    await addItemToOrder({
      variables: { productVariantId: productVariantId, quantity: 1 },
    });
  };

  return (
    <SXCard key={`product-${id}`}>
      <SXImage image={featuredAsset.preview} title={name} />
      <CardContent>
        <SXTitle variant="h5">{name}</SXTitle>
        <SXDescription variant="body2">{description}</SXDescription>

        <List>
          {variants.map((variant: IVariant) => (
            <ListItem key={variant.id}>
              <SXVariantBox>
                <Typography variant="body2">{variant.name}</Typography>
                <SXPrice variant="body1">${variant.price}</SXPrice>
                <SXBuyButton
                  onClick={() => addItem(variant.id)}
                  variant="contained"
                >
                  Buy
                </SXBuyButton>
              </SXVariantBox>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </SXCard>
  );
};
