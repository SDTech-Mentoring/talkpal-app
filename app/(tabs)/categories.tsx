
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';

interface Categoria {
  nome: string;
  imagem: any;
}

const categorias: Categoria[] = [
  { nome: 'EU', imagem: require('../../assets/images/category/eu.png') },
  { nome: 'EU', imagem: require('../../assets/images/category/eu(1).png') },
  { nome: 'AÇÕES', imagem: require('../../assets/images/category/acoes.png') },
  { nome: 'ALIMENTOS', imagem: require('../../assets/images/category/alimentos.png') },
  { nome: 'ESCOLA', imagem: require('../../assets/images/category/escola.png') },
  { nome: 'JOGOS e BRINQUEDOS', imagem: require('../../assets/images/category/jogosBrinquedos.png') },
  { nome: 'LUGARES', imagem: require('../../assets/images/category/lugares.png') },
  { nome: 'ROTINAS CASA', imagem: require('../../assets/images/category/rotinasCasa.png') },
  { nome: 'SENTIMENTOS', imagem: require('../../assets/images/category/sentimentos.png') },
  { nome: 'SOBREMESA', imagem: require('../../assets/images/category/sobremesa.png') },
];

const CategoriesScreen: React.FC = () => {
  const router = useRouter();

  const falarTexto = (texto: string) => {
    if (typeof texto === 'string') {
      Speech.speak(texto, {
        language: 'pt-BR',
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categorias.map((cat, index) => (
         <TouchableOpacity
         key={index}
         style={styles.card}
         onPress={() => {
           if (cat.nome === 'AÇÕES') {
             falarTexto(cat.nome);
             setTimeout(() => {
               router.push('/acoes');
             }, 1000); // Aguarda 1 segundo antes de navegar
           } else if(cat.nome==='ALIMENTOS'){
            falarTexto(cat.nome);
            setTimeout(()=>{
              router.push('/foods');
            }, 1000);
           } else {
             falarTexto(cat.nome);
           }
         }}
          >
            <Image source={cat.imagem} style={styles.image} />
            <Text style={styles.label}>{cat.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#f2f2f2',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
