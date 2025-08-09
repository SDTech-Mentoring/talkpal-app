// app/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
// Primeiro tenta pegar das variáveis de ambiente (produção),
// se não existir, usa os valores atuais como fallback (local).
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "talkpal-458a3.firebaseapp.com",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "talkpal-458a3",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "talkpal-458a3.firebasestorage.app",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "432433104323",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "1:432433104323:web:96b4f71881f189858ea976",
};

// Inicializa o Firebase apenas uma vez (singleton)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Exporta instâncias para usar no app inteiro
export const auth = getAuth(app);
export const db = getFirestore(app);
