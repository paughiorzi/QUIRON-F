import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//INFO DE mi APP
{
    apiKey: "AIzaSyBGiUK-zNuKPOLZVjIjpqyZVL1UOwGUB9s",
    authDomain: "quiron-f.firebaseapp.com",
    projectId: "quiron-f",
    storageBucket: "quiron-f.appspot.com",
    messagingSenderId: "368705468050",
    appId: "1:368705468050:web:e618d8de5962da2388984b"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
