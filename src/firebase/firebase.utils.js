import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAxn-Ytaw1nB9q-xCM8eqHUU7MEsCVOuA4",
    authDomain: "coach-finder-messages.firebaseapp.com",
    projectId: "coach-finder-messages",
    storageBucket: "coach-finder-messages.appspot.com",
    messagingSenderId: "1074098857412",
    appId: "1:1074098857412:web:94309baccc3dd8a68b7091",
    measurementId: "G-ZGYM3DCJWN"
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore()
export const messagesCollection = db.collection('messages')
export const coachCollection = db.collection('coaches')





