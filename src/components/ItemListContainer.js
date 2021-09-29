import ItemList from './ItemList'
import React from 'react'


class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false
        }
    }
    componentDidMount() {

        const promesa = new Promise((res,rej)=>{
            setTimeout(function() {
                this.setState({render: true})
                res('Carga de productos finalizada exitosamente')
            }.bind(this), 2000)
        })

        promesa
        .then((resultado)=>{
            console.log(resultado)
        })

    }
    render() {
        if(this.state.render) {
            return (
            <ItemList/>
            )
        }
        return (
          <p>Cargando ... </p>
        )
    }
  }


export default ItemListContainer;