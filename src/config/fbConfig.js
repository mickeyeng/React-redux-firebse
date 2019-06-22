import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
require('dotenv').config()

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: `${API_KEY}`,
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