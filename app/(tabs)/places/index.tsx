//talkpal/app/(tabs)/places/index.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import FraseBarra from "@/components/FraseBarra";
import { usePhraseStore } from "@/app/store/phraseStore";
import { useRouter } from "expo-router";

type Place = {
  nome: string;
  imagem: any;
};

const lugares: Place[] = [
  { nome: "Capela", imagem: require("../../../assets/images/places/capela.png") },
  { nome: "Casa de Campo", imagem: require("../../../assets/images/places/casaCampo.png") },
  { nome: "Chácara", imagem: require("../../../assets/images/places/chacara.png") },
  { nome: "Cidade", imagem: require("../../../assets/images/places/cidade.png") },
  { nome: "Cinema", imagem: require("../../../assets/images/places/cinema.png") },
  { nome: "Hospital", imagem: require("../../../assets/images/places/hospital.png") },
  { nome: "Montanha", imagem: require("../../../assets/images/places/montanha.png") },
  { nome: "Museu", imagem: require("../../../assets/images/places/museu.png") },
  { nome: "Padaria", imagem: require("../../../assets/images/places/padaria.png") },
  { nome: "Parque", imagem: require("../../../assets/images/places/parque.png") },
  { nome: "Praia", imagem: require("../../../assets/images/places/praia.png") },
  { nome: "Restaurante", imagem: require("../../../assets/images/places/restaurante.png") },
  { nome: "Shopping", imagem: require("../../../assets/images/places/shopping.png") },
  { nome: "Zoológico", imagem: require("../../../assets/images/places/zoologico.png") },
];

export default function Places() {
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
        data={lugares}
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
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
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
  image: { width: 120, height: 120, resizeMode: "contain" },
  text: { marginTop: 8, fontSize: 18 },
});
