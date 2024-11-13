import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Dimensions, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HosoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Blue Background with Settings Icon and Avatar */}
        <View style={styles.headerBackground}>
          <Image source={require('../assets/avatar.webp')} style={styles.avatarImage} />
          <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')} style={styles.settingsIcon}>
            <Image source={require('../assets/Setting_line.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>Ánh</Text>
            <Text style={styles.userMeta}>@nhmszm . Đã tham gia tháng Bảy 2022</Text>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statColumn}>
              <Image source={require('../assets/my.png')} style={styles.flagIcon} />
              <Text style={styles.statLabel}>Khóa học</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statColumn}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Đang theo dõi</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statColumn}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Người theo dõi</Text>
            </View>
          </View>
          <View style={styles.friendActions}>
            <TouchableOpacity style={styles.addFriendButton}>
              <FontAwesome name="user-plus" size={16} color="#007AFF" />
              <Text style={styles.addFriendText}>THÊM BẠN BÈ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <FontAwesome name="upload" size={16} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Overview Section */}
        <View style={styles.overviewSection}>
          <Text style={styles.overviewTitle}>Tổng quan</Text>
          <View style={styles.overviewGrid}>
            <View style={styles.overviewItem}>
              <Image source={require('../assets/fire 2.png')} style={styles.iconMedium} />
              <View style={styles.overviewTextContainer}>
                <Text style={styles.statNumber}>105</Text>
                <Text style={styles.statLabel}>Ngày streak</Text>
              </View>
            </View>
            <View style={styles.overviewItem}>
              <Image source={require('../assets/lightning_fill.png')} style={styles.iconMedium} />
              <View style={styles.overviewTextContainer}>
                <Text style={styles.statNumber}>76516</Text>
                <Text style={styles.statLabel}>Tổng KN</Text>
              </View>
            </View>
            <View style={styles.overviewItem}>
              <Image source={require('../assets/Dimond_fill.png')} style={styles.iconMedium} />
              <View style={styles.overviewTextContainer}>
                <Text style={styles.statSubNumber}>Ngọc Lục Bảo</Text>
                <Text style={styles.statSubLabel}>Giải đấu</Text>
              </View>
            </View>
            <View style={styles.overviewItem}>
              <Image source={require('../assets/Trophy.png')} style={styles.iconMedium} />
              <View style={styles.overviewTextContainer}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Số lần đạt top 3</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('CustomHome')}>
          <FontAwesome name="home" size={24} color="#00B7FF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Video')}>
          <FontAwesome name="play-circle" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CustomHome')} style={styles.centralButton}>
          <Text style={styles.centralButtonText}>Q</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RankScreen')}>
          <FontAwesome name="trophy" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.notificationIconWrapper}>
          <FontAwesome name="bell" size={24} color="gray" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>10</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 80, // Space above bottom navigation
  },
  headerBackground: {
    height: 250,
    backgroundColor: '#E6F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingTop: 10,
    position: 'relative',
  },
  avatarImage: {
    width: 230,
    height: 230,
    
    
  },
  settingsIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  iconSmall: {
    width: 24,
    height: 24,
  },
  iconMedium: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  flagIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  profileSection: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: -30,
  },
  profileInfo: {
    width: '100%',
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  userMeta: {
    fontSize: 15,
    color: '#9C9C9C',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%',
  },
  statColumn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: 1,
    height: 50,
    backgroundColor: '#B5B5B5',
    marginHorizontal: 10,
  },
  statNumber: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 18,
  },
  statLabel: {
    color: '#9C9C9C',
    fontSize: 15,
    marginTop: 2,
  },
  friendActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
    paddingHorizontal: 20,
  },
  addFriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    width: 246,
    height: 42,
    justifyContent: 'center',
    marginLeft: -10,
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    width: 53,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -10,
  },
  addFriendText: {
    color: '#007AFF',
    fontSize: 16,
    marginLeft: 8,
  },
  overviewSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewItem: {
    width: 165, 
    height: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 15,
    marginRight: 10,
  },
  overviewTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  statSubNumber: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  statSubLabel: {
    color: '#9C9C9C',
    fontSize: 15,
    marginTop: 2,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  centralButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00B7FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginTop: -25,
  },
  centralButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIconWrapper: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HosoScreen;
