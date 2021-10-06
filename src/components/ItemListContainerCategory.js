import ItemList from "./ItemList";
import React from "react";
import { useState, useEffect } from "react";

const ItemListContainerCategory = (props) => {
  const [items, setItems] = useState([]);

  const getItemsByCategoryID = (category, myJson) => {
    let prod = [];
    myJson.filter(function (element) {
      if (element.category === category) {
        prod.push(element);
      }
    });
    return prod;
  };

  const getData = () => {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const category = props.match.params.id;
        const productos = getItemsByCategoryID(category, myJson);
        setItems(productos);
      });
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        getData();
        resolve("ok");
      }, 200);
    });
  }, [props.match.params.id]);

  return (
    <>
      <h2>Catalogo completo</h2>
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

export default ItemListContainerCategory;
