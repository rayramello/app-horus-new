import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Removi o FontAwesome5 que não estava sendo usado
import { useRouter } from 'expo-router';

const COLORS = {
  background: '#000000',
  gold: '#D4AF37',
  goldHighlight: '#423616', 
  white: '#FFFFFF',
  grey: '#888',
};

// Dados simulados
const NOTIFICATIONS_DATA = [
  {
    id: '1',
    name: 'CLAUDIA ALVES',
    action: 'Commented on your post.',
    time: '3m ago',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    type: 'comment', 
    highlight: true, 
  },
  {
    id: '2',
    name: 'CLAUDIA ALVES',
    action: 'Liked your photo.',
    time: '5m ago',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    type: 'like', 
    highlight: false,
  },
  {
    id: '3',
    name: 'CLAUDIA ALVES',
    action: 'Mentioned you in a comment.',
    time: '2h ago',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    type: 'mention', 
    highlight: false,
  },
  {
    id: '4',
    name: 'DANI MARTINEZ',
    action: 'Shared your post.',
    time: '3h ago',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    type: 'share', 
    highlight: false,
  },
  {
    id: '5',
    name: 'KIMBERLY NGUYEN',
    action: 'Commented on your photo.',
    time: '5h ago',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    type: 'comment',
    highlight: false,
  },
  {
    id: '6',
    name: 'KIMBERLY NGUYEN',
    action: 'Started following you.',
    time: '7h ago',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    type: 'follow', 
    highlight: false,
  },
  {
    id: '7',
    name: 'MARIANA NAPOLITANI',
    action: 'Saved your photo.',
    time: 'Yesterday',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    type: 'save', 
    highlight: false,
  },
];

const getIconByType = (type: string) => {
  switch (type) {
    case 'like': return <Ionicons name="heart" size={10} color="black" />;
    case 'comment': return <Ionicons name="mail" size={10} color="black" />;
    case 'share': return <Ionicons name="share-social" size={10} color="black" />;
    case 'follow': return <Ionicons name="person-add" size={10} color="black" />;
    case 'save': return <Ionicons name="bookmark" size={10} color="black" />;
    default: return <Ionicons name="notifications" size={10} color="black" />;
  }
};

export default function NotificationsScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={[
        styles.itemContainer, 
        item.highlight && styles.highlightItem 
      ]}
    >
      {/* Avatar com Badge */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.badgeIcon}>
          {getIconByType(item.type)}
        </View>
      </View>

      {/* Textos */}
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.actionText}>{item.action}</Text>
      </View>

      {/* Lado Direito */}
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.gold} />
        </TouchableOpacity>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* --- HEADER CURVO --- */}
      <View style={styles.headerContainer}>
         <View style={styles.topCurveContainer}>
            <View style={styles.topCurve} />
            <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
              <Ionicons name="arrow-undo" size={24} color="white" /> 
            </TouchableOpacity>
         </View>

         <View style={styles.titleArea}>
            <Text style={styles.headerTitle}>MAIL & NOTIFICATIONS</Text>
            <View style={styles.headerUnderline} />
         </View>
      </View>

      {/* --- FILTROS --- */}
      <View style={styles.filterRow}>
        <TouchableOpacity>
          <Text style={styles.filterText}>Mark all read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.filterText}>Sort by time </Text>
          <Ionicons name="caret-down" size={12} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* --- LISTA --- */}
      <FlatList
        data={NOTIFICATIONS_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  // --- Header ---
  headerContainer: {
    height: 120,
    position: 'relative',
    marginBottom: 10,
  },
  topCurveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  topCurve: {
    backgroundColor: COLORS.gold,
    width: 120,
    height: 100,
    borderBottomRightRadius: 80,
    borderTopRightRadius: 0,
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    backgroundColor: '#967A3A', 
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center', 
    zIndex: 0, 
    paddingLeft: 60, 
  },
  headerTitle: {
    // CORRIGIDO: Removida a linha duplicada. Agora só tem uma cor (Branca).
    color: COLORS.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    letterSpacing: 1,
  },
  headerUnderline: {
    height: 2,
    width: 180,
    backgroundColor: COLORS.gold,
    marginTop: 8,
  },
  // --- Filtros ---
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  filterText: {
    color: '#CCC',
    fontSize: 12,
  },
  // --- Lista ---
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333', 
  },
  highlightItem: {
    backgroundColor: '#554828', 
    borderBottomColor: COLORS.gold,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#555',
  },
  badgeIcon: {
    position: 'absolute',
    bottom: 0,
    right: -2,
    backgroundColor: COLORS.gold,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    color: COLORS.gold,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    marginBottom: 2,
  },
  actionText: {
    color: COLORS.white,
    fontSize: 13,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 40, 
  },
  timeText: {
    color: '#CCC',
    fontSize: 11,
  },
});