import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    
    // Close the login modal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    document.getElementById("asdzxca").innerHTML = credentials.user.displayName + "<br/>" + credentials.user.email + "<br/>" + credentials.user.photoURL + "<br/>" + credentials.providerId;

  }
  
  catch {
    console.log("error");
  }

})