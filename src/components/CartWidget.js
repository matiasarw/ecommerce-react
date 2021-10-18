import ShoppingCart from "@material-ui/icons/ShoppingCartSharp";
import Badge from "@mui/material/Badge";
import {useCarrito} from './CartContext'

const CartWidget = () => {
  const { getCant } = useCarrito();

  const cantItems = getCant();
  return (
    <>
      {(() => {
        if (cantItems>0) {
          return (
            <>
            <Badge badgeContent={cantItems} color="primary">
              <ShoppingCart />
            </Badge>
            </>
          );
        }
        })()}
    </>
  );
};

export default CartWidget;
