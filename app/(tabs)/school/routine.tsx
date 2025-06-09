//talkpal/app/(tabs)/school/routine.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import BackToSchoolButton from '@/components/BackToSchoolButton';//1. Importação do botão reutilizável

const routineItems = [
  { nome: 'AULA DE CIÊNCIAS SOCIAIS', imagem: require('@/assets/images/schoolRoutine/aulaDeCienciasSociais.png') },
  { nome: 'AULA DE EDUCAÇÃO FÍSICA', imagem: require('@/assets/images/schoolRoutine/aulaDeEducacaoFisica.png') },
  { nome: 'AULA DE LINGUA PORTUGUESA', imagem: require('@/assets/images/schoolRoutine/aulaDeLinguaPortuguesa.png') },
  { nome: 'AULA DE MATEMÁTICA', imagem: require('@/assets/images/schoolRoutine/aulaDeMatematica.png') },
  { nome: 'AULA DE TRABALHOS MANUAIS', imagem: require('@/assets/images/schoolRoutine/aulaDeTrabalhosManuais.png') },
  { nome: 'AULA DE LEITURAS', imagem: require('@/assets/images/schoolRoutine/aulaLeitura.png') },
  { nome: 'AULA DE MÚSICA', imagem: require('@/assets/images/schoolRoutine/aulaMusica.png') },
  { nome: 'ENTRADA', imagem: require('@/assets/images/schoolRoutine/entrada.png') },
  { nome: 'SAÍDA', imagem: require('@/assets/images/schoolRoutine/sairEscola.png') },
   { nome: 'AULA DE TECNOLOGIA', imagem: require('@/assets/images/schoolRoutine/tecnologia.png') },

];

const RoutineScreen = () => {
  const { addWord } = usePhraseStore();

  const handlePress = (nome: string) => {
    Speech.speak(nome, { language: 'pt-BR' });
    addWord(nome);
  };

  return (
    <View style={styles.container}>
      <FraseBarra />
      <BackToSchoolButton />{/* 2. Botão adicionado para voltar à tela /school */}

      <Text style={styles.titulo}>ROTINA ESCOLAR</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {routineItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(item.nome)}>
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RoutineScreen;

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
