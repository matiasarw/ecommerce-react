import React from 'react';
import '../../pages/styles.css';

const ItemCart = ({ prod, cant, eliminarProd }) => {
  const eliminar = () => {
    eliminarProd(prod.id);
  };

  return (
    <div className="productos">
      <img src={prod.pictureUrl} className="prod-ind" alt="foto" />
      <div className="item item-cart-width">
        <div className="detalles">
          <span className="price">$ {prod.price}</span>
          <p className="item-name">{prod.title}</p>
          <p className="item-codigo">Código: {prod.id}</p>
          <p className="item-description">{prod.description}</p>
          <p className="item-cant">
            Cantidad: {cant}
            <button className="btn btnCustom" onClick={eliminar}>
              <i className="fa fa-trash"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
