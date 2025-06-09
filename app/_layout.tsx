// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import { FraseProvider } from './context/FraseContext'; // ✅ Contexto

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// Impede a splash screen de sumir automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // ✅ Provider do contexto da frase
  return (
    <FraseProvider>
      <RootLayoutNav />
    </FraseProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Página principal com abas ocultando o cabeçalho */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Página modal com botão de voltar e sem título "modal" */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerShown: true,
            headerBackTitle: 'Voltar', // ✅ texto ao lado da seta
            title: '', // ✅ remove a palavra "modal"
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
