import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

interface FoodItem {
  nome: string;
  imagem: any;
}

const alimentos: FoodItem[] = [
  { nome: 'ACELGA', imagem: require('../../assets/images/foods/acelga.png') },
  // { nome: 'Feijão', imagem: require('../../assets/images/foods/feijao.png') },
  // { nome: 'Fruta', imagem: require('../../assets/images/foods/fruta.png') },
  // { nome: 'Suco', imagem: require('../../assets/images/foods/suco.png') },
  // { nome: 'Pão', imagem: require('../../assets/images/foods/pao.png') },
  // { nome: 'Leite', imagem: require('../../assets/images/foods/leite.png') },
  // Adicione mais alimentos conforme necessário
];

const FoodsScreen: React.FC = () => {
  const falar = (texto: string) => {
    Speech.speak(texto, {
      language: 'pt-BR',
      rate: 1.0,
      pitch: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {alimentos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => falar(item.nome)}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#f2f2f2',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
