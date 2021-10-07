import ItemList from "./ItemList";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";

const ItemListContainerCategory = (props) => {
  const [items, setItems] = useState([]);

  const getItemsByCategoryID = (category, myJson) => {
    return myJson.filter((element) => element.category === category);
  };

  const getData = useCallback(() => {
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
  }, [props.match.params.id]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        getData();
        resolve("ok");
      }, 200);
    });
  }, [getData]);

  return (
    <>
      <h2 style={{ marginTop: "10px" }}>Catalogo</h2>
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
