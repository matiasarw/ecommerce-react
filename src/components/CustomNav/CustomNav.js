import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const { Brand, Collapse, Toggle } = Navbar;
const { Item } = Nav;

const CustomNav = () => {

  const categories = ['Motherboard','Procesadores','Discos','Monitores','Accesorios','Impresoras','Notebooks','Sillas']

  return (
    <Navbar as="header" expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Brand>
          <Link className="nav-link" to="/">
            MW
          </Link>
        </Brand>
        <Toggle />
        <Collapse>
          <Nav>
            <Item>
              <Link className="nav-link" to="/welcome">
                Inicio
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
                {categories.map((cat, index) => (
                  <Dropdown.Item key={index} as={Link} to={`/category/${cat}`}>
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Item>
              <Link className="nav-link" to="/ordenes">
                Ordenes
              </Link>
            </Item>
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
  );
};

export default CustomNav;
