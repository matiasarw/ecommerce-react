import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainerCategory from "./components/ItemListContainerCategory";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";

const App = () => {
  return (
    <>
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
            <Route path="/category/:id" component={ItemListContainerCategory} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/nosotros" component={Nosotros} />
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
