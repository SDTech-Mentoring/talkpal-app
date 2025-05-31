//talkpal/app/(tabs)/school/index.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';

const schoolOptions = [
  {
    nome: 'MATERIAL ESCOLAR',
    imagem: require('@/assets/images/schoolParts/supplies.png'),
    rota: 'school/supplies',
  },
  {
    nome: 'ROTINA ESCOLAR',
    imagem: require('@/assets/images/schoolParts/routine.png'),
    rota: 'school/routine',
  },
  {
    nome: 'ESPAÇO ESCOLAR',
    imagem: require('@/assets/images/schoolParts/space.png'),
    rota: 'school/space',
  },
  {
    nome: 'ATIVIDADE ESCOLAR',
    imagem: require('@/assets/images/schoolParts/activity.png'),
    rota: 'school/activity',
  },
];

const SchoolScreen = () => {
  const router = useRouter();
  const { addWord } = usePhraseStore();

  const handlePress = (nome: string, rota: string) => {

    Speech.speak(nome, { language: 'pt-BR' });
    setTimeout(() => {
      router.push(rota);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FraseBarra />

      <Text style={styles.titulo}>ESCOLA</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {schoolOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(item.nome, item.rota)}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SchoolScreen;

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
