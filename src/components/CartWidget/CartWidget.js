import React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import { useCarrito } from '../CartContext/CartContext';

const CartWidget = () => {
  const { getCant } = useCarrito();

  return (
    <Badge badgeContent={getCant()} color="primary">
      <ShoppingCart />
    </Badge>
  );
};

export default CartWidget;
