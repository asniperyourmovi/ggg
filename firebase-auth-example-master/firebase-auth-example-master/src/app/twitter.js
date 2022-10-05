import { TwitterAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const twitterButton = document.querySelector('#twitter');

twitterButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new TwitterAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("twitter sign in");
    
    // Close the login modal
    const modal = bootstrap.Modal.getInstance(twitterButton.closest('.modal'));
    modal.hide();

    document.getElementById("asdzxca").innerHTML = credentials.user.displayName + "<br/>" + credentials.user.email + "<br/>" + credentials.user.photoURL + "<br/>" + credentials.providerId;

  }
  
  catch {
    console.log("error");
  }

})