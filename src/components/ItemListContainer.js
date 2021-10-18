import ItemList from "./ItemList";
import React from "react";
import { useState, useEffect } from "react";
import {firestore} from "./Firebase"
import { useParams } from "react-router-dom";
import Loading from './Loading'

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  let { id } = useParams();


  const getProds = (path) => {
    const db = firestore
    const collection = db.collection("productos")
    const query = path === "home" ? collection.get() : collection.where("category", "==", path).get();
    query
    .then((resultado)=>{
      const documentos = resultado.docs
      const array_final_de_productos = []
      documentos.forEach(producto=>{
        const id = producto.id
        const el_resto = producto.data()
        const producto_final = {id,...el_resto}
        array_final_de_productos.push(producto_final)
      })
      setItems(array_final_de_productos)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  useEffect(() => {

    const path = id ? id : "home"

    new Promise((resolve,reject) => {
      setTimeout(()=>{
        getProds(path)
        setCategory(id)
      },500)
    })

  }, [id]);

  return (
    <>
      <h2 style={{ marginTop: "2%" }}>{props.greeting} </h2>
      {(() => {
        if (items.length > 0) {
          return (
            <>
            {(() => {
              if (category) {
                return (
                  <p>{category}</p>
                )
              }
            })()}
            <ItemList productos={items} />
            </>
          )
        } else {
          return (
          <>
          <p>Cargando productos, espere por favor...</p>
          <Loading/>
          </>
          )
        }
      })()}
    </>
  );
};

export default ItemListContainer;
