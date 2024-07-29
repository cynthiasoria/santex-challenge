import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
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
          id
          name
          price
        }
      }
    }
  }
`;
