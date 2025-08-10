// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

// Se usar seu helper, mantenha, senão use do react-native
import { useColorScheme } from '@/components/useColorScheme'; // ou 'react-native'
import { FraseProvider } from './context/FraseContext'; // ajuste se necessário

// Importa apenas onAuthStateChanged e User do Firebase Auth
import { onAuthStateChanged, User } from "firebase/auth";
// Importa o auth já inicializado
import { auth } from "./lib/firebase";


export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

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

  return (
    <FraseProvider>
      <AuthGuardedNav />
    </FraseProvider>
  );
}

function AuthGuardedNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments() as string[];

  const [authLoaded, setAuthLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Usa o auth já inicializado do lib/firebase
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!authLoaded) return;

    const isLoggedIn = !!user;
    const isOnAuth =
      segments[0] === "auth" &&
      (segments[1] === "login" ||
        segments[1] === "register" ||
        segments.length === 1);

    if (!isLoggedIn && !isOnAuth) {
      router.replace("/auth/login");
      return;
    }

    if (isLoggedIn && isOnAuth) {
      router.replace("/(tabs)");
      return;
    }

  }, [authLoaded, user, segments, router]);

  if (!authLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
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
