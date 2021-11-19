import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const { Body, Img, Footer, Text, Title } = Card;

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <Card className="text-center">
      <Img className="item-ind" src={pictureUrl} />
      <Body>
        <Title>{title}</Title>
        <Text className="item-text-sm">{description}</Text>
        <Text className="item-text-xx-sm">Código: {id}</Text>
        <Text>
          <b>${price}</b>
        </Text>
      </Body>
      <Footer>
        <Link className="btn btn-primary" to={'/item/' + id}>
          Ver más
        </Link>
      </Footer>
    </Card>
  );
};

export default Item;
