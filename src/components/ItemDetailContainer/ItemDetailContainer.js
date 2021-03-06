import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { firestore } from '../Firebase/Firebase';
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  let { id } = useParams();

  const getProd = useCallback(() => {
    firestore
      .collection('productos')
      .doc(id)
      .get()
      .then((prod) => {
        const itemFinal = { id, ...prod.data() };
        setItem(itemFinal);
      });
  }, [id]);

  useEffect(() => {
    getProd();
  }, [id, getProd]);

  return (
    <>
      {item ? (
        <ItemDetail prod={item} />
      ) : (
        <>
          <p>Cargando producto, espere por favor...</p>
          <Loading />
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
