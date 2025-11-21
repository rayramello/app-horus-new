import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// Cores do app
const GOLD_COLOR = '#D4AF37';
const DARK_BG = '#000000';
const INACTIVE_COLOR = '#666';

// Botão central customizado (Botão + Dourado)
const CustomTabButton = (props: any) => {
  const { children, onPress } = props;
  
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.customButton}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: DARK_BG,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: GOLD_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      }}
    >
      {/* 1. Tela HOME */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />

      {/* 2. Tela SEARCH (Busca) */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={26} color={color} />
          ),
        }}
      />

      {/* 3. Botão Central (CRIAR POST) */}
      <Tabs.Screen
        name="create-post"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add" size={32} color={DARK_BG} />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} />
          ),
        }}
      />

      {/* 4. Tela NOTIFICAÇÕES (NOVA) */}
      <Tabs.Screen
        name="notifications" // Certifique-se que criou o arquivo notifications.tsx
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={28} color={color} />
          ),
        }}
      />

      {/* 5. Tela PERFIL */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={26} color={color} />
          ),
        }}
      />

      {/* --- TELAS OCULTAS DA BARRA --- */}
      
      {/* Configurações (Settings) - Não aparece ícone, mas precisa estar registrado nas abas ou stack */}
      <Tabs.Screen
        name="settings"
        options={{
          href: null, // Esconde o ícone
          tabBarStyle: { display: 'none' } // Opcional: Esconde a barra quando estiver nas settings
        }}
      />

      {/* Index (Redirecionamento) */}
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: GOLD_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});