import { Box, CardContent, List, ListItem, Typography } from '@mui/material';
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
  const { addToOrder } = useOrder();
  return (
    <SXCard key={id}>
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
                  onClick={() => addToOrder(variant.id, variant.price)}
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
