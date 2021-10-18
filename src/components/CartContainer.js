import { useCarrito } from "./CartContext";
import Col from "react-bootstrap/Col";
import ItemCart from "./ItemCart";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarProducto, getTotal } = useCarrito();
  const eliminarProd = (id) => {
    eliminarProducto(id);
  };

  const total_a_pagar = getTotal();
  return (
    <>
      <main className="pt-3">
        <Row>
          {carrito.map((producto, index) => (
            <Col sm={6} md={4} lg={3} className="pt-3" key={index}>
              <ItemCart
                prod={producto.prod}
                cant={producto.cantidad}
                eliminarProd={eliminarProd}
              />
            </Col>
          ))}
        </Row>
      </main>
      {(() => {
        if (carrito.length > 0) {
          return (
            <>
              <h3
                style={{
                  marginTop: "3%",
                  marginLeft: "42%",
                  marginRight: "40%",
                }}
              >
                Total a pagar: $ {total_a_pagar}
              </h3>
              <button
                style={{
                  marginTop: "20px",
                  marginLeft: "40%",
                  marginRight: "40%",
                  width: "20%",
                }}
                className="btn btn-danger"
                onClick={vaciarCarrito}
              >
                Vaciar Carrito
              </button>
            </>
          );
        } else {
          return (<><p>Carrito vacio! </p>
                  <Link className="btn btn-primary" to={"/"}>
          Ver productos
        </Link>
        </>)
        }
      })()}
    </>
  );
};

export default Cart;
