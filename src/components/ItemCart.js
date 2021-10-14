import Card from "react-bootstrap/Card";

const { Body, Img, Footer, Text, Title } = Card;

const ItemCart = ({ prod, cant, eliminarProd }) => {
  const eliminar = () => {
    eliminarProd(prod.id);
  };
  return (
    <Card className="text-center">
      <Img
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
        src={prod.pictureUrl}
      />
      <Body>
        <Title>{prod.title}</Title>
        <Text style={{ fontSize: "small" }}>{prod.description}</Text>
        <Text style={{ fontSize: "xx-small" }}>Código: {prod.id}</Text>
        <Text>${prod.price}</Text>
        <Text>Cantidad {cant}</Text>
      </Body>
      <Footer>
        <button className="btn btn-primary" onClick={eliminar}>
          Eliminar
        </button>
      </Footer>
    </Card>
  );
};

export default ItemCart;
