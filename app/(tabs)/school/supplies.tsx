//talkpal/app/(tabs)/school/supplies.tsx


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import BackToSchoolButton from '@/components/BackToSchoolButton';//1. Importação do botão reutilizável


const suppliesItems = [
  { nome: 'APONTADOR', imagem: require('@/assets/images/schoolSupplies/apontador.png') },
  { nome: 'BORRACHA', imagem: require('@/assets/images/schoolSupplies/borracha.png') },
  { nome: 'CADERNO', imagem: require('@/assets/images/schoolSupplies/caderno.png') },
  { nome: 'CANETA', imagem: require('@/assets/images/schoolSupplies/caneta.png') },
  { nome: 'COLA', imagem: require('@/assets/images/schoolSupplies/cola.png') },
  { nome: 'COLA BASTÃO', imagem: require('@/assets/images/schoolSupplies/colaBastao.png') },
  { nome: 'GIZ DE CERA', imagem: require('@/assets/images/schoolSupplies/gizDeCera.png') },
  { nome: 'LÁPIS', imagem: require('@/assets/images/schoolSupplies/lapis.png') },
  { nome: 'LÁPIS COLORIDO', imagem: require('@/assets/images/schoolSupplies/lapisColorido.png') },
  { nome: 'LIVRO', imagem: require('@/assets/images/schoolSupplies/livro.png') },
  { nome: 'RÉGUA', imagem: require('@/assets/images/schoolSupplies/regua.png') },
  { nome: 'TESOURA', imagem: require('@/assets/images/schoolSupplies/tesoura.png') },



];

const SuppliesScreen = () => {
  const { addWord } = usePhraseStore();

  const handlePress = (nome: string) => {
    Speech.speak(nome, { language: 'pt-BR' });
    addWord(nome);
  };

  return (
    <View style={styles.container}>
      <FraseBarra />
      <BackToSchoolButton /> {/* 2. Botão adicionado para voltar à tela /school */}
      <Text style={styles.titulo}>MATERIAL ESCOLAR</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {suppliesItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(item.nome)}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuppliesScreen;

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
