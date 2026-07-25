import { auth } from "./firebase.js";

import {

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const login=document.getElementById("loginForm");

login.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

window.location="dashboard.html";

}catch(err){

alert(err.message);

}

});
