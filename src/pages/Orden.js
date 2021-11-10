import React, {useState} from 'react'
import { firestore } from '../components/Firebase/Firebase';
import { useForm } from "react-hook-form";
import Loading from '../components/Loading/Loading'


const Orden = () => {
    
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [item,setItem] = useState({})
    const [estado,setEstado] = useState(false)
    const [count,setCount] = useState(false)

    async function handleClick({order_id}) {
        setEstado(true)
        setCount(true)
        const query = await firestore.collection('ordenes').where('order', '==', order_id).limit(1).get();
         if (!query.empty) {
          const data = query.docs[0].data();
          setItem(data)
          setEstado(false)
        } else {
          setItem({})
          setEstado(false)
        }
      }


    return (
        <div className="form-group" style={{display:'flex', justifyContent:'center'}}>
            <div style={{marginTop:'8%', width:'500px'}}>
                <form onSubmit={handleSubmit(handleClick)} className="form-custom">
                    <h4 style={{marginBottom:'10%', textAlign:'center'}}>Estado de Orden</h4>
                    <input style={{marginBottom:'10%'}} className="form-control form-group" placeholder="Orden ID" {...register("order_id", { 
                        required: "* Identificar no puede ser nulo.", 
                        maxLength: {value:10,message:"El identificador de orden tiene 10 digitos."},
                        minLength: {value:10,message:"El identificador de orden tiene 10 digitos."},
                    })} />
                    {errors.order_id && <p className="error">{errors.order_id.message}</p>}
                    <button style={{marginBottom:'10%'}} type="submit" className="btn btn-primary btn-block">BUSCAR</button>
                </form>
                <div>
                    {(()=>{
                        if(!estado){
                            return (
                                <div>
                                    {(()=>{
                                        if(item.items){
                                            return (
                                                <div>
                                                    <p><b>Orden ID:</b> {item.order}</p>
                                                    <p><b>Fecha de compra: </b> 
                                                        {item.date.toDate().getDate()}/{item.date.toDate().getMonth()+1}/{item.date.toDate().getFullYear()}
                                                        &nbsp; {item.date.toDate().getHours()}:{item.date.toDate().getMinutes()}
                                                    </p>
                                                    <p><b>Cantidad de productos:</b> {item.items.length}</p>
                                                    <p><b>Precio total:</b> $ {item.total}</p>
                                                    <p><b>Estado:</b> {item.estado}</p>
                                                    <p><b>Fecha estimada de arribo: </b>
                                                        {item.date.toDate().getDate()+3}/{item.date.toDate().getMonth()+1}/{item.date.toDate().getFullYear()}
                                                    </p>
                                                </div>
                                            )
                                        } else if (count) {
                                                return <h6>Ingrese número de orden válido.</h6>
                                        }
                                    })()}
                                </div>
                            )
                        } else {
                            return <Loading/>
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Orden
