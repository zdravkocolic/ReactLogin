 import firebase from "firebase";


 var firebaseui = require('firebaseui');
 var firebaseConfig = {
    apiKey: "AIzaSyCH5OBzDuCzjp14JTZB1AF7NQ4dd6Xd5tI",
    authDomain: "login-1de5e.firebaseapp.com",
    projectId: "login-1de5e",
    storageBucket: "login-1de5e.appspot.com",
    messagingSenderId: "64143606525",
    appId: "1:64143606525:web:75408253c4d53e26b1f494"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;