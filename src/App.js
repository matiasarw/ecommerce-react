import { useState, useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'


const App = () => {

    const [contador,setContador] = useState(0)
    //useEffect(a,[]) --> si no ponemos nada en el segundo parametro
    //lo hace 1 sola vez y despues no ejecuta mas
    //el [] indica los componentes q al renderizarse va a ejecutar el efecto
    //la primera vez siempre lo muestra por mas que este [] vacio
    //en este caso se ejecuta la primera vez y cuando contador llega a 5

    // useEffect(()=>{
    //     console.log("Probando efectos")
    // },[contador==5])

    //en este caso se ejecuta la primera vez y nunca mas

    // useEffect(()=>{
    //     console.log("Probando efectos")
    // },[])

    //en este caso se ejecuta siempre
    useEffect(()=>{
        console.log("Probando efectos")
    })

    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <Header/>
            <Container fluid>
                <p>El contador va: {contador}</p>
                <button onClick={aumentar}>Sumar</button>
                <Main/>
                <Footer />
            </Container>
        </>
    )
};


export default App;
