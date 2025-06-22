//talkpal/app/(tabs)/places/index.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import FraseBarra from "@/components/FraseBarra";
import { usePhraseStore } from "../../../store/phraseStore";
import { useRouter } from "expo-router";
import BackButton from '../../../components/BackButton';

function paraMaiuscula(texto: string): string {
  return texto.toUpperCase();
} //função para converter para maiúsculo

type Place = {
  nome: string;
  imagem: any;
};

const lugares: Place[] = [
  { nome: "CAPELA", imagem: require("../../../assets/images/places/capela.png") },
  { nome: "CASA DE CAMPO", imagem: require("../../../assets/images/places/casaCampo.png") },
  { nome: "CHÁCARA", imagem: require("../../../assets/images/places/chacara.png") },
  { nome: "CIDADE", imagem: require("../../../assets/images/places/cidade.png") },
  { nome: "CINEMA", imagem: require("../../../assets/images/places/cinema.png") },
  { nome: "HOSPITAL", imagem: require("../../../assets/images/places/hospital.png") },
  { nome: "MONTANHA", imagem: require("../../../assets/images/places/montanha.png") },
  { nome: "MUSEU", imagem: require("../../../assets/images/places/museu.png") },
  { nome: "PADARIA", imagem: require("../../../assets/images/places/padaria.png") },
  { nome: "PARQUE", imagem: require("../../../assets/images/places/parque.png") },
  { nome: "PRAIA", imagem: require("../../../assets/images/places/praia.png") },
  { nome: "RESTAURANTE", imagem: require("../../../assets/images/places/restaurante.png") },
  { nome: "SHOPPING", imagem: require("../../../assets/images/places/shopping.png") },
  { nome: "ZOOLÓGICO", imagem: require("../../../assets/images/places/zoologico.png") },
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
      <BackButton />
      <FraseBarra />
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              falarTexto(item.nome);
              addWord(paraMaiuscula(item.nome));
              setTimeout(() => {
                router.push("/categories");
              }, 1000);
            }}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.text}>{paraMaiuscula(item.nome)}</Text>
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
