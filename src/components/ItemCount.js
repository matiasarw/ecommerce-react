import React, { useState } from "react";

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
        <button
          style={{ display: "inline-block" }}
          className="btn btn-primary"
          onClick={decrement}
        >
          -
        </button>
        <div
          style={{
            display: "inline-block",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          <label>{count}</label>
        </div>
        <button
          style={{ display: "inline-block" }}
          className="btn btn-primary"
          onClick={increment}
        >
          +
        </button>
      </div>

      <button
        style={{ marginTop: "30px" }}
        className="btn btn-primary"
        onClick={confirm}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
