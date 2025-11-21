import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Switch,
  Platform,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  background: '#000000',
  gold: '#D4AF37',
  white: '#FFFFFF',
  iconBg: '#967A3A', // Fundo dos ícones redondos
};

// Componente para cada item da lista
const SettingItem = ({ icon, title, subtitle, isSwitch, onToggle, value, hasArrow = true }: any) => (
  <TouchableOpacity 
    style={styles.itemContainer} 
    activeOpacity={isSwitch ? 1 : 0.7} 
    onPress={isSwitch ? onToggle : undefined}
  >
    {/* Ícone Redondo */}
    <View style={styles.iconContainer}>
      {icon}
    </View>

    {/* Textos */}
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
    </View>

    {/* Lado Direito (Switch ou Seta) */}
    <View style={styles.rightContainer}>
      {isSwitch ? (
        <Switch
          trackColor={{ false: "#767577", true: COLORS.gold }}
          thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggle}
          value={value}
        />
      ) : (
        hasArrow && <Ionicons name="chevron-forward" size={24} color={COLORS.gold} />
      )}
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* --- CABEÇALHO --- */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color={COLORS.gold} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>PROFILE</Text>
          <View style={{ width: 28 }} /> 
        </View>

        <View style={styles.content}>
          
          {/* Item: LOGIN */}
          <SettingItem 
            title="LOGIN"
            icon={<Ionicons name="person-outline" size={20} color={COLORS.gold} />} 
          />

          {/* Título da Seção */}
          <Text style={styles.sectionHeader}>GENERAL SETTINGS</Text>

          {/* Lista de Configurações */}
          <SettingItem 
            title="MODE"
            subtitle="Dark & Light"
            isSwitch
            value={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
            icon={<Ionicons name="settings-outline" size={20} color={COLORS.gold} />}
          />

          <SettingItem 
            title="LANGUAGE"
            icon={<Ionicons name="globe-outline" size={20} color={COLORS.gold} />}
          />

          <SettingItem 
            title="ABOUT"
            icon={<Ionicons name="help-circle-outline" size={22} color={COLORS.gold} />}
          />

          <SettingItem 
            title="TERMS & CONDITIONS"
            icon={<Ionicons name="alert-circle-outline" size={22} color={COLORS.gold} />}
          />

          <SettingItem 
            title="PRIVACY POLICY"
            icon={<Ionicons name="lock-closed-outline" size={20} color={COLORS.gold} />}
          />

          <SettingItem 
            title="RATE THIS APP"
            icon={<Ionicons name="star-outline" size={20} color={COLORS.gold} />}
          />

          <SettingItem 
            title="SHARE THIS APP"
            icon={<Ionicons name="share-social-outline" size={20} color={COLORS.gold} />}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    color: COLORS.white, // ALTERADO PARA BRANCO
    marginTop: 25,
    marginBottom: 15,
    fontSize: 14,
    letterSpacing: 1,
  },
  // Estilos do Item
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: COLORS.iconBg, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    color: COLORS.white, // ALTERADO PARA BRANCO
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
  },
  itemSubtitle: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 2,
  },
  rightContainer: {
    marginLeft: 10,
  },
});