// firebase/firebaseConfig.ts (ou .js, se preferir JS)
// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: "talkpal-458a3.firebaseapp.com",
  projectId: "talkpal-458a3",
  storageBucket: "talkpal-458a3.appspot.com",

  messagingSenderId: "432433104323",
  appId: "1:432433104323:web:96b4f71881f189858ea976",
};

// ✅ Inicializa o app
const app = initializeApp(firebaseConfig);

// ✅ Condicional: getAuth no web, initializeAuth no native
const auth =
  Platform.OS === "web"
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });

export { app, auth };
