import { initializeApp } from 'firebase/app'
import { getFirestore, onSnapshot, addDoc, doc, collection, where, getDocs, query } from 'firebase/firestore' 

const fbConfig = {
    apiKey: "AIzaSyDzmVCGERPYggDg_4Yea98mNQZ_6Fn2r3Y",
    authDomain: "training-fe490.firebaseapp.com",
    projectId: "training-fe490",
    storageBucket: "training-fe490.appspot.com",
    messagingSenderId: "89973391527",
    appId: "1:89973391527:web:90ed3133e23796bf0b5b82",
    measurementId: "G-V5QJFCLZXX"
}

const app   = initializeApp(fbConfig)
const db    = getFirestore(app)
const dbRef = collection(db, "menu")

let array   = []

console.log("RUN SNAPSHOT")
onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
        //console.log(doc.data());
        let getDataFromFirebase = doc.data();
        array.push(getDataFromFirebase.menu_title)
    })
});

console.log("NEW ARRAY : ", array)

export { 
    app, 
    db, 
    onSnapshot,
    addDoc, 
    collection, 
    where, 
    getDocs, 
    query 
}