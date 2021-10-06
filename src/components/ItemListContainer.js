import ItemList from "./ItemList";
import React from "react";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setItems(myJson);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  return (
    <>
      <h2 style={{ marginTop: "2%" }}>{props.greeting}</h2>
      {(() => {
        if (items.length > 0) {
          return <ItemList productos={items} />;
        } else {
          return <p>Cargando productos, espere por favor...</p>;
        }
      })()}
    </>
  );
};

export default ItemListContainer;
