import firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnleUQVuWzoKkxCx92bLwv4Ghz1tXZpWo",
    authDomain: "chat-skillconnect.firebaseapp.com",
    projectId: "chat-skillconnect",
    storageBucket: "chat-skillconnect.appspot.com",
    messagingSenderId: "288445717281",
    appId: "1:288445717281:web:90df8735fc0d6400777c60",
    measurementId: "G-17701ERBW4"
  });


  const db=firebaseApp.firestore()

  const auth=firebase.auth()

  export {db,auth}
