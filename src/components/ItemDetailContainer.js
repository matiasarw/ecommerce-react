import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);

  const getItemByID = (id, myJson) => {
    myJson.filter(function (element) {
      if (element.id === id) {
        setItem(element);
      }
    });
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
        const id = props.match.params.id;
        getItemByID(id, myJson);
      });
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        getData();
        resolve("ok");
      }, 500);
    });
  }, [props.match.params.id]);

  return (
    <>
      {(() => {
        if (item) {
          return <ItemDetail prod={item} />;
        } else {
          return <p>Cargando producto, espere por favor...</p>;
        }
      })()}
    </>
  );
};

export default ItemDetailContainer;
