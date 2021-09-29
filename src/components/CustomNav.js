import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import CartWidget from './CartWidget'


const {Brand,Collapse,Toggle} = Navbar
const {Item,Link} = Nav

const CustomNav = () => {
    return (


        <>
        <Navbar as="header" expand="md" bg="dark" variant="dark">
            <Container fluid={true}>
                <Brand>
                    <h1>E-Commerce</h1>
                </Brand>
                <Toggle/>
                <Collapse>
                    <Nav>
                        <Item>
                            <Link href="/">Categoria 1</Link>
                        </Item>
                        <Item>
                            <Link href="/">Categoria 2</Link>
                        </Item>
                        <Item>
                            <Link><CartWidget/></Link>
                        </Item>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        </>
    );
}
 
export default CustomNav;