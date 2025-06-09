//talkpal/app/(tabs)/categories.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import { useRouter} from 'expo-router';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra'; // ✅ Importado

interface Categoria {
  nome: string;
  imagem: any;
}

// Definindo as rotas válidas do app
type Routes =
  | '/acoes'
  | '/foods'
  | '/school'
  | '/sentimentos'
  | '/feelings'
  | '/'
  | '/categories'
  | '/toysGames' // ✅ Incluír essa rota
  | '/places/'
  | 'houseRoutine'
  |'/dessert';


const categorias: Categoria[] = [
  { nome: 'EU', imagem: require('../../assets/images/category/eu.png') },
  { nome: 'EU', imagem: require('../../assets/images/category/eu_um.png') },
  { nome: 'AÇÕES', imagem: require('../../assets/images/category/acoes.png') },
  { nome: 'ALIMENTOS', imagem: require('../../assets/images/category/alimentos.png') },
  { nome: 'ESCOLA', imagem: require('../../assets/images/category/escola.png') },
  { nome: 'JOGOS e BRINQUEDOS', imagem: require('../../assets/images/category/jogos_brinquedos.png') },
  { nome: 'LUGARES', imagem: require('../../assets/images/category/lugares.png') },
  { nome: 'ROTINAS CASA', imagem: require('../../assets/images/category/rotinasCasa.png') },
  { nome: 'SENTIMENTOS', imagem: require('../../assets/images/category/sentimentos.png') },
  { nome: 'SOBREMESA', imagem: require('../../assets/images/category/sobremesa.png') },
];

const CategoriesScreen: React.FC = () => {
  const router = useRouter();
  const { addWord, phrase } = usePhraseStore();

  const falarTexto = (texto: string) => {
    if (typeof texto === 'string') {
      Speech.speak(texto, {
        language: 'pt-BR',
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  const handleCategoryClick = (catNome: string, nextRoute: string) => {
    if (catNome === 'EU') {
      addWord(catNome);
    }
    falarTexto(catNome);
    setTimeout(() => {
      router.push(nextRoute as any)    ;
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* ✅ Frase completa com botão de falar e apagar */}
      <FraseBarra />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categorias.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              if (cat.nome === 'AÇÕES') {
                handleCategoryClick(cat.nome, '/acoes');
              } else if (cat.nome === 'ALIMENTOS') {
                handleCategoryClick(cat.nome, '/foods');
              } else if (cat.nome === 'ESCOLA'){
                handleCategoryClick(cat.nome, '/school')
              } else if (cat.nome === 'SENTIMENTOS') {
                handleCategoryClick(cat.nome, '/feelings');
              } else if(cat.nome==='JOGOS e BRINQUEDOS'){
                handleCategoryClick(cat.nome, '/toysGames'); // ✅ Aqui está o bloco que você pediu
              }else if(cat.nome==='LUGARES'){
              handleCategoryClick(cat.nome,'/places/');
              } else if(cat.nome==='ROTINAS CASA'){
                handleCategoryClick(cat.nome,'/houseRoutine');
              } else if(cat.nome==='SOBREMESA'){
                handleCategoryClick(cat.nome,'/dessert');
              }else if (cat.nome === 'EU') {
                addWord(cat.nome);
                falarTexto(cat.nome);
              } else {
              handleCategoryClick(cat.nome, '/'); // Caminho relativo, ideal no seu caso
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
