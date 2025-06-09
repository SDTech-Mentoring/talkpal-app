// talkPal/app/(tabs)/index.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FraseBarra from '@/components/FraseBarra';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Barra de frase no topo */}
      <FraseBarra />

      {/* Conteúdo central da tela */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao TalkPal!</Text>

        {/* Botão que navega para ações */}
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/categories')}
          style={{
            backgroundColor: '#4CAF50',
            padding: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>IR PARA CATEGORIAS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
