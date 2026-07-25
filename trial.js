import { db } from "./firebase.js";

import {

collection,

addDoc,

serverTimestamp

} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

async function registerTrial(data){

try{

await addDoc(collection(db,"trials"),{

...data,

createdAt:serverTimestamp()

});

alert("Trial Registered Successfully");

}catch(error){

alert(error.message);

}

}
