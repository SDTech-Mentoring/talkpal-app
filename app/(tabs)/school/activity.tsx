//talkpal/app/(tabs)/school/activity.tsx
// talkpal/app/(tabs)/school/activity.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import BackToSchoolButton from '@/components/BackToSchoolButton';//1. Importação do botão reutilizável

const activities = [
  { nome: 'ÁGUA', imagem: require('@/assets/images/schoolActivity/agua.png') },
  { nome: 'AJUDA', imagem: require('@/assets/images/schoolActivity/ajuda.png') },
  { nome: 'AMASSAR', imagem: require('@/assets/images/schoolActivity/amassar.png') },
  { nome: 'AMIGOS', imagem: require('@/assets/images/schoolActivity/amigos.png') },
  { nome: 'ASSISTIR AULA', imagem: require('@/assets/images/schoolActivity/assistirAula.png') },
  { nome: 'ATIVIDADES MANUAIS', imagem: require('@/assets/images/schoolActivity/atividadesManuais.png')},
  { nome: 'CARRO ESCOLAR', imagem: require('@/assets/images/schoolActivity/carroEscolar.png') },
  { nome: 'COLAR', imagem: require('@/assets/images/schoolActivity/colar.png') },
  { nome: 'ESCREVER', imagem: require('@/assets/images/schoolActivity/escrever.png') },
  { nome: 'ESPORTE', imagem: require('@/assets/images/schoolActivity/esporte.png') },
  { nome: 'GUARDAR MATERIAL', imagem: require('@/assets/images/schoolActivity/guardarMaterial.png') },
  { nome: 'JOGAR NO LIXO', imagem: require('@/assets/images/schoolActivity/jogarNoLixo.png') },
  { nome: 'LER', imagem: require('@/assets/images/schoolActivity/ler.png') },
  { nome: 'PINTAR', imagem: require('@/assets/images/schoolActivity/pintar.png') },
  { nome: 'RECORTAR', imagem: require('@/assets/images/schoolActivity/recortar.png') },
  { nome: 'RASGAR', imagem: require('@/assets/images/schoolActivity/rasgar.png') },
  { nome: 'REUNIÃO PROFESSOR', imagem: require('@/assets/images/schoolActivity/reuniaoProfessor.png') },
  { nome: 'TIRAR MATERIAL', imagem: require('@/assets/images/schoolActivity/tirarMaterial.png') },



];


const ActivityScreen = () => {
  const { addWord } = usePhraseStore();

  const handlePress = (nome: string) => {
    Speech.speak(nome, { language: 'pt-BR' });
    addWord(nome);
  };

  return (
    <View style={styles.container}>
      <FraseBarra />
      <BackToSchoolButton /> {/* 2. Botão adicionado para voltar à tela /school */}
      <Text style={styles.titulo}>ATIVIDADE ESCOLAR</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {activities.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(item.nome)}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;

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
