import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
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
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  bg="dark"
                  expand="md"
                  id="dropdown-basic"
                >
                  Categorias
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/category/Motherboard">
                    Motherboard
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Procesadores">
                    Procesadores
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Discos">
                    Discos
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Monitores">
                    Monitores
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Accesorios">
                    Accesorios
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Impresoras">
                    Impresoras
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Notebooks">
                    Notebooks
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/category/Sillas">
                    Sillas
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Item>
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </Item>
              <Item>
                <Link className="nav-link" to="/cart">
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
