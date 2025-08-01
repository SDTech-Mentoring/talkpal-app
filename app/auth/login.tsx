// app/auth/login.tsx

// app/auth/login.tsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
import { Ionicons } from "@expo/vector-icons";

const firebaseConfig = {
  apiKey: "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: "talkpal-458a3.firebaseapp.com",
  projectId: "talkpal-458a3",
  storageBucket: "talkpal-458a3.firebasestorage.app",
  messagingSenderId: "432433104323",
  appId: "1:432433104323:web:96b4f71881f189858ea976"
};

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleAuth() {
    const auth = getAuth(firebaseApp);

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => router.replace("/(tabs)"))
      .catch(err => {
        if (
          err.code === "auth/invalid-credential" ||
          err.code === "auth/user-not-found" ||
          err.code === "auth/wrong-password"
        ) {
          alert("E-mail ou senha incorretos. Tente novamente.");
        } else if (err.code === "auth/invalid-email") {
          alert("O e-mail digitado é inválido.");
        } else {
          alert("Erro inesperado. Tente novamente.");
        }
      });
  }

  function handleForgotPassword() {
    const auth = getAuth(firebaseApp);
    if (!email) {
      alert("Digite seu e-mail para redefinir a senha.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("E-mail de redefinição de senha enviado! Verifique sua caixa de entrada.");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          alert("O e-mail digitado é inválido.");
        } else if (err.code === "auth/user-not-found") {
          alert("Usuário não encontrado.");
        } else {
          alert("Erro ao tentar redefinir a senha.");
        }
      });
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao TalkPal!</Text>
      <Text style={styles.infoText}>Digite seu e-mail e senha para entrar.</Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Campo de senha com botão olho */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 260, marginVertical: 8 }}>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(prev => !prev)}>
          <Ionicons
            name={mostrarSenha ? "eye" : "eye-off"}
            size={24}
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleForgotPassword}
        style={styles.forgotButton}
      >
        <Text style={styles.forgotText}>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão para cadastro */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => router.push("/auth/register")}
      >
        <Text style={styles.signupButtonText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { width: 120, height: 120, marginBottom: 32 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 18, color: "#222" },
  infoText: { fontSize: 16, color: "#444", marginBottom: 12, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", width: 260, padding: 12, marginVertical: 8, borderRadius: 8 },
  button: { backgroundColor: "#007AFF", padding: 14, borderRadius: 8, width: 260, alignItems: "center", marginTop: 12 },
  buttonText: { color: "#fff", fontSize: 18 },
  signupButton: { backgroundColor: "#E5F0FB", borderRadius: 8, width: 260, alignItems: "center", marginBottom: 10, padding: 12 },
  signupButtonText: { color: "#007AFF", fontSize: 16, fontWeight: "bold" },
  forgotButton: {
    alignSelf: "center",
    marginBottom: 8,
  },
  forgotText: {
    color: "#007AFF",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

