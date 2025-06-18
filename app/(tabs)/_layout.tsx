// talkPal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx
// talkpal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx

// talkPal/app/(tabs)/_layout.tsx
import React from "react";
import { enableScreens } from "react-native-screens";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useSegments } from "expo-router";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ← ADICIONADO SafeAreaView
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import BackButton from "../../components/BackButton";

enableScreens();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function CustomHeader({ color }: { color: string }) {
  const isAndroid = Platform.OS === "android";
  const segments = useSegments();

  const rotasComBotaoVoltar = [
    "foods",
    "acoes",
    "toysGames",
    "places",
    "feelings",
    "dessert",
    "houseRoutine",
    "other",
  ];

  const showBackButton = segments.some((segment) =>
    rotasComBotaoVoltar.includes(segment)
  );

  return (
   <SafeAreaView // ← ALTERADO de View para SafeAreaView
      style={[
        styles.safeAreaHeader,
        isAndroid && { paddingTop: StatusBar.currentHeight ?? 0 },
      ]}
    >
      {showBackButton && <BackButton />}

      <View style={styles.header}>
        <Link href="/categories" asChild>
          <Pressable style={styles.left}>
            <FontAwesome name="home" size={24} color={color} />
            <Text style={[styles.title, { color }]}> Início</Text>
          </Pressable>
        </Link>

        <View style={styles.center} />

        <Link href="/modal" asChild>
          <Pressable style={styles.right}>
            {({ pressed }) => (
              <FontAwesome
                name="info-circle"
                size={28}
                color={color}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      </View>
   </SafeAreaView>);
}

const styles = StyleSheet.create({
  safeAreaHeader: {
    backgroundColor: "#4CAF50",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  center: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: { display: "none" }, // oculta tabs
        headerShown: route.name === "index", // header somente no index
        header:
          route.name === "index"
            ? () => <CustomHeader color={Colors[colorScheme ?? "light"].text} />
            : undefined,
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false, // garante header oculto aqui
        }}
      />
      <Tabs.Screen
        name="dessert"
        options={{
          href: null,
          headerShown: false, // também oculta header aqui
        }}
      />
    </Tabs>
  );
}


