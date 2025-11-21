import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // <--- IMPORTANTE

// Cores e Dimensões
const COLORS = {
  background: '#000000',
  gold: '#D4AF37',
  goldDark: '#967A3A',
  white: '#FFFFFF',
  grey: '#888',
};

const { width } = Dimensions.get('window');
const PHOTO_SIZE = (width - 30) / 3; 

export default function ProfileScreen() {
  const router = useRouter(); // <--- Ativando a navegação

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      
      {/* 1. DETALHE CURVO DO TOPO */}
      <View style={styles.topCurveContainer}>
         <View style={styles.topCurve} />
         
         {/* BOTÃO DE CONFIGURAÇÕES (ENGRENAGEM) */}
         <TouchableOpacity 
            style={styles.settingsIcon}
            onPress={() => router.push('/(tabs)/settings')} // <--- O PULO DO GATO
         >
            <Ionicons name="settings-sharp" size={24} color={COLORS.white} />
         </TouchableOpacity>
      </View>

      {/* 2. CABEÇALHO */}
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>MY PROFILE</Text>
        <View style={styles.headerUnderline} />
      </View>

      {/* 3. INFORMAÇÕES DO USUÁRIO */}
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>HORUS</Text>
          <Text style={styles.userHandle}>@reallygreatsite</Text>
          
          <Text style={styles.userBio}>
            Hello, I'm Horus.{'\n'}
            Welcome to my profile!
          </Text>
        </View>

        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/6XpM9N2.jpeg' }} 
            style={styles.avatarImage} 
          />
          <View style={styles.editIconBadge}>
            <Ionicons name="camera" size={14} color="black" />
          </View>
        </View>
      </View>

      {/* 4. ESTATÍSTICAS */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5.397</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1.000</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>9.920</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>

      {/* 5. CAIXA DE STATUS */}
      <View style={styles.statusBox}>
        <Text style={styles.statusPlaceholder}>What do you want to tell to everyone?</Text>
        
        <View style={styles.statusActions}>
          <View style={styles.statusIcons}>
            <View style={styles.circleIcon}>
              <Ionicons name="camera" size={16} color="white" />
            </View>
            <View style={styles.circleIcon}>
              <Ionicons name="location-sharp" size={16} color="white" />
            </View>
          </View>
          
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 6. GALERIA DE FOTOS */}
      <View style={styles.galleryGrid}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Image 
            key={index}
            source={{ uri: `https://picsum.photos/200/200?random=${index + 10}` }} 
            style={styles.galleryImage} 
          />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topCurveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  topCurve: {
    backgroundColor: COLORS.gold,
    width: 130,
    height: 120,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 0,
  },
  settingsIcon: {
    position: 'absolute',
    top: 50,
    left: 40,
  },
  headerTitleContainer: {
    marginTop: 60,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  headerTitle: {
    color: COLORS.white, 
    fontSize: 22,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    letterSpacing: 2,
  },
  headerUnderline: {
    height: 2,
    width: 180,
    backgroundColor: COLORS.gold,
    marginTop: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    color: COLORS.white,
    fontSize: 28,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    letterSpacing: 1,
  },
  userHandle: {
    color: '#CCC',
    fontSize: 14,
    marginBottom: 15,
  },
  userBio: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.gold,
  },
  editIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.gold,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
  },
  statLabel: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 2,
  },
  statusBox: {
    backgroundColor: COLORS.goldDark,
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 15,
    height: 140,
    justifyContent: 'space-between',
  },
  statusPlaceholder: {
    color: '#E0E0E0',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  circleIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  postButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 5,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  galleryImage: {
    width: PHOTO_SIZE, 
    height: PHOTO_SIZE,
    borderRadius: 8,
    marginBottom: 5,
  }
});