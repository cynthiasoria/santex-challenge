import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { PageLoader } from './PageLoader';
import { IProduct, Product } from './Product';
import { SXGrid } from './ProductList.styled';

export function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 20,
    },
  });
  

  if (loading) return <PageLoader />;
  
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <SXGrid>
      {data.products.items.map((item: IProduct) => (
        <Product {...item} />
      ))}
    </SXGrid>
  );
}
