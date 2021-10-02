import { useState, useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer'

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
        // console.log("Probando efectos")
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log("Error"))

    },[])

    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Container fluid>
                <Switch>
                    {/* url : /  */}
                    <Route path="/" component={ItemListContainer} />
                    {/* url : /categoria/1  */}
                    {/* <Route path="/categoria/1" component={ItemListContainer} /> */}
                    <Route path="/categoria/:id" component={ItemListContainer} />
                    {/* url : /categoria/2  */}
                    {/* <Route path="/categoria/2" component={ItemListContainer} /> */}
                </Switch>
                {/* <p>El contador va: {contador}</p>
                <button onClick={aumentar}>Sumar</button> */}

                {/* <Main/> */}
                <Footer />
            </Container>
        </BrowserRouter>
        </>
    )
};


export default App;
