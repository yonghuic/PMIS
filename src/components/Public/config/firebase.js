import 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/storage'
import {getStorage} from 'firebase/storage'

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyD_VdxnymFZfL2876LxxtAH7B6fqkoW2Rw",
    authDomain: "jhpims.firebaseapp.com",
    projectId: "jhpims",
    storageBucket: "jhpims.appspot.com",
    messagingSenderId: "438756838458",
    appId: "1:438756838458:web:c18822370dbdd89b7c7903",
    measurementId: "G-JYW88C5YL4"
})

const storage = getStorage(firebaseConfig)

export default storage
