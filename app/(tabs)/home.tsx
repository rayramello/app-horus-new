import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// --- Definição das Cores ---
const DARK_BG = '#000000';
const GOLD_COLOR = '#D4AF37';
const LIGHT_TEXT = '#EAEAEA';
const SECONDARY_TEXT = '#AAA';
const BORDER_COLOR = '#222';

// --- Dados Fictícios ---
const profileLogos = [
  { id: '1', image: 'https://placehold.co' },
  { id: '2', image: 'https://placehold.co' },
  { id: '3', image: 'https://placehold.co' },
];

const feedData = [
  {
    id: '1',
    userName: 'CLAUDIA ALVES',
    userAvatar: 'https://placehold.co',
    timestamp: '2 hours ago',
    postImage: 'https://placehold.co',
    description:
      'Buraco grande na rua dificultando a passagem de veículos e pedestres. Está sem sinalização e pode causar acidentes.',
    likes: '201',
    comments: '99+',
  },
  {
    id: '2',
    userName: 'CAHAYA DEWI',
    userAvatar: 'https://placehold.co',
    timestamp: '3 hours ago',
    postImage: 'https://placehold.co',
    description: 'Post de exemplo 2...',
    likes: '150',
    comments: '42',
  },
];

// --- Componente do Perfil ---
const ProfileLogo = ({ imageUrl, index }) => (
  <TouchableOpacity style={[styles.profileLogoContainer, index === 0 && { marginLeft: 16 }]}>
    <Image
      source={{ uri: `${imageUrl}/150x150/D4AF37/000000?text=Logo` }}
      style={styles.profileLogoImage}
    />
  </TouchableOpacity>
);

// --- Componente do Post ---
const FeedPost = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Image
        source={{ uri: `${post.userAvatar}/100x100/EAEAEA/000000?text=Avatar` }}
        style={styles.postAvatar}
      />
      <View style={styles.postHeaderText}>
        <Text style={styles.postUserName}>{post.userName}</Text>
        <Text style={styles.postTimestamp}>{post.timestamp}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={24} color={SECONDARY_TEXT} />
      </TouchableOpacity>
    </View>

    <Image
      source={{ uri: `${post.postImage}/600x400/333/FFF?text=Post+Image` }}
      style={styles.postImage}
      resizeMode="cover"
    />

    <Text style={styles.postDescription}>{post.description}</Text>

    <View style={styles.postActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="heart-outline" size={26} color={LIGHT_TEXT} />
        <Text style={styles.actionText}>{post.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="chatbubble-outline" size={24} color={LIGHT_TEXT} />
        <Text style={styles.actionText}>{post.comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonRight}>
        <MaterialCommunityIcons name="account-group-outline" size={26} color={LIGHT_TEXT} />
      </TouchableOpacity>
    </View>
  </View>
);

// --- Tela Principal ---
const HomeScreen = () => {
  const renderListHeader = () => (
    <>
      <View style={styles.profilesSection}>
        <Text style={styles.sectionTitle}>Perfis</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {profileLogos.map((profile, index) => (
            <ProfileLogo key={profile.id} imageUrl={profile.image} index={index} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Sort by Time</Text>
          <Feather name="chevron-down" size={20} color={GOLD_COLOR} />
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_BG} />

      <View style={styles.header}>
        <View style={styles.headerUser}>
          <Image
            source={{ uri: 'https://placehold.co/100x100/D4AF37/000000?text=User' }}
            style={styles.headerAvatar}
          />
          <Text style={styles.headerTitle}>USUÁRIO</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="images-outline" size={24} color={LIGHT_TEXT} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Ionicons name="filter-outline" size={24} color={LIGHT_TEXT} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={feedData}
        renderItem={({ item }) => <FeedPost post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={styles.feedContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerTitle: {
    color: LIGHT_TEXT,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  profilesSection: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  sectionTitle: {
    color: LIGHT_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  profileLogoContainer: {
    marginRight: 12,
  },
  profileLogoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: GOLD_COLOR,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: SECONDARY_TEXT,
    fontSize: 14,
    marginRight: 4,
  },
  feedContainer: {
    paddingBottom: 100,
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingBottom: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  postHeaderText: {
    flex: 1,
  },
  postUserName: {
    color: LIGHT_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTimestamp: {
    color: SECONDARY_TEXT,
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#333',
    marginBottom: 12,
  },
  postDescription: {
    color: LIGHT_TEXT,
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionButtonRight: {
    marginLeft: 'auto',
  },
  actionText: {
    color: LIGHT_TEXT,
    marginLeft: 6,
    fontSize: 14,
  },
});

export default HomeScreen;