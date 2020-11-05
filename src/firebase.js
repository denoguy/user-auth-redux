import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBODiWDjxhbzGnVnE035wM3YLRYPpshAWg",
  authDomain: "user-auth-71ecf.firebaseapp.com",
  databaseURL: "https://user-auth-71ecf.firebaseio.com",
  projectId: "user-auth-71ecf",
  storageBucket: "user-auth-71ecf.appspot.com",
  messagingSenderId: "198458303906",
  appId: "1:198458303906:web:d3739fd59126853c25befb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//accesing auth
const auth = firebaseApp.auth();

//accesing provider

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
