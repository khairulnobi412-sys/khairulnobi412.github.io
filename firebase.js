// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "XXXXXXXX",

appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
