import React from 'react';
import { useCarrito } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EmptyCart from '../EmptyCart/EmptyCart';
import CustomerForm from '../CustomerForm/CustomerForm';

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
                    <h2 style={{ fontWeight: 'bold', color: '#0d6efd' }}>Carrito de compras</h2>
                    <p>Bienvenido al carrito de compras de MWTech.</p>
                  </div>
                  <div className="products">
                    <h3 className="title" style={{ color: '#0d6efd' }}>
                      Checkout
                    </h3>
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
