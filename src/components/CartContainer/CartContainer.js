import React from 'react';
import { useCarrito } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm';

const CartContainer = () => {
  const { carrito, vaciarCarrito, eliminarProducto, getTotal, newOrder } = useCarrito();

  const eliminarProd = (id) => {
    eliminarProducto(id);
  };

  return (
    <div>
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
          return (
            <div className="bg-light">
              <div className="container py-5">
                <div className="row h-100 align-items-center py-5">
                  <div className="col-lg-6">
                    <h2 className="display-4" style={{ color: 'red', fontSize: '2.5em' }}>
                      Oops! Tu carrito está vacio!
                    </h2>
                    <h3 className="display-4" style={{ fontSize: '1.7em' }}>
                      Hemos visto que no agregaste nada a tu carrito todavía...
                    </h3>
                    <Link className="btn btn-primary" to={'/home'}>
                      Buscar productos
                    </Link>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <img
                      src="https://mwtech.s3.us-east-2.amazonaws.com/cart_empty-modified+(1).png"
                      alt="empty-cart"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default CartContainer;
