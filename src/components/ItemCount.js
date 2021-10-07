import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
  const [products, setProducts] = useState({
    count: stock,
  });

  const decrease = () => {
    if (document.getElementById("cantidad").value) {
      let countStock = parseInt(products.count);
      let valorResta = parseInt(document.getElementById("cantidad").value);
      if (products.count - valorResta <= 0) {
        return;
      } else {
        setProducts({ count: countStock - valorResta });
      }
    }
  };

  const increase = () => {
    if (document.getElementById("cantidad").value) {
      let countStock = parseInt(products.count);
      let valorSuma = parseInt(document.getElementById("cantidad").value);
      setProducts({ count: countStock + valorSuma });
    }
  };

  return (
    <>
      <div>
        <h6 style={{ display: "inline-block" }}>Stock disponible: </h6>
        <h6 style={{ display: "inline-block" }}>{products.count}</h6>
        <br />
        <button
          style={{ display: "inline-block" }}
          type="buttonIncrease"
          className="btn btn-primary"
          onClick={decrease}
        >
          -
        </button>
        <div
          className="form-group"
          style={{ display: "inline-block", width: "17%" }}
        >
          <input
            type="text"
            className="form-control"
            id="cantidad"
            placeholder="Ingresar cantidad"
          />
        </div>
        <button
          style={{ display: "inline-block" }}
          type="buttonIncrease"
          className="btn btn-primary"
          onClick={increase}
        >
          +
        </button>
      </div>

      <Link
        style={{ marginTop: "4%" }}
        className="btn btn-primary"
        to="#"
        onClick={decrease}
      >
        Comprar
      </Link>
    </>
  );
};

export default ItemCount;
