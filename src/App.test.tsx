import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { GET_PRODUCTS } from './graphql/queries';
import { OrderProvider } from './hooks/OrderContext';

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: {
        take: 20,
      },
    },
    result: {
      data: {
        products: {
          items: [
            {
              id: '1',
              description: 'Product 1',
              name: 'Product 1',
              featuredAsset: { preview: '' },
              variants: [
                {
                  id: '1',
                  name: 'Variant Product 1',
                  price: 20,
                },
              ],
            },
            {
              id: '2',
              description: 'Product 2',
              name: 'Product 2',
              featuredAsset: { preview: '' },
              variants: [
                {
                  id: '2',
                  name: 'Variant Product 2',
                  price: 20,
                },
              ],
            },
          ],
        },
      },
    },
  },
];

describe('ProductList', () => {
  it('renders text and button', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <OrderProvider>
          <ProductList />
        </OrderProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Variant Product 1')).toBeInTheDocument();
      expect(screen.getByText('Variant Product 2')).toBeInTheDocument();
      expect(screen.getAllByText('Buy')[0]).toBeInTheDocument();
    });
  });
});
