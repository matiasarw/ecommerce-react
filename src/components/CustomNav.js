import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const {Brand,Collapse,Toggle} = Navbar
const {Item} = Nav

const CustomNav = () => {
    return (


        <>
        <Navbar as="header" expand="md" bg="dark" variant="dark">
            <Container fluid={true}>
                <Brand>
                    <Link to="/">E-Commerce</Link>
                </Brand>
                <Toggle/>
                <Collapse>
                    <Nav>
                        <Item>
                            <Link to="/categoria/1">Categoria 1</Link>
                        </Item>
                        <Item>
                            <Link to="/categoria/2">Categoria 2</Link>
                        </Item>
                        <Item>
                            <Link to="/cart"><CartWidget/></Link>
                        </Item>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        </>
    );
}
 
export default CustomNav;