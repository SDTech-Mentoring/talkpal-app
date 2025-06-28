// talkpal/app/auth/login.tsx
// talkpal/app/auth/login.tsx
// talkpal/app/auth/login.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    console.log("Tentando login com:", email, password); // 🧪 (debug)
    if (!email || !password) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login bem-sucedido:", userCredential.user);
      Alert.alert("Login realizado com sucesso!");
      router.replace("/(tabs)");
    } catch (error: any) {
      console.error("Erro ao logar:", error);
      Alert.alert("Erro", error.message || "Falha no login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      {/* Campo de email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Campo de senha com botão "Ver" ao lado direito */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggle}>
            {showPassword ? "Ocultar" : "Ver"}
          </Text>
        </Pressable>
      </View>

      {/* Botão de login */}
      <Button title="Entrar" onPress={handleLogin} />

      {/* Link para cadastro */}
      <Text style={styles.link} onPress={() => router.push("/auth/register")}>
        Não tem conta? Cadastre-se
      </Text>

      {/* Link para recuperação de senha */}
      <Text
        style={[styles.link, { marginTop: 5 }]}
        onPress={() => router.push("/auth/forgot")}
      >
        Esqueceu a senha?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff", // evita tela preta
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  // 🔽 Estilo para o campo de senha com botão "ver"
  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 5,
  marginBottom: 15,
  // paddingHorizontal: 10, // remover aqui
  width: "100%", // 🔹 Garante que ocupa a largura total igual ao email
},
passwordInput: {
  flex: 1,
  paddingVertical: 10,
  paddingHorizontal: 10, // colocar padding dentro do input
},
 toggle: {
  color: "blue",
  paddingHorizontal: 10,
  minWidth: 60,
  textAlign: "center",
},


  link: {
    marginTop: 15,
    color: "blue",
    textAlign: "center",
  },
});

