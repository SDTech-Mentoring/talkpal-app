// talkPal/app/(tabs)/index.tsx
// talkPal/app/(tabs)/index.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import FraseBarra from '@/components/FraseBarra';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Barra de frase no topo */}
      <FraseBarra />

      {/* Conteúdo central da tela */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo ao TalkPal!</Text>

        {/* Botão que navega para ações */}
        <TouchableOpacity
        onPress={() => router.push('/(tabs)/categories')}
         style={styles.button}  // aqui era btnQuadrinhos
         activeOpacity={0.7}
>
  <Text style={styles.buttonText}>ENTRAR</Text>
</TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // Adicione para sombra funcionar no iOS
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 4,  // aumente para sombra mais visível no Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
