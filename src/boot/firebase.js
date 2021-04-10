import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDYf5H3ISIiBXjm1UjCcNiZkQyWxcdqCZI",
    authDomain: "twitto-2f02d.firebaseapp.com",
    projectId: "twitto-2f02d",
    storageBucket: "twitto-2f02d.appspot.com",
    messagingSenderId: "438824357338",
    appId: "1:438824357338:web:dff55ffc5d69fa2874c4e3",
    measurementId: "G-B8Y96CSJ7H"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();

export default db