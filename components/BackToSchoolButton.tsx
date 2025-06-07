import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const BackToSchoolButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/school'); // Volta para a página /school
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleBack}>
      <Text style={styles.text}>← VOLTAR ESCOLA</Text>
    </TouchableOpacity>
  );
};

export default BackToSchoolButton;

const styles = StyleSheet.create({


  // Adicione aqui os estilos do botão voltar:
  button: {
    marginLeft: 15,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },

  // titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  // scroll: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   paddingBottom: 20,
  // },
  // card: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: '#f2f2f2',
  //   margin: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   padding: 10,
  // },
  // image: { width: 80, height: 80, resizeMode: 'contain' },
  // label: { marginTop: 8, fontSize: 14, textAlign: 'center' },
});