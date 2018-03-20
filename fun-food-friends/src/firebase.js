import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBe5XLJTzU2PGIOacCU_-s73tRg6iOmcU4",
    authDomain: "fun-food-friends-e762a.firebaseapp.com",
    databaseURL: "https://fun-food-friends-e762a.firebaseio.com",
    projectId: "fun-food-friends-e762a",
    storageBucket: "fun-food-friends-e762a.appspot.com",
    messagingSenderId: "15505529861"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;