import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { PageLoader } from './PageLoader';
import { IProduct, Product } from './Product';
import { SXErrorBox, SXErrorMessage, SXGrid } from './ProductList.styled';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 20,
    },
  });

  if (loading) return <PageLoader />;

  if (error)
    return (
      <SXErrorBox>
        <SXErrorMessage variant="body2">
          Something went wrong. Please try again later.
        </SXErrorMessage>
      </SXErrorBox>
    );

  return (
    <SXGrid>
      {data?.products?.items?.map((item: IProduct) => <Product {...item} />)}
    </SXGrid>
  );
}
