// talkPal/app/foods/index.tsx
import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router'; // usar useRouter do expo-router
import { alimentos } from '../../../data/_foodsData';
import { usePhraseStore } from '../../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import BackButton from '../../../components/BackButton';

const FoodsScreen: React.FC = () => {
  const { addWord } = usePhraseStore();
  const router = useRouter(); // router do expo-router

  const handlePress = (item: { nome: string }) => {
    addWord(item.nome);
    Speech.speak(item.nome, { language: 'pt-BR', rate: 1.0, pitch: 1.0 });
// Espera 2 segundos (2000ms) antes de voltar para categories
    setTimeout(() => {
      router.push('/categories');
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <BackButton />
      <FraseBarra />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {alimentos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handlePress(item)}
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
