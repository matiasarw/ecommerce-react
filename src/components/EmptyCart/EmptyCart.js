import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div style={{ backgroundColor: 'white !important' }}>
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
};

export default EmptyCart;
