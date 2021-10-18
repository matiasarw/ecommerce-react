import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import {useCarrito} from "./CartContext"
import { Link } from "react-router-dom";

const { Body, Header, Img, Footer, Text, Title } = Card;

const ItemDetail = ({ prod }) => {
  const { agregarProducto } = useCarrito();
  const [state, setState] = useState(0);

  const onAdd = (cantidad) => {
    const new_prod = { prod, cantidad: cantidad };
    agregarProducto(new_prod);
    setState(1);
  };

  return (
    <main className="pt-3">
      <Card
        style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <Header style={{ fontSize: "small" }} className="text-muted">
          Código: {prod.id}
        </Header>
        <Img
          style={{
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
          }}
          src={prod.pictureUrl}
        />
        <Body>
          <Title>{prod.title}</Title>
          <Text>{prod.description}</Text>
          <Text>$ {prod.price}</Text>
          <Text>Stock: {prod.stock}</Text>
          {(() => {
            if (state === 1) {
              return (
                <>
                  <Link className="btn btn-primary" to="/cart">
                    Terminar mi compra
                  </Link>
                  <br />
                  <Link
                    style={{ marginTop: "2%" }}
                    className="btn btn-primary"
                    to="/"
                  >
                    Ver más productos
                  </Link>
                </>
              );
            } else {
              return <ItemCount stock={prod.stock} onAdd={onAdd} />;
            }
          })()}
        </Body>
        <Footer className="text-muted">Consultar por costos de envío</Footer>
      </Card>
    </main>
  );
};

export default ItemDetail;
