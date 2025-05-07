import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

type Acao = {
  nome: string;
  imagem: any;
};



const acoes: Acao[] = [
  { nome: 'AMASSAR', imagem: require('../../assets/images/action/amassar.png') },
  { nome: 'ANDAR', imagem: require('../../assets/images/action/andar.png') },
  { nome: 'APERTAR a MÃO', imagem: require('../../assets/images/action/apertarAMao.png') },
  { nome: 'TOMAR ÁGUA', imagem: require('../../assets/images/action/beber.png') },
  { nome: 'BEIJAR', imagem: require('../../assets/images/action/beijar.png') },
  { nome: 'CANTAR', imagem: require('../../assets/images/action/cantar.png') },
  { nome: 'CHAMAR', imagem: require('../../assets/images/action/chamar.png') },
  { nome: 'COLAR', imagem: require('../../assets/images/action/colar.png') },
  { nome: 'COMER', imagem: require('../../assets/images/action/comer.png') },
  { nome: 'CONTAR', imagem: require('../../assets/images/action/contar.png') },
  { nome: 'CORRER', imagem: require('../../assets/images/action/correr.png') },
  { nome: 'DESENHAR', imagem: require('../../assets/images/action/desenhar.png') },
  { nome: 'ESCREVER', imagem: require('../../assets/images/action/escrever.png') },
  { nome: 'ESTUDAR', imagem: require('../../assets/images/action/estudar.png') },
  { nome: 'GUARDAR', imagem: require('../../assets/images/action/guardar.png') },
  { nome: 'LER', imagem: require('../../assets/images/action/ler.png') },
  { nome: 'LEVANTAR', imagem: require('../../assets/images/action/levantar.png') },
  { nome: 'NADAR', imagem: require('../../assets/images/action/nadar.png') },
  { nome: 'NÃO QUERO', imagem: require('../../assets/images/action/naoquero.png') },
  { nome: 'OUVIR', imagem: require('../../assets/images/action/ouvir.png') },
  { nome: 'PEGAR', imagem: require('../../assets/images/action/pegar.png') },
  { nome: 'PINTAR', imagem: require('../../assets/images/action/pintar.png') },
  { nome: 'PINTAR À MÃO', imagem: require('../../assets/images/action/pintarMao.png') },
  { nome: 'QUERO', imagem: require('../../assets/images/action/quero.png') },
  { nome: 'QUERO MAIS', imagem: require('../../assets/images/action/queromais.png') },
  { nome: 'RASGAR', imagem: require('../../assets/images/action/rasgar.png') },
  { nome: 'RECORTAR', imagem: require('../../assets/images/action/recortar.png') },
  { nome: 'SENTAR', imagem: require('../../assets/images/action/sentar.png') },
  { nome: 'SORRIR', imagem: require('../../assets/images/action/sorrir.png') },
  { nome: 'VER', imagem: require('../../assets/images/action/ver.png') }



  // Adicione outras ações aqui depois
];

export default function Acoes() {
  const falarTexto = (texto: string) => {
    if (typeof texto === 'string') {
      Speech.speak(texto, {
        language: 'pt-BR',
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  return (


    <View style={styles.container}>
      <FlatList
        data={acoes}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => falarTexto(item.nome)}
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
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 120, height: 120, resizeMode: 'contain' },
  text: { marginTop: 8, fontSize: 18 },
});
