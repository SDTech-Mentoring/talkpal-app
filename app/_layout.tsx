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
  initialRouteName: 'auth/login',
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
        {/* Tela de login */}
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />

        {/* Página principal com abas */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Página modal */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerShown: true,
            headerBackTitle: 'Voltar',
            title: '',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
