import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Registration Successful");

window.location="dashboard.html";

}catch(error){

alert(error.message);

}

});
