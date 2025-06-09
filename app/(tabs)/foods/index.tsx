// talkPal/app/foods/index.tsx

import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { alimentos } from './foodsData';
import { usePhraseStore } from '../../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra'; // ✅ Importando a barra com Falar e Apagar

const FoodsScreen: React.FC = () => {
  const { addWord } = usePhraseStore();

  const falar = (texto: string) => {
    Speech.speak(texto, {
      language: 'pt-BR',
      rate: 1.0,
      pitch: 1.0,
    });
  };

  return (
    <View style={styles.container}>
      {/* ✅ Barra de Frase com Falar e Apagar */}
      <FraseBarra />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {alimentos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              addWord(item.nome);
              falar(item.nome);
            }}
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
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 120,
    height: 140,
    backgroundColor: '#f0f0f0',
    margin: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
  },
});
