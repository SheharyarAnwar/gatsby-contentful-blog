import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD_q2WWTHqRfMgPVK0KAG7pg28fMu5v8RM",
  authDomain: "crypto-156ca.firebaseapp.com",
  databaseURL: "https://crypto-156ca-default-rtdb.firebaseio.com",
  projectId: "crypto-156ca",
  storageBucket: "crypto-156ca.appspot.com",
  messagingSenderId: "548665673066",
  appId: "1:548665673066:web:301e3313efd9fcd21f5113",
  measurementId: "G-D95GWR01Y5",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { firebase, auth };
