import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity,}
from "react-native";
import * as Speech from "expo-speech";
import FraseBarra from "@/components/FraseBarra";
import { usePhraseStore } from "../../../store/phraseStore";
import { useRouter } from "expo-router";

type Sentimento = {
  nome: string;
  imagem: any;
};

const sentimentos: Sentimento[] = [
  {
    nome: "ABORRECIDO",
    imagem: require("../../../assets/images/feeling/aborrecido.png"),
  },
  {
    nome: "AJUDA",
    imagem: require("../../../assets/images/feeling/ajuda.png"),
  },
  {
    nome: "ALEGRE",
    imagem: require("../../../assets/images/feeling/alegre.png"),
  },
  {
    nome: "CALOR",
    imagem: require("../../../assets/images/feeling/calor2.png"),
  },
   {
    nome: "CANSADO",
    imagem: require("../../../assets/images/feeling/cansado.png"),
  },
   {
    nome: "CHORANDO",
    imagem: require("../../../assets/images/feeling/chorando.png"),
  },
   {
    nome: "CONFUSO",
    imagem: require("../../../assets/images/feeling/confuso.png"),
  },
   {
    nome: "CONTENTE",
    imagem: require("../../../assets/images/feeling/contente(2).png"),
  },
   {
    nome: "ENJOADO",
    imagem: require("../../../assets/images/feeling/enjoado.png"),
  },
   {
    nome: "ENVERGONHADO",
    imagem: require("../../../assets/images/feeling/envergonhado.png"),
  },
   {
    nome: "FRIO",
    imagem: require("../../../assets/images/feeling/frio.png"),
  },
   {
    nome: "NERVOSO",
    imagem: require("../../../assets/images/feeling/nervoso.png"),
  },
   {
    nome: "PRECISO DE AJUDA",
    imagem: require("../../../assets/images/feeling/precisoAjuda.png"),
  },
   {
    nome: "SURPRESSO",
    imagem: require("../../../assets/images/feeling/surpreso.png"),
  },

   {
    nome: "TRISTE",
    imagem: require("../../../assets/images/feeling/triste.png"),
  },

  // Adicione mais sentimentos aqui
];

export default function Sentimentos() {
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
        data={sentimentos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              falarTexto(item.nome);
              addWord(item.nome);
              setTimeout(() => {
                router.push("/categories"); // volta para categorias após 1 segundo
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
