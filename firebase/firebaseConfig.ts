// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: "talkpal-458a3.firebaseapp.com",
  projectId: "talkpal-458a3",
  storageBucket: "talkpal-458a3.appspot.com",
  messagingSenderId: "432433104323",
  appId: "1:432433104323:web:96b4f71881f189858ea976",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
