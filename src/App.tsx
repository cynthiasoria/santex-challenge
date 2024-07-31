import { ScopedCssBaseline } from '@mui/material';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './hooks/OrderContext';

function App() {
  return (
    <OrderProvider>
      <ScopedCssBaseline>
        <Header />
        <ProductList />
      </ScopedCssBaseline>
    </OrderProvider>
  );
}

export default App;
