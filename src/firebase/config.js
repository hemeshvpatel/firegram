import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyARDbchgyYdOI_V9-kotEl9sA5P_U5Gk68",
    authDomain: "firegram-bd7b3.firebaseapp.com",
    databaseURL: "https://firegram-bd7b3.firebaseio.com",
    projectId: "firegram-bd7b3",
    storageBucket: "firegram-bd7b3.appspot.com",
    messagingSenderId: "895420512543",
    appId: "1:895420512543:web:126a6f608fb0403d86182a"
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };