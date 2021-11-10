import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const { Body, Img, Footer, Text, Title } = Card;

const Item = ({id,title,description,price,pictureUrl}) => {
  return (
    <Card className="text-center">
      <Img
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
        src={pictureUrl}
      />
      <Body>
        <Title>{title}</Title>
        <Text style={{ fontSize: "small" }}>{description}</Text>
        <Text style={{ fontSize: "xx-small" }}>Código: {id}</Text>
        <Text>${price}</Text>
      </Body>
      <Footer>
        <Link className="btn btn-primary" to={"/item/" + id}>
          Ver más
        </Link>
      </Footer>
    </Card>
  );
};

export default Item;
