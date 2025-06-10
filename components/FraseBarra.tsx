// talkPal/components/FraseBarra.tsx
// talkPal/components/FraseBarra.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { usePhraseStore } from '../store/phraseStore';
import * as Speech from 'expo-speech';

const FraseBarra = () => {
  const { phrase, clearPhrase } = usePhraseStore();

  const speakPhrase = () => {
    const phraseText = phrase.join(' ');
    Speech.speak(phraseText, { language: 'pt-BR' });
  };

  return (
  <View style={styles.container}>
    {phrase.length === 0 ? (
      <Text style={[styles.text, styles.placeholder]}>
        💬 ESCOLHA UM QUADRINHO
      </Text>
    ) : (
      <Text style={styles.text}>{phrase.join(' ')}</Text>
    )}

    <View style={styles.buttons}>
      <TouchableOpacity onPress={speakPhrase} style={styles.iconButton}>
        <Text style={styles.icon}>🔊</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={clearPhrase} style={styles.iconButton}>
        <Text style={styles.icon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  placeholder: {
    color: '#555',        // cor mais suave
    fontStyle: 'italic',  // itálico para destacar que é instrução
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    fontSize: 20,
  },
});


export default FraseBarra;
