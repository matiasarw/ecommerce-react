import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const confirm = () => {
    onAdd(count);
  };

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <div className="div-inline">
          <label>{count}</label>
        </div>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-primary bt-top-30" onClick={confirm}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
