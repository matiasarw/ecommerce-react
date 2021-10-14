import ShoppingCart from "@material-ui/icons/ShoppingCartSharp";
import Badge from "@mui/material/Badge";
import { contexto } from "../CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getCant } = useContext(contexto);

  const cantItems = getCant();
  return (
    <Badge badgeContent={cantItems} color="primary">
      <ShoppingCart />
    </Badge>
  );
};

export default CartWidget;
