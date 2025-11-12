// firebaseConfig.ts
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/** 
// TODO: Remplacez cet objet par la configuration de VOTRE projet Firebase
// que vous pouvez trouver dans les paramètres de votre projet sur la console Firebase.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
*/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk5JcZNMWCZNB61BERASQSzATuOtxKoTU",
  authDomain: "kepy-beta.firebaseapp.com",
  projectId: "kepy-beta",
  storageBucket: "kepy-beta.firebasestorage.app",
  messagingSenderId: "321528417810",
  appId: "1:321528417810:web:87312a40ca1c64656352cb",
  measurementId: "G-VY0P0BNH1P"
};


// Initialiser Firebase
const app = initializeApp(firebaseConfig);
// Exporter le service d'authentification pour l'utiliser dans d'autres composants
export const auth = getAuth(app);
