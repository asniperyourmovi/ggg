import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAN-9K8nCOgTF9rD3T6o-tB4Hom3V9BAUw",
  authDomain: "musicherh.firebaseapp.com",
  projectId: "musicherh",
  storageBucket: "musicherh.appspot.com",
  messagingSenderId: "144940464951",
  appId: "1:144940464951:web:304dcf2561f5309ea7b8b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)