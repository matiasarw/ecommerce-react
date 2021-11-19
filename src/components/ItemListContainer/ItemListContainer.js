import ItemList from '../ItemList/ItemList';
import React from 'react';
import { useState, useEffect } from 'react';
import { firestore } from '../Firebase/Firebase';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  let { id } = useParams();

  const getProds = (path) => {
    const query =
      path === 'home'
        ? firestore.collection('productos').get()
        : firestore.collection('productos').where('category', '==', path).get();
    query.then((resultado) => {
      const documentos = resultado.docs;
      const array_final_de_productos = [];
      documentos.forEach((producto) => {
        const id = producto.id;
        const el_resto = producto.data();
        const producto_final = { id, ...el_resto };
        array_final_de_productos.push(producto_final);
      });
      setItems(array_final_de_productos);
    });
  };

  useEffect(() => {
    const path = id ? id : 'home';
    getProds(path);
    setCategory(id);
  }, [id]);

  return (
    <>
      <h2 className="h2-top-2">Catalogo de productos</h2>
      {items.length > 0 ? (
        <>
          {category && <p>{category}</p>}
          <ItemList productos={items} />
        </>
      ) : (
        <>
          <p>Cargando productos, espere por favor...</p>
          <Loading />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
