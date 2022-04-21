// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAnHK3229z0rDF0etngSZPgatP4QKaN_sE",
  authDomain: "fir-44970.firebaseapp.com",
  projectId: "fir-44970",
  storageBucket: "fir-44970.appspot.com",
  messagingSenderId: "724983943168",
  appId: "1:724983943168:web:30cf183d8810516e2808e5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db