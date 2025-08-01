//app/auth/register.tsx
// app/auth/register.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc
} from "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACOP3UsKJ43_DpQnKkWd7fGMxCCK5hBgM",
  authDomain: "talkpal-458a3.firebaseapp.com",
  projectId: "talkpal-458a3",
  storageBucket: "talkpal-458a3.firebasestorage.app",
  messagingSenderId: "432433104323",
  appId: "1:432433104323:web:96b4f71881f189858ea976"
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default function RegisterScreen() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirma, setMostrarConfirma] = useState(false);
  const [termos, setTermos] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    if (auth.currentUser) signOut(auth);
  }, []);

  async function verificarEmailExiste() {
    const emailLimpo = email.trim();
    if (!emailLimpo) return;

    try {
      const auth = getAuth(firebaseApp);
      const methods = await fetchSignInMethodsForEmail(auth, emailLimpo);

      if (methods.length > 0) {
        Alert.alert(
          "E-mail já cadastrado",
          "Você já possui uma conta com este e-mail. Deseja fazer login ou recuperar a senha?",
          [
            {
              text: "Recuperar senha",
              onPress: () => router.push("/auth/login"),
            },
            {
              text: "Fazer login",
              onPress: () => router.push("/auth/login"),
              style: "default",
            },
            {
              text: "Cancelar",
              style: "cancel",
            },
          ]
        );
      }
    } catch (error) {
      console.error("Erro ao verificar e-mail:", error);
    }
  }

  async function handleRegister() {
    if (!nome || !email.trim() || !telefone || !cpf || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }
    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    if (!termos) {
      Alert.alert("Erro", "Você deve aceitar os termos de uso.");
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth(firebaseApp);
      const firestore = getFirestore(firebaseApp);

      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), senha.trim());
      const uid = userCredential.user.uid;

      await setDoc(doc(firestore, "users", uid), {
        nome,
        email: email.trim(),
        telefone,
        cpf,
        termos,
        status: "pending",
        data_cadastro: new Date().toISOString(),
      });

      Alert.alert(
        "Cadastro enviado!",
        "Seu cadastro foi realizado e está aguardando aprovação.",
        [
          {
            text: "OK",
            onPress: () => router.push("/auth/login"),
          },
        ]
      );
    } catch (error) {
      if (typeof error === "object" && error !== null) {
        const maybeError = error as { code?: string; message?: string };

        if (maybeError.code === "auth/email-already-in-use") {
          Alert.alert(
            "E-mail já cadastrado",
            "Você já possui uma conta com este e-mail. Deseja fazer login ou recuperar a senha?",
            [
              {
                text: "Recuperar senha",
                onPress: () => router.push("/auth/login"),
              },
              {
                text: "Fazer login",
                onPress: () => router.push("/auth/login"),
                style: "default",
              },
              {
                text: "Cancelar",
                style: "cancel",
              },
            ]
          );
        } else if (maybeError.code === "auth/invalid-email") {
          Alert.alert("Erro", "O e-mail informado é inválido.");
        } else if (maybeError.code === "auth/weak-password") {
          Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
        } else if (maybeError.message) {
          Alert.alert("Erro inesperado", maybeError.message);
        } else {
          Alert.alert("Erro inesperado", "Ocorreu um erro desconhecido.");
        }
      } else {
        Alert.alert("Erro inesperado", "Algo deu errado. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        onBlur={verificarEmailExiste}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="number-pad"
        maxLength={14}
      />

      <View style={styles.senhaContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha((prev) => !prev)}>
          <Ionicons name={mostrarSenha ? "eye" : "eye-off"} size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.senhaContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={!mostrarConfirma}
        />
        <TouchableOpacity onPress={() => setMostrarConfirma((prev) => !prev)}>
          <Ionicons name={mostrarConfirma ? "eye" : "eye-off"} size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setTermos(!termos)}
      >
        <View style={[styles.checkbox, termos && styles.checkboxChecked]} />
        <Text style={styles.checkboxLabel}>Aceito os Termos de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/login")}>
        <Text style={styles.linkText}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#222",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 260,
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    width: 260,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  linkText: {
    color: "#007AFF",
    marginTop: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#007AFF",
  },
  checkboxLabel: {
    color: "#222",
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 260,
    marginVertical: 8,
  },
});
