import firebase from "firebase/app";
import "firebase/auth";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyAcOIzZPhgquE2g4NkrJovuIucSkMzYupI",
  authDomain: "react-firebase-authentic-b43cd.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-b43cd.firebaseio.com",
  projectId: "react-firebase-authentic-b43cd",
  storageBucket: "react-firebase-authentic-b43cd.appspot.com",
  messagingSenderId: "502482847019"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//
const auth = firebase.auth();

export { auth };