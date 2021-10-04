import { useParams } from "react-router-dom";
import { useEffect } from "react";


const Ejemplo = () => {
    const resultado = useParams()
    console.log(resultado)
    useEffect(()=>{
        console.log("aca estamos en"+resultado)
        console.log(resultado)

    },[resultado])

    return (
        <h1>{resultado.id}</h1>
        )
}


export default Ejemplo;