// app/modal.tsx
// talkpal/app/modal.tsx
import { useRouter } from 'expo-router';
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone da seta "Voltar"

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão personalizado de voltar */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4CAF50" />
        <Text style={styles.backText}>Voltar</Text>
      </Pressable>

      <Text style={styles.title}>Bem-vindo ao TalkPal!</Text>

      <Text style={styles.text}>
        O TalkPal é um aplicativo criado especialmente para pessoas autistas não verbais que se comunicam melhor por imagens.
        Ele é voltado para crianças, jovens e adultos que enfrentam desafios na fala, oferecendo uma forma simples e eficaz de se expressar no dia a dia.
      </Text>

      <Text style={styles.text}>
        O aplicativo funciona como uma prancha de comunicação digital. Através de cartões com imagens e palavras, o usuário pode demonstrar o que está sentindo, o que deseja fazer, ou o que precisa — como comer, brincar, ir ao banheiro, ou pedir ajuda.
      </Text>

      <Text style={styles.text}>
        Pais, professores e profissionais da educação especial podem utilizar o TalkPal como uma ferramenta de apoio no ambiente escolar, em casa ou em terapias. Basta selecionar as categorias e permitir que o usuário escolha os cartões de forma visual e intuitiva.
      </Text>

      <Text style={styles.text}>
        O objetivo do TalkPal é promover a inclusão e facilitar a comunicação, respeitando o tempo e o modo de cada pessoa se expressar.
      </Text>

      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Fechar Modal</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#4CAF50',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

