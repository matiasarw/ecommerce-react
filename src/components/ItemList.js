import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";
import React from "react";

const ItemList = ({ productos }) => {
  return (
    <main className="pt-3">
      <Row>
        {productos.map((prod, index) => (
          <Col sm={6} md={4} lg={3} className="pt-3" key={index}>
            <Item
              id={prod.id}
              title={prod.title}
              price={prod.price}
              pictureUrl={prod.pictureUrl}
              description={prod.description}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default ItemList;
