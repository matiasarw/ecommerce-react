import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'


const App = () => {


    return (
        <>
            <Header/>
            <Container fluid>
                <Main/>
                <Footer />
            </Container>
        </>
    )
};


export default App;
