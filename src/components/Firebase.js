//Tenes que traer a firebase
import firebase from 'firebase/app'

//Tenes que traer el servicio que vas a usar
import "firebase/firestore"

//Tenes que inicializar la app
const firebaseConfig = {
    apiKey: "AIzaSyBUZ0Vlpuq9MHJbiYaV8JvRGWNbD-5Pfjk",
    authDomain: "react-coder-50fc4.firebaseapp.com",
    projectId: "react-coder-50fc4",
    storageBucket: "react-coder-50fc4.appspot.com",
    messagingSenderId: "565165820053",
    appId: "1:565165820053:web:03d4aef44a300749ff739c"
}
const app = firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore(app)