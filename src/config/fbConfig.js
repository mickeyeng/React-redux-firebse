import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCb4yrFg6fWpxGl4OXN2kgPAdK0q_CoWkU",
    authDomain: "mickey-react-redux-firebase.firebaseapp.com",
    databaseURL: "https://mickey-react-redux-firebase.firebaseio.com",
    projectId: "mickey-react-redux-firebase",
    storageBucket: "",
    messagingSenderId: "169155060482",
    appId: "1:169155060482:web:061538ffb85ed9de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase