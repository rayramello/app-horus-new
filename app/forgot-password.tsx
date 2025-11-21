import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router'; // Importe o Link para navegação

// --- Definição das Cores ---
const GOLD_COLOR = '#D4AF37';
const LIGHT_TEXT = '#EAEAEA';
const SECONDARY_TEXT = '#AAA';
const DARK_BG = '#000000';
const INPUT_BG = '#1A1A1A';
const INPUT_PLACEHOLDER = '#888';
const BUTTON_BG = '#FFFFFF';
const BUTTON_TEXT = '#000000';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Usamos 'contentContainer' para centralizar o conteúdo principal */}
        <View style={styles.contentContainer}>
          {/* --- Logo --- */}
          <Image
            // source={require('../../assets/logo-horus.png')}
            style={styles.logo}
          />

          {/* --- Textos de Título --- */}
          <Text style={styles.preTitle}>OH, NÃO!</Text>
          <Text style={styles.title}>EU ESQUECI</Text>
          <Text style={styles.subtitle}>
            Enter your email or username and we'll send you a link to change a new
            password
          </Text>

          {/* --- Formulário --- */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username or Email"
              placeholderTextColor={INPUT_PLACEHOLDER}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* --- Botão de Ação --- */}
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>FORGOT PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Rodapé fixo na parte inferior --- */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          {/* Link para a tela de cadastro que já criamos */}
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLinkText}>INSCREVA-SE</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
  },
  scrollContainer: {
    flexGrow: 1, // Garante que o scroll ocupe a altura
    justifyContent: 'space-between', // Empurra o rodapé para baixo
  },
  contentContainer: {
    flex: 1, // Faz o conteúdo principal tentar crescer
    justifyContent: 'center', // Centraliza o bloco de login/logo
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24, // Espaço antes do rodapé
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 24,
    backgroundColor: '#333', // Placeholder
  },
  preTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: LIGHT_TEXT,
    textAlign: 'left',
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: LIGHT_TEXT,
    textAlign: 'left',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: SECONDARY_TEXT,
    textAlign: 'left',
    marginBottom: 32,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: INPUT_BG,
    color: LIGHT_TEXT,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 24, // Mais espaço antes do botão
    borderWidth: 1,
    borderColor: '#222',
  },
  actionButton: {
    backgroundColor: BUTTON_BG,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  actionButtonText: {
    color: BUTTON_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    color: SECONDARY_TEXT,
    fontSize: 14,
  },
  footerLinkText: {
    color: GOLD_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
