//talkpal/app/(tabs)/categories.tsx
// talkpal/app/(tabs)/categories.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';
import { usePhraseStore } from '../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import BackButton from '../../components/BackButton';

interface Categoria {
  nome: string;
  imagem: any;
}

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
  const { addWord } = usePhraseStore();

  const falarTexto = (texto: string) => {
    if (typeof texto === 'string') {
      Speech.speak(texto, {
        language: 'pt-BR',
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  const handleCategoryClick = (nome: string, nextRoute: string) => {
    if (nome === 'EU') {
      addWord(nome);
    }
    falarTexto(nome);
    setTimeout(() => {
      router.push(nextRoute as any);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <BackButton destino="/" />
      <FraseBarra />

      {/* ✅ FlatList no lugar do ScrollView */}
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // ✅ Garante 2 colunas
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              if (item.nome === 'AÇÕES') {
                handleCategoryClick(item.nome, '/acoes');
              } else if (item.nome === 'ALIMENTOS') {
                handleCategoryClick(item.nome, '/foods');
              } else if (item.nome === 'ESCOLA') {
                handleCategoryClick(item.nome, '/school');
              } else if (item.nome === 'SENTIMENTOS') {
                handleCategoryClick(item.nome, '/feelings');
              } else if (item.nome === 'JOGOS e BRINQUEDOS') {
                handleCategoryClick(item.nome, '/toysGames');
              } else if (item.nome === 'LUGARES') {
                handleCategoryClick(item.nome, '/places/');
              } else if (item.nome === 'ROTINAS CASA') {
                handleCategoryClick(item.nome, '/houseRoutine');
              } else if (item.nome === 'SOBREMESA') {
                handleCategoryClick(item.nome, '/dessert');
              } else if (item.nome === 'EU') {
                addWord(item.nome);
                falarTexto(item.nome);
              } else {
                handleCategoryClick(item.nome, '/');
              }
            }}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 20,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    maxWidth: '48%', // ✅ Ajuste fino para 2 colunas com margem
    height: 150,
    backgroundColor: '#f2f2f2',
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
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
  header: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginLeft: 8,
  },
});
