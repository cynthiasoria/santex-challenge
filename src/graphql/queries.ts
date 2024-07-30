import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  fragment VariantItem on ProductVariant {
    id
    name
    price
  }

  query GetProducts($take: Int!) {
    products(options: { take: $take }) {
      items {
        id
        name
        description
        featuredAsset {
          preview
        }
        variants {
          ...VariantItem
        }
      }
    }
  }
`;
