import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const agregarProducto = (producto) => {
    if (!isInCarrito(producto)) {
      const carrito_temp = [...carrito, producto];
      setCarrito(carrito_temp);
    }
  };
  const eliminarProducto = (id) => {
    const new_array = [...carrito];
    for (var i = 0; i < new_array.length; i++) {
      if (new_array[i].prod.id === id) {
        new_array.splice(i, 1);
      }
    }
    setCarrito(new_array);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const isInCarrito = (producto) => {
    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].prod.id === producto.prod.id) {
        const new_array = [...carrito];
        updateCant(new_array, producto);
        return true;
      }
    }
    return false;
  };
  const getCant = () => {
    let count = 0;
    for (var i = 0; i < carrito.length; i++) {
      count += carrito[i].cantidad;
    }
    return count;
  };
  const getTotal = () => {
    let count = 0;
    for (var i = 0; i < carrito.length; i++) {
      count += parseInt(carrito[i].prod.price * carrito[i].cantidad);
    }
    return count;
  };
  const updateCant = (new_array, producto) => {
    for (var i = 0; i < new_array.length; i++) {
      if (new_array[i].prod.id === producto.prod.id) {
        new_array[i].cantidad += producto.cantidad;
        setCarrito(new_array);
      }
    }
  };
  const valor_del_contexto = {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    getCant,
    getTotal,
  };

  return (
    <>
      <Provider value={valor_del_contexto}>{children}</Provider>
    </>
  );
};

export default CartContext;
