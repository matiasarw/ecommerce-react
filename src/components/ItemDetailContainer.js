import React, {useCallback} from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestore} from "./Firebase"
import Loading from "./Loading"

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);
  let { id } = useParams();

  const getProd = useCallback(() => {
    const db = firestore
    const collection = db.collection("productos").doc(id)
    const query = collection.get();
    query
    .then((prod)=>{
      const itemFinal = {id,...prod.data()}
      setItem(itemFinal) })
    .catch(error=>{
      console.log(error)
    })
  },[id])


  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        getProd();
      }, 500);
    });
  }, [id, getProd]);

  return (
    <>
      {(() => {
        if (item) {
          return <ItemDetail prod={item} />;
        } else {
          return (
            <>
            <p>Cargando producto, espere por favor...</p>
            <Loading/>
            </>
            )
        }
      })()}
    </>
  );
};

export default ItemDetailContainer;
