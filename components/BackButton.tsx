// components/BackButton.tsx
//  Componente genérico de botão voltar reutilizável

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, LinkProps } from 'expo-router'; // <-- importado Router aqui


// Alterado o tipo da prop destino para corresponder aos caminhos válidos
interface BackButtonProps {
   destino?: LinkProps['href'];  // Tipo esperado pelo router.push
}


const BackButton: React.FC<BackButtonProps> = ({ destino = '/categories' }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(destino);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>⬅ VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2', // ✅ Cinza igual ao fundo dos cards
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 20, // 🔼 Texto maior
    color: '#007AFF', // Azul iOS
    fontWeight: 'bold',
  },
});