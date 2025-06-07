//talkpal/app/(tabs)/houseRoutine/index.tsx
import React from "react";
import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity,} from "react-native";
import * as Speech from "expo-speech";
import FraseBarra from "@/components/FraseBarra";
import { usePhraseStore } from "@/app/store/phraseStore";
import { useRouter } from "expo-router";

type Rotina = {
  nome: string;
  imagem: any;
};

const rotinas: Rotina[] = [
  { nome: "ACORDAR", imagem: require("../../../assets/images/houseRoutine/acordar.png") },
  { nome: "ALMOÇO", imagem: require("../../../assets/images/houseRoutine/almoco.png") },
  { nome: "ANIMAIS", imagem: require("../../../assets/images/houseRoutine/animais.png") },
  { nome: "BANHO", imagem: require("../../../assets/images/houseRoutine/banho.png") },
  { nome: "BRINCAR", imagem: require("../../../assets/images/houseRoutine/brincar.png") },
  { nome: "CAFÉ DA MANHÃ", imagem: require("../../../assets/images/houseRoutine/cafeManha.png") },
  { nome: "DORMIR", imagem: require("../../../assets/images/houseRoutine/dormir.png") },
  { nome: "ESCOVAR OS DENTES", imagem: require("../../../assets/images/houseRoutine/escovarDentes.png") },
  { nome: "FAMÍLIA", imagem: require("../../../assets/images/houseRoutine/familia.png") },
  { nome: "IR À ESCOLA", imagem: require("../../../assets/images/houseRoutine/irEscola.png") },
  { nome: "IR À IGREJA", imagem: require("../../../assets/images/houseRoutine/irIgreja.png") },
  { nome: "IR AO MÉDICO", imagem: require("../../../assets/images/houseRoutine/irMedico.png") },
  { nome: "JANTAR", imagem: require("../../../assets/images/houseRoutine/jantar.png") },
  { nome: "LANCHE", imagem: require("../../../assets/images/houseRoutine/lanche.png") },
  { nome: "LEITURA", imagem: require("../../../assets/images/houseRoutine/leitura.png") },
  { nome: "LIÇÃO DE CASA", imagem: require("../../../assets/images/houseRoutine/licaoCasa.png") },
  { nome: "VER TV", imagem: require("../../../assets/images/houseRoutine/verTv.png") },
  { nome: "VOLTA DA ESCOLA", imagem: require("../../../assets/images/houseRoutine/voltaEscola.png") },
];

export default function RotinasCasa() {
  const { addWord } = usePhraseStore();
  const router = useRouter();

  const falarTexto = (texto: string) => {
    if (typeof texto === "string") {
      Speech.speak(texto, {
        language: "pt-BR",
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FraseBarra />
      <FlatList
        data={rotinas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              falarTexto(item.nome);
              addWord(item.nome);
              setTimeout(() => {
                router.push("/categories");
              }, 1000);
            }}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
    alignItems: "center",
    margin: 8,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  text: {
    marginTop: 8,
    fontSize: 18,
    textAlign: "center",
  },
});
