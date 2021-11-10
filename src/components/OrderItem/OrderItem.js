import React from 'react';

const OrderItem = ({ item }) => {
  return (
    <div>
      <p>
        <b>Orden ID:</b> {item.order}
      </p>
      <p>
        <b>Fecha de compra: </b>
        {item.date.toDate().getDate()}/{item.date.toDate().getMonth() + 1}/
        {item.date.toDate().getFullYear()}
        &nbsp; {item.date.toDate().getHours()}:{item.date.toDate().getMinutes()}
      </p>
      <p>
        <b>Cantidad de productos distintos:</b> {item.items.length}
      </p>
      <p>
        <b>Precio total:</b> $ {item.total}
      </p>
      <p>
        <b>Estado:</b> {item.estado}
      </p>
      <p>
        <b>Fecha estimada de arribo: </b>
        {item.date.toDate().getDate() + 3}/{item.date.toDate().getMonth() + 1}/
        {item.date.toDate().getFullYear()}
      </p>
    </div>
  );
};

export default OrderItem;
