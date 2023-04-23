import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getUi, AuthUI, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/ui/2022.0.1/firebase-ui-auth.js";

const firebaseConfig = {
  // your Firebase config goes here
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase auth and database objects
const auth = getAuth(app);
const db = getDatabase(app);

// Configure FirebaseUI.
const ui = getUi(auth);
const uiConfig = {
  // FirebaseUI config goes here - see Firebase docs for details
  signInSuccessUrl: '/',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    // Add other authentication providers here as needed
  ],
};

// Attach click handlers for teacher/student buttons
document.getElementById('teacher-btn').onclick = () => {
  // Hide the buttons
  document.getElementById('account-type-buttons').style.display = 'none';
  // Show the login form
  ui.start('#firebaseui-auth-container', {
    ...uiConfig,
    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        // User signed in as a teacher, create the teacher account
        const teacherRef = ref(db, `teachers/${authResult.user.uid}`);
        await set(teacherRef, {
          name: authResult.user.displayName,
          email: authResult.user.email,
          accountType: 'teacher',
        });
        return true;
      },
    },
  });
};

document.getElementById('student-btn').onclick = () => {
  // Hide the buttons
  document.getElementById('account-type-buttons').style.display = 'none';
  // Show the login form
  ui.start('#firebaseui-auth-container', {
    ...uiConfig,
    callbacks: {
      signInSuccessWithAuthResult: async (authResult) => {
        // User signed in as a student, create the student account
        const studentRef = ref(db, `students/${authResult.user.uid}`);
        await set(studentRef, {
          name: authResult.user.displayName,
          email: authResult.user.email,
          accountType: 'student',
        });
        return true;
      },
    },
  });
};
