import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Paleta de cores baseada na imagem
const COLORS = {
  background: '#000000',
  gold: '#D4AF37',
  inputBg: '#967A3A', // Um dourado mais escuro/amarronzado para a caixa de texto
  white: '#FFFFFF',
  textPlaceholder: '#E0E0E0'
};

export default function CreatePostScreen() {
  const router = useRouter();
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* --- CABEÇALHO PERSONALIZADO --- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={COLORS.gold} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>POSTAGEM</Text>
        
        {/* View vazia para equilibrar o layout e deixar o título centralizado */}
        <View style={{ width: 28 }} />
      </View>

      {/* Linha Dourada abaixo do cabeçalho */}
      <View style={styles.separator} />

      {/* --- ÁREA DE CONTEÚDO --- */}
      <View style={styles.content}>
        
        {/* Caixa de Texto Grande */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="What do you want to tell to everyone?"
            placeholderTextColor={COLORS.textPlaceholder}
            multiline
            textAlignVertical="top" // Importante para o texto começar em cima no Android
            value={text}
            onChangeText={setText}
          />
        </View>

        {/* --- BARRA DE AÇÕES --- */}
        <View style={styles.actionRow}>
          {/* Ícones (Câmera e Localização) */}
          <View style={styles.iconGroup}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="camera-outline" size={28} color={COLORS.white} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="location-outline" size={28} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Botões (Post e Rascunho) */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Post</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Rascunho</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 30 : 0, // Ajuste para barra de status no Android
  },
  // Estilos do Cabeçalho
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: 'bold', // Tentei simular a fonte serifada da imagem
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif', // Tenta usar uma fonte serifada se disponível
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gold,
    marginHorizontal: 0,
    opacity: 0.5,
  },
  // Conteúdo Principal
  content: {
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 15,
    height: 300, // Altura fixa para parecer o "quadrado" da imagem
    padding: 15,
    marginBottom: 30,
  },
  textInput: {
    color: COLORS.white,
    fontSize: 16,
    flex: 1, // Ocupa todo o espaço do container
  },
  // Barra de botões
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 15, // Espaço entre os ícones
  },
  iconButton: {
    padding: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});