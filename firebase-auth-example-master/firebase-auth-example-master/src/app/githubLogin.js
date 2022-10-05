import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const githubButton= document.querySelector("#githubLogin");

githubButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("Github sign in");
    
    // Close the login modal
    const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('.modal'));
    modalInstance.hide();

    document.getElementById("asdzxca").innerHTML = credentials.user.displayName + "<br/>" + credentials.user.email + "<br/>" + credentials.user.photoURL + "<br/>" + credentials.providerId;
  
  } 
  catch (error) {
    console.log(error);
  }
});