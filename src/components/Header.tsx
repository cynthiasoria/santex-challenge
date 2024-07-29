import { Typography } from '@mui/material';
import { useOrder } from '../hooks/OrderContext';
import { SXCart, SXHeaderContainer, SXLogo } from './Header.styled';

export function Header() {
  const { subtotal } = useOrder();
  return (
    <SXHeaderContainer>
      <SXLogo
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="Logo"
      />
      <SXCart>
        <Typography variant="body1" component="span">
          Subtotal: ${subtotal.toFixed(2)}
        </Typography>
      </SXCart>
    </SXHeaderContainer>
  );
}
