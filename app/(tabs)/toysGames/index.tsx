
//talkpal/app/(tabs)/toysGames/index.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import FraseBarra from "@/components/FraseBarra";
import { usePhraseStore } from "../../../store/phraseStore";
import { useRouter } from "expo-router";
import BackButton from '../../../components/BackButton';


type Brinquedo = {
  nome: string;
  imagem: any;
};

const brinquedos: Brinquedo[] = [
  { nome: "AMARELINHA", imagem: require("../../../assets/images/toysGames/amarelinha.png") },
  { nome: "ATRAVESSAR PONTE", imagem: require("../../../assets/images/toysGames/atravessarPonte.png") },
  { nome: "AUTORAMA", imagem: require("../../../assets/images/toysGames/autorama.png") },
  { nome: "BALANCE", imagem: require("../../../assets/images/toysGames/balance.png") },
  { nome: "BALDE E PÁ", imagem: require("../../../assets/images/toysGames/baldePa.png") },
  { nome: "BANCO DE AREIA", imagem: require("../../../assets/images/toysGames/bancoAreia.png") },
  { nome: "BARBIE", imagem: require("../../../assets/images/toysGames/barbie.png") },
  { nome: "BEXIGA", imagem: require("../../../assets/images/toysGames/bexiga.png") },
  { nome: "BILHAR", imagem: require("../../../assets/images/toysGames/bilhar.png") },
  { nome: "BINGO", imagem: require("../../../assets/images/toysGames/bingo.png") },
  { nome: "BOLA", imagem: require("../../../assets/images/toysGames/bola.png") },
  { nome: "BOLICHE", imagem: require("../../../assets/images/toysGames/boliche.png") },
  { nome: "BONECA", imagem: require("../../../assets/images/toysGames/boneca.png") },
  { nome: "BONECO", imagem: require("../../../assets/images/toysGames/boneco.png") },
  { nome: "CAÇAR BRINQUEDOS", imagem: require("../../../assets/images/toysGames/cacoBrinquedos.png") },
  { nome: "CAMA", imagem: require("../../../assets/images/toysGames/cama.png") },
  { nome: "CAMINHÃO", imagem: require("../../../assets/images/toysGames/caminhao.png") },
  { nome: "CARTAS", imagem: require("../../../assets/images/toysGames/cartas.png") },
  { nome: "CATAVENTO", imagem: require("../../../assets/images/toysGames/catavento.png") },
  { nome: "CAVALO DE BALANÇO", imagem: require("../../../assets/images/toysGames/cavaloBalanco.png") },
  { nome: "CONSOLE", imagem: require("../../../assets/images/toysGames/console.png") },
  { nome: "COZINHA", imagem: require("../../../assets/images/toysGames/cozinha.png") },
  { nome: "CUBO", imagem: require("../../../assets/images/toysGames/cubo.png") },
  { nome: "DADOS", imagem: require("../../../assets/images/toysGames/dados.png") },
  { nome: "DAMAS", imagem: require("../../../assets/images/toysGames/damas.png") },
  { nome: "DARDOS", imagem: require("../../../assets/images/toysGames/dardos.png") },
  { nome: "DOMINÓ", imagem: require("../../../assets/images/toysGames/domino.png") },
  { nome: "ENCAIXES", imagem: require("../../../assets/images/toysGames/encaixes.png") },
  { nome: "ESCALAR", imagem: require("../../../assets/images/toysGames/escalar.png") },
  { nome: "ESCORREGA", imagem: require("../../../assets/images/toysGames/escorrega.png") },
  { nome: "FANTOCHE", imagem: require("../../../assets/images/toysGames/fantoche.png") },
  { nome: "GANGORRA", imagem: require("../../../assets/images/toysGames/gangorra.png") },
  { nome: "GIRA-GIRA", imagem: require("../../../assets/images/toysGames/gira-gira.png") },
  { nome: "GUARDAR BRINQUEDOS", imagem: require("../../../assets/images/toysGames/guardarBrinquedos.png") },
  { nome: "IOIÔ", imagem: require("../../../assets/images/toysGames/ioio.png") },
  { nome: "JOGAR CELULAR", imagem: require("../../../assets/images/toysGames/jogarCelular.png") },
  { nome: "JOGAR COMPUTADOR", imagem: require("../../../assets/images/toysGames/jogarComputador.png") },
  { nome: "JOGAR TABLETE", imagem: require("../../../assets/images/toysGames/jogarTablete.png") },
  { nome: "JOGO DA ARGOLA", imagem: require("../../../assets/images/toysGames/jogoArgola.png") },
  { nome: "LABIRINTO", imagem: require("../../../assets/images/toysGames/labirinto.png") },
  { nome: "PÁ", imagem: require("../../../assets/images/toysGames/pa.png") },
  { nome: "PAC-MAN", imagem: require("../../../assets/images/toysGames/pacMan.png") },
  { nome: "PARQUE INFANTIL", imagem: require("../../../assets/images/toysGames/parqueInfantil.png") },
  { nome: "PATINS", imagem: require("../../../assets/images/toysGames/patins.png") },
  { nome: "PEBOLIM", imagem: require("../../../assets/images/toysGames/pebolim.png") },
  { nome: "PEÇAS DE LEGO", imagem: require("../../../assets/images/toysGames/pecasLego.png") },
  { nome: "PIPA", imagem: require("../../../assets/images/toysGames/pipa.png") },
  { nome: "PISCINA", imagem: require("../../../assets/images/toysGames/piscina.png") },
  { nome: "PISCINA DE ÁGUA", imagem: require("../../../assets/images/toysGames/piscinaAgua.png") },
  { nome: "PULAR CORDA", imagem: require("../../../assets/images/toysGames/pularCorda.png") },
  { nome: "QUEBRA-CABEÇA", imagem: require("../../../assets/images/toysGames/quebraCabeca.png") },
  { nome: "RASTELO", imagem: require("../../../assets/images/toysGames/rastelo.png") },
  { nome: "SACO DE BRINQUEDOS", imagem: require("../../../assets/images/toysGames/sacoBrinquedo.png") },
  { nome: "SKATE", imagem: require("../../../assets/images/toysGames/skate.png") },
  { nome: "TETRIS", imagem: require("../../../assets/images/toysGames/tetris.png") },
  { nome: "TIROLESA", imagem: require("../../../assets/images/toysGames/tirolesa.png") },
  { nome: "TRICICLO", imagem: require("../../../assets/images/toysGames/triciclo.png") },
  { nome: "URSO", imagem: require("../../../assets/images/toysGames/urso.png") },
  { nome: "XADREZ", imagem: require("../../../assets/images/toysGames/xadrez.png") },
];

export default function JogosBrinquedos() {
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
        data={brinquedos}
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