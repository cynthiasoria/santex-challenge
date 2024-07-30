// Here we put mutations. Remove next line
import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  fragment OrderDetails on Order {
    id
    total
    subTotal
  }
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      __typename
      ... on Order {
        ...OrderDetails
      }
    }
  }
`;
