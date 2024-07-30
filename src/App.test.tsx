import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ADD_ITEM_TO_ORDER } from './graphql/mutations';
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
                  __typename: 'ProductVariant',
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
                  __typename: 'ProductVariant',
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: ADD_ITEM_TO_ORDER,
      variables: {
        productVariantId: '1',
        quantity: 1,
      },
    },
    result: {
      data: {
        addItemToOrder: {
          __typename: 'Order',
          subTotal: 50,
        },
      },
    },
  },
];

describe('ProductList', () => {
  it('should show error state', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: {
            take: 20,
          },
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    expect(
      await screen.findByText(/something went wrong/i)
    ).toBeInTheDocument();
  });
});

it('renders text and button', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <OrderProvider>
        <ProductList />
      </OrderProvider>
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Variant Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/Variant Product 2/)).toBeInTheDocument();
    expect(screen.getAllByText(/Buy/)[0]).toBeInTheDocument();
  });
});

describe('Header', () => {
  it('should display the subtotal', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <OrderProvider>
          <Header />
          <ProductList />
        </OrderProvider>
      </MockedProvider>
    );

    expect(screen.getByText(/Subtotal: \$0.00/)).toBeInTheDocument();
  });

  it('should update subTotal when Buy button is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <OrderProvider>
          <Header />
          <ProductList />
        </OrderProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Variant Product 1/)).toBeInTheDocument();
    });

    userEvent.click(screen.getAllByText('Buy')[0]);

    await waitFor(() => {
      expect(screen.getByText(/Subtotal: \$50.00/)).toBeInTheDocument();
    });
  });
});
