//talkpal/app/(tabs)/school/space.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';

const spaceItems = [
  { nome: 'BANHEIRO', imagem: require('@/assets/images/schoolSpace/banheiro.png') },
  { nome: 'BANHEIRO MENINAS', imagem: require('@/assets/images/schoolSpace/banheiroMeninas.png') },
  { nome: 'BANHEIRO MENINOS', imagem: require('@/assets/images/schoolSpace/banheiroMeninos.png') },
  { nome: 'BANHEIRO ', imagem: require('@/assets/images/schoolSpace/banheiroParaDeficientes.png') },
  { nome: 'BIBLIOTECA', imagem: require('@/assets/images/schoolSpace/biblioteca.png') },
  { nome: 'QUADRA', imagem: require('@/assets/images/schoolSpace/quadra.png') },
  { nome: 'REFEITORIO', imagem: require('@/assets/images/schoolSpace/refeitorio.png') },
  { nome: 'SALA DE AULA', imagem: require('@/assets/images/schoolSpace/salaDeAula.png') },
  { nome: 'SALA DOS PROFESSORES', imagem: require('@/assets/images/schoolSpace/salaDosProfessores.png') },
];

const SpaceScreen = () => {
  const { addWord } = usePhraseStore();

  const handlePress = (nome: string) => {
    Speech.speak(nome, { language: 'pt-BR' });
    addWord(nome);
  };

  return (
    <View style={styles.container}>
      <FraseBarra />
      <Text style={styles.titulo}>ESPAÇOS DA ESCOLA</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {spaceItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(item.nome)}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SpaceScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#f2f2f2',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  image: { width: 80, height: 80, resizeMode: 'contain' },
  label: { marginTop: 8, fontSize: 14, textAlign: 'center' },
});
