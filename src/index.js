// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc , addDoc, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApfnPW2yh6EgiceeXN5_lt1bifg2_GnEY",
  authDomain: "gymnote-bb4b8.firebaseapp.com",
  projectId: "gymnote-bb4b8",
  storageBucket: "gymnote-bb4b8.firebasestorage.app",
  messagingSenderId: "939754420350",
  appId: "1:939754420350:web:32258e5ebcfaed27b0402f",
  measurementId: "G-04W3EYH97X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

//Sign in event handlers

signInBtn.onclick = () => signInWithPopup(auth, provider);

onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});



const list = document.querySelector(".inputText")
const submitBtn =  document.querySelector(".submitBtn")
const lists = document.querySelector(".lists")


submitBtn.addEventListener('click', ()=>{
  addToList();
  fetchList();
})

async function addToList(){
  const docRef = await addDoc(collection(db, "list"), {
    list: list.value
  });
  console.log(list.value)  
}

addEventListener("DOMContentLoaded", fetchList);

async function fetchList() {
  const querySnapshot = await getDocs(collection(db, "list"));
  
  querySnapshot.forEach((doc) => {
    const para = document.createElement("div");
    const node = document.createTextNode(doc.data().list);
    para.appendChild(node);
  });
}




