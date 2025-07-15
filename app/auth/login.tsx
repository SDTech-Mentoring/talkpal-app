// app/auth/login.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";

// Substitua pelos dados do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: "talkpal-458a3.firebaseapp.com",
  projectId: "talkpal-458a3",
  storageBucket: "talkpal-458a3.firebasestorage.app",
  messagingSenderId: "432433104323",
  appId: "1:432433104323:web:96b4f71881f189858ea976"
};

// Inicialize só uma vez!
const firebaseApp = initializeApp(firebaseConfig);

export default function LoginScreen() {
  const router = useRouter();

  // Expo Auth Session para Google
  const [request, response, promptAsync] = Google.useAuthRequest({
  clientId: "432433104323-sfg6inrhcj3ianvr65lel1ogv5qntj35.apps.googleusercontent.com", // para web/Expo Go
  // androidClientId: "SEU_CLIENT_ID_ANDROID.apps.googleusercontent.com", // se usar em apk/Google Play
  // iosClientId: "SEU_CLIENT_ID_IOS.apps.googleusercontent.com", // se usar em iOS
});


  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const auth = getAuth(firebaseApp);
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then(() => {
          // Se logou, navega para o app principal
          router.replace("/(tabs)");
        })
        .catch((error) => {
          alert("Erro no login: " + error.message);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Bem-vindo ao TalkPal!</Text>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => promptAsync()}
      >
        <Image
          source={{ uri: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { width: 120, height: 120, marginBottom: 32 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 32, color: "#222" },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  googleIcon: { width: 32, height: 32, marginRight: 12 },
  buttonText: { fontSize: 18, color: "#333" },
});
