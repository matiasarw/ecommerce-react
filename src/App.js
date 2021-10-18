import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import CartContext from "./components/CartContext";
import CartContainer from "./components/CartContainer";

const App = () => {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Header />
          <Container fluid>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <ItemListContainer
                    greeting="Catalogo de productos"
                    {...props}
                  />
                )}
              />
              <Route path="/home" component={Home} />
              <Route
                path="/category/:id"
                render={(props) => (
                  <ItemListContainer
                    greeting="Catalogo de productos"
                    {...props}
                  />
                )}
              />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/cart" component={CartContainer} />
            </Switch>
            <Footer />
          </Container>
        </BrowserRouter>
      </CartContext>
    </>
  );
};

export default App;
