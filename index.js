javascript
// Import the FirebaseUI script
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js";

// Configure FirebaseUI and create an instance of it
const auth = getAuth();
const ui = new firebaseui.auth.AuthUI(auth);

// Define the FirebaseUI config object with the providers you want to support 
const uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    // any other supported providers
  ],
};

// Start FirebaseUI using the config object and HTML element where the UI should be displayed
ui.start('#firebaseui-auth-container', uiConfig);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { getDatabase, ref, child, onValue } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";


async function tauth() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const authData = await signInWithPopup(auth, provider);
    console.log("Authenticated successfully with payload:", authData);
    location.assign("/dashboard/teach#welcome");
  } catch (error) {
    // Handle errors
  }
}

async function sauth() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

document.getElementById("tLBtn").addEventListener("click", tauth);
document.getElementById("sLBtn").addEventListener("click", sauth);

  try {
    const authData = await signInWithPopup(auth, provider);
    console.log("Authenticated successfully with payload:", authData);
    location.assign("./dashboard/learn#welcome");
  } catch (error) {
    // Handle errors
  }
}

if (location.hash === "#l") {
  $('#main').prepend("<div class=\"alert alert-warning alert-dismissible\" id=\"wAlert\" role=\"alert\"><button type=\"button\" class=\"close\" data-ui=\"Q\" data-uiQCl=\"#wAlert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>Please log in with the buttons in the navigation bar above.</div>");
  attachUiEvents();
}