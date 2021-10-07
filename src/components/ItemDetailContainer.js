import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);

  const getItemByID = (id, myJson) => {
    setItem(myJson.filter((element) => element.id === id));
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
        const id = props.match.params.id;
        getItemByID(id, myJson);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        getData();
        resolve("ok");
      }, 500);
    });
  }, [getData]);

  return (
    <>
      {(() => {
        if (item) {
          return <ItemDetail prod={item[0]} />;
        } else {
          return <p>Cargando producto, espere por favor...</p>;
        }
      })()}
    </>
  );
};

export default ItemDetailContainer;
