import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const { Body, Img, Footer, Text, Title } = Card;

const Item = (props) => {
  return (
    <Card className="text-center">
      <Img
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
        src={props.pictureUrl}
      />
      <Body>
        <Title>{props.title}</Title>
        <Text style={{ fontSize: "small" }}>{props.description}</Text>
        <Text style={{ fontSize: "xx-small" }}>Código: {props.id}</Text>
        <Text>${props.price}</Text>
      </Body>
      <Footer>
        <Link className="btn btn-primary" to={"/item/" + props.id}>
          Ver más
        </Link>
      </Footer>
    </Card>
  );
};

export default Item;
