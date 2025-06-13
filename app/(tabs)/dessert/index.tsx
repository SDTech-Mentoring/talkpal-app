//talkpal/app/(tabs)/dessert/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import { usePhraseStore } from '../../../store/phraseStore';
import FraseBarra from '@/components/FraseBarra';
import { useRouter } from 'expo-router';  // Importa o useRouter para navegação

interface Item {
  nome: string;
  imagem: any;
}

const sobremesas: Item[] = [
  { nome: 'Alfajor de Amêndoas', imagem: require('@/assets/images/dessert/alfajorAmendoas.png') },
  { nome: 'Bala de Coco', imagem: require('@/assets/images/dessert/balaCoco.png') },
  { nome: 'Bolachas', imagem: require('@/assets/images/dessert/bolachas.png') },
  { nome: 'Bolachas de Chocolate', imagem: require('@/assets/images/dessert/bolachasChocolate.png') },
  { nome: 'Bolachas de Leite', imagem: require('@/assets/images/dessert/bolachasLeite.png') },
  { nome: 'Bolachas Oreo', imagem: require('@/assets/images/dessert/bolachasOreo.png') },
  { nome: 'Bolo', imagem: require('@/assets/images/dessert/bolo.png') },
  { nome: 'Bolo de Aniversário', imagem: require('@/assets/images/dessert/boloAniversario.png') },
  { nome: 'Bolo de Casamento', imagem: require('@/assets/images/dessert/boloCasamento.png') },
  { nome: 'Bolo de Cenoura', imagem: require('@/assets/images/dessert/boloCenoura.png') },
  { nome: 'Bolo de Chocolate', imagem: require('@/assets/images/dessert/boloChocolate.png') },
  { nome: 'Bolo com Creme', imagem: require('@/assets/images/dessert/boloCreme.png') },
  { nome: 'Bombons', imagem: require('@/assets/images/dessert/bombons.png') },
  { nome: 'Brigadeiro', imagem: require('@/assets/images/dessert/brigadeiro.png') },
  { nome: 'Caracol de Creme', imagem: require('@/assets/images/dessert/caracolCreme.png') },
  { nome: 'Casquinha', imagem: require('@/assets/images/dessert/casquinha.png') },
  { nome: 'Casquinha de Chocolate', imagem: require('@/assets/images/dessert/casquinhaDeChocolate.png') },
  { nome: 'Churros', imagem: require('@/assets/images/dessert/churros.png') },
  { nome: 'Doce de Leite', imagem: require('@/assets/images/dessert/doceLeite.png') },
  { nome: 'Donut', imagem: require('@/assets/images/dessert/donut.png') },
  { nome: 'Gelatina de Morango', imagem: require('@/assets/images/dessert/gelatinaMorango.png') },
  { nome: 'Merengue', imagem: require('@/assets/images/dessert/merengue.png') },
  { nome: 'Muffin de Baunilha', imagem: require('@/assets/images/dessert/muffinBaunilha.png') },
  { nome: 'Muffin de Chocolate', imagem: require('@/assets/images/dessert/muffinChocolate.png') },
  { nome: 'Panetone', imagem: require('@/assets/images/dessert/panetone.png') },
  { nome: 'Panqueca', imagem: require('@/assets/images/dessert/panqueca.png') },
  { nome: 'Pote de Sorvete', imagem: require('@/assets/images/dessert/poteSorvete.png') },
  { nome: 'Pudim de Chocolate', imagem: require('@/assets/images/dessert/pudimDeChocolate.png') },
  { nome: 'Pudim Flan', imagem: require('@/assets/images/dessert/pudinFlan.png') },
  { nome: 'Rosquinha', imagem: require('@/assets/images/dessert/rosquinha.png') },
  { nome: 'Torrão', imagem: require('@/assets/images/dessert/torrao.png') },
  { nome: 'Torta', imagem: require('@/assets/images/dessert/torta.png') },
  { nome: 'Torta de Chocolate', imagem: require('@/assets/images/dessert/tortaChocolate.png') },
  { nome: 'Torta com Creme', imagem: require('@/assets/images/dessert/tortaCreme.png') },
  { nome: 'Torta de Maçã', imagem: require('@/assets/images/dessert/tortaMaca.png') },
  { nome: 'Iogurte', imagem: require('@/assets/images/dessert/yogurte.png') },
];

const DessertScreen: React.FC = () => {
  const { addWord } = usePhraseStore();
  const router = useRouter(); // <-- adiciona essa linha aqui

  const falarTexto = (texto: string) => {
    if (typeof texto === 'string') {
      Speech.speak(texto, {
        language: 'pt-BR',
        rate: 1.0,
        pitch: 1.0,
      });
    }
  };

  const handleClick = (item: Item) => {
    addWord(item.nome);
    falarTexto(item.nome);
      // Delay de 2 segundos antes de navegar para categories
    setTimeout(() => {
      router.push('/categories');
    }, 2000);

  };
    // Função para voltar para categorias
  const handleVoltarCategorias = () => {
    router.push('/categories');
  };


  return (
    <View style={styles.container}>
       {/* Botão Voltar para Categorias */}
      <TouchableOpacity style={styles.voltarButton} onPress={handleVoltarCategorias}>
        <Text style={styles.voltarButtonText}>← VOLTAR</Text>
      </TouchableOpacity>


     <FraseBarra fraseVazia="🍰 ESCOLHA UMA FIGURA" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {sobremesas.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleClick(item)}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.label}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DessertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    voltarButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  voltarButtonText: {
  fontSize: 16,
  color: '#333',
  fontWeight: 'bold',
  textTransform: 'uppercase',
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
