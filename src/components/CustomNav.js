import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const { Brand, Collapse, Toggle } = Navbar;
const { Item } = Nav;

const CustomNav = () => {
  return (
    <>
      <Navbar as="header" expand="md" bg="dark" variant="dark">
        <Container fluid={true}>
          <Brand>
            <Link className="nav-link" to="/">
              MW
            </Link>
          </Brand>
          <Toggle />
          <Collapse>
            <Nav>
              <Item>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </Item>
              <Item>
                <Link className="nav-link" to="/category/Notebook">
                  Notebooks
                </Link>
              </Item>
              <Item>
                <Link className="nav-link" to="/category/Accesories">
                  Accesorios PC
                </Link>
              </Item>
              <Item>
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </Item>
              <Item>
                <Link className="nav-link" to="">
                  <CartWidget />
                </Link>
              </Item>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;
