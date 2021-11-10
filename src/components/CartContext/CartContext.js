import { createContext , useState  , useContext } from 'react';
import firebase from 'firebase/app';
import { firestore } from '../Firebase/Firebase';

export const contexto = createContext()

const {Provider} = contexto;

export const useCarrito = () => {
    return useContext(contexto)
}

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
      count += parseFloat(carrito[i].prod.price * carrito[i].cantidad);
    }
    return count;
  };

  const updateCant = (new_array, producto) => {
    for (var i = 0; i < new_array.length; i++) {
      if (new_array[i].prod.id === producto.prod.id) {
        new_array[i].cantidad + producto.cantidad > new_array[i].prod.stock ? new_array[i].cantidad = new_array[i].prod.stock : new_array[i].cantidad += producto.cantidad;
        setCarrito(new_array);
      }
    }
  };

  const newOrder = (customer, orderID) => {

    const orderToSave = {
      customer: customer,
      items : carrito,
      date: firebase.firestore.Timestamp.now(),
      total: getTotal(),
      order: orderID,
      estado: 'Generada',
    }
    firestore.collection('ordenes').add(orderToSave).then(vaciarCarrito())
  }
  
  const valor_del_contexto = {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    getCant,
    getTotal,
    newOrder,
  };

  return (
    <Provider value={valor_del_contexto}>{children}</Provider>
  );
};

export default CartContext;
