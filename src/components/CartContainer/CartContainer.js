import React from 'react';
import { useCarrito } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EmptyCart from '../EmptyCart/EmptyCart';
import CustomerForm from '../CustomerForm/CustomerForm';
import '../../pages/styles.css';

const CartContainer = () => {
  const { carrito, vaciarCarrito, eliminarProducto, getTotal, newOrder } = useCarrito();

  const eliminarProd = (id) => {
    eliminarProducto(id);
  };

  return (
    <>
      {(() => {
        if (carrito.length > 0) {
          return (
            <main className="page payment-page">
              <section className="payment-form dark">
                <div className="container">
                  <div className="block-heading">
                    <h2 className="cart-title">Carrito de compras</h2>
                    <p>Bienvenido al carrito de compras de MWTech.</p>
                  </div>
                  <div className="products">
                    <h3 className="title h3-blue">Checkout</h3>
                    {carrito.map((producto, index) => (
                      <ItemCart
                        prod={producto.prod}
                        cant={producto.cantidad}
                        eliminarProd={eliminarProd}
                        key={index}
                      />
                    ))}
                    <div className="total">
                      Total<span className="price">$ {getTotal()}</span>
                    </div>
                    <div className="total">
                      <button className="btn btn-danger btn-block" onClick={vaciarCarrito}>
                        Vaciar carrito
                      </button>
                    </div>
                  </div>
                  <CustomerForm newOrder={newOrder} />
                </div>
              </section>
            </main>
          );
        } else {
          return <EmptyCart />;
        }
      })()}
    </>
  );
};

export default CartContainer;
