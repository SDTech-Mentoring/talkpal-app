import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Usar expo-router para navegação

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao ARI!</Text>
      <TouchableOpacity
        onPress={() => router.push('/acoes')} // Navegar para a tela de Ações
        style={{
          backgroundColor: '#4CAF50',
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Ir para Ações</Text>
      </TouchableOpacity>
    </View>
  );
}
