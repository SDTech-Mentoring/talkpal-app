// components/BackButton.tsx
//  Componente genérico de botão voltar reutilizável

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
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
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>← VOLTAR</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
