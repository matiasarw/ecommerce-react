//Promesas: es un objeto que representa una operacion a futuro con su estado y valor

//Estado: todas las promeas tienen un estado, que puede ser:
//pending: cuando la promesa esta pendiente de ser resuelta o rechazada
//resolved/fulfilled: cuando la promesa se resuelve
//rejected: cuando la promesa se rechaza

//Value/Valor: cuando termina la promesa, el valor es el valor que se obtiene (puede ser un error)


const promesa = new Promise((res,rej)=>{
    // res() --> cambia el estado de la promesa a fulfilled
    // rej() --> cambia el estado de la promesa a rechazado
    // res([1,2,3,4,5]) //cambia el estado a fulfilled con value [1,2,3,4,5]

    const a = 1
    const b = 2
    const suma = a+b
    if(suma>2){
        res(suma)
    } else {
        rej('error')
    }

})

// promesa.then() --> se ejecuta cuando pasa a estado fullfiled
// promesa.then((resultado)=>{
//     console.log(resultado)
// })
// // promesa.catch() --> se ejeecuta cuando pasa a estado rejected
// promesa.then((error)=>{
//     console.log(error)
// })
// promesa.finally() --> se ejecuta siempre q haya un cambio de estado, fulfilled o rejected

//otra forma de escribir
promesa
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('Finalizado')
})


//Sincronico: se ejecuta en ese mismo momento y bloquea el stack durante toda su ejecucion (bloqueante)
//Asincronico: se ejecuta en diferido y no bloquea el stack (no bloqueante)
//3 categorias de asincronos: Trigger (Eventos) - Timers - Requests

//Bucle de eventos (Event loop): del stack pasa a Web APIS y de ahi a Task Queue y de ahí a Stack nuevamente.

//Stack                                //WEB APIs

//Task Queue


