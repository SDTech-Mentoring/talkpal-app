// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx
import React, { useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme as _useColorScheme } from "react-native";
import { FraseProvider } from "../_context/FraseContext";
import { AuthProvider, useAuth } from "../_context/AuthContext";

SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  const { user, loading } = useAuth();
  const router = useRouter();
    console.log("User:", user, "Loading:", loading);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user, loading]);

  if (loading) return null; // mostra Splash até terminar

  return <Slot />;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const colorScheme = _useColorScheme() ?? "light";

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontError) throw fontError;
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <FraseProvider>
        <AuthProvider>
          <RootLayoutInner />
        </AuthProvider>
      </FraseProvider>
    </ThemeProvider>
  );
}
