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
              <Card
                style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                className="text-center"
              >
                <Header style={{ fontSize: 'small' }} className="text-muted">
                  Código: {prod.id}
                </Header>
                <Img
                  style={{
                    width: '30%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '15px',
                  }}
                  src={prod.pictureUrl}
                />
                <Body>
                  <Title>{prod.title}</Title>
                  <Text>{prod.description}</Text>
                  <Text>$ {prod.price}</Text>
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
