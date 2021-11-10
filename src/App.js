import React from 'react';
import Footer from './pages/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Main from './pages/Main';
import Nosotros from './pages/Nosotros';
import Gracias from './pages/Gracias';
import Orden from './pages/Orden';
import Error from './pages/Error';
import CartContext from './components/CartContext/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import CustomNav from './components/CustomNav/CustomNav';

const App = () => {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <CustomNav />
          <Container fluid>
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route path="/home" component={ItemListContainer} />
              <Route path="/welcome" component={Main} />
              <Route path="/ordenes" component={Orden} />
              <Route path="/category/:id" component={ItemListContainer} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/cart" component={CartContainer} />
              <Route path="/gracias" component={Gracias} />
              <Route component={Error} />
            </Switch>
          </Container>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  );
};

export default App;
