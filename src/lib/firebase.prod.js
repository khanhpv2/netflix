import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
import { seedDatabase } from "../seed";
const config = {
  apiKey: "AIzaSyB_B02-49ESh3Cxj_FG4QXtBo_lD_aMyCw",
  authDomain: "netflix-fc4eb.firebaseapp.com",
  projectId: "netflix-fc4eb",
  storageBucket: "netflix-fc4eb.appspot.com",
  messagingSenderId: "585111111778",
  appId: "1:585111111778:web:fd28c8744c71fbec81293b",
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);


export { firebase };
