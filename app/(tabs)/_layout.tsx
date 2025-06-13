// talkPal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx
// talkpal/app/(tabs)/_layout.tsx
// talkPal/app/(tabs)/_layout.tsx


import React from 'react';
import { enableScreens } from 'react-native-screens';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View, StyleSheet, Platform, StatusBar } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

enableScreens(); // chamar aqui, após as importações

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function CustomHeader({ color }: { color: string }) {
  const isAndroid = Platform.OS === 'android';

  return (
    <View
      style={[
        styles.safeAreaHeader,
        isAndroid && { paddingTop: StatusBar.currentHeight ?? 0 },
      ]}
    >
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
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaHeader: {
    backgroundColor: '#4CAF50',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  center: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: () => <CustomHeader color={Colors[colorScheme ?? 'light'].text} />,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color }) => <TabBarIcon name="th-large" color={color} />,
        }}
      />

      <Tabs.Screen
        name="dessert/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />


      <Tabs.Screen
        name="feelings/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
         <Tabs.Screen
        name="houseRoutine/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
         <Tabs.Screen
        name="places/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
       <Tabs.Screen
        name="toysGames/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
      <Tabs.Screen
        name="school/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
      <Tabs.Screen
        name="foods/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />
      <Tabs.Screen
        name="acoes/index"
        options={{
          headerShown: false,
          tabBarButton: () => null, //  Esconde o botão da tab
        }}
      />





    </Tabs>


  );
}
