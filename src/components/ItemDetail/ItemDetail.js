import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useCarrito } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import Error from '../../pages/Error';
import '../../pages/styles.css';

const { Body, Header, Img, Footer, Text, Title } = Card;

const ItemDetail = ({ prod }) => {
  const { agregarProducto } = useCarrito();
  const [state, setState] = useState(false);

  const onAdd = (cantidad) => {
    const new_prod = { prod, cantidad: cantidad };
    agregarProducto(new_prod);
    setState(true);
  };

  return (
    <>
      {(() => {
        if (prod.title) {
          return (
            <main className="pt-3">
              <Card className="text-center card-detail">
                <Header className="text-muted item-text-sm">Código: {prod.id}</Header>
                <Img className="img-detail" src={prod.pictureUrl} />
                <Body>
                  <Title>{prod.title}</Title>
                  <Text>{prod.description}</Text>
                  <Text>
                    <b>$ {prod.price}</b>
                  </Text>
                  <Text>Stock: {prod.stock}</Text>
                  {state ? (
                    <>
                      <Link className="btn btn-primary button-custom-1" to="/cart">
                        Terminar mi compra
                      </Link>
                      <br />
                      <Link className="btn btn-primary button-custom-2" to="/home">
                        Ver más productos
                      </Link>
                    </>
                  ) : (
                    <ItemCount stock={prod.stock} onAdd={onAdd} />
                  )}
                </Body>
                <Footer className="text-muted">Consultar por costos de envío</Footer>
              </Card>
            </main>
          );
        } else {
          return <Error />;
        }
      })()}
    </>
  );
};

export default ItemDetail;
