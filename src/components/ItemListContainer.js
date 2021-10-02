import ItemList from './ItemList'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'




const ItemListContainer = (props) => {
    console.log(props)
    const [productos,setProductos] = useState([])
    const resultado = useParams()
    console.log("Reejecucion")
    console.log(resultado)
    useEffect(()=>{
        console.log("aca hago el pedido")
        // if(resultado.esUnObjetoVacio){
        //     funcionvacio("url/")
        // } else{
        //     funcion_categoria()
        // }
    },[resultado])

    return ( 
        <ItemList/>
    );
}
 
// class ItemListContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             render: false //Set render state to false
//         }
//     }
//     componentDidMount() {

//         const promesa = new Promise((res,rej)=>{
//             setTimeout(function() {
//                 this.setState({render: true}) //After 1 second, set render to true
//                 res('Carga finalizada exitosamente')
//             }.bind(this), 2000)
//         })

//         promesa
//         .then((resultado)=>{
//             console.log(resultado)
//         })

//     }
//     render() {
//         let renderContainer = false //By default don't render anything
//         if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
//             return (
//             <ItemList/>
//             ) //Add dom elements
//         }
//         return (
//           <p>Cargando ... </p> //Render the dom elements, or, when this.state == false, nothing.
//         )
//     }
//   }


export default ItemListContainer;