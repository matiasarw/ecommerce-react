import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const { Body, Header, Img, Footer, Text, Title } = Card;

const ItemDetail = ({ prod }) => {
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
          <ItemCount stock={prod.stock} />
        </Body>
        <Footer className="text-muted">Consultar por costos de envío</Footer>
      </Card>
    </main>
  );
};

export default ItemDetail;
