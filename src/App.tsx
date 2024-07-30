import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './hooks/OrderContext';

function App() {
  return (
    <OrderProvider>
      <Header />
      <ProductList />
    </OrderProvider>
  );
}

export default App;
