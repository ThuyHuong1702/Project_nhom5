import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
        <Image style={styles.settingsIcon} source={require('../images/Settings.png')} />
        <Image style={styles.notificationIcon} source={require('../images/Notification.png')} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image style={styles.avatar} source={require('../images/Rectangle 3203.png')} />
        <Text style={styles.username}>Pyotr Kodzhebash</Text>
        <Text style={styles.joinedDate}>Joined since 25th August 2024</Text>
      </View>

      {/* Followers, Following, Words */}
      <View style={styles.socialInfo}>
        <View style={styles.socialItem}>
          <Text style={styles.socialCount}>1,092</Text>
          <Text style={styles.socialLabel}>Followers</Text>
        </View>
        <View style={styles.socialItem}>
          <Text style={styles.socialCount}>392</Text>
          <Text style={styles.socialLabel}>Following</Text>
        </View>
        <View style={styles.socialItem}>
          <Text style={styles.socialCount}>292</Text>
          <Text style={styles.socialLabel}>Words</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.buttonText2}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics Section */}
      <Text style={styles.statisticsTitle}>Statistics</Text>
      <View style={styles.statisticsContainer}>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/kimcuong.png')} />
          <Text style={styles.statCount}>176</Text>
          <Text style={styles.statLabel}>Total Diamonds</Text>
        </View>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/goal 1.png')} />
          <Text style={styles.statCount}>11</Text>
          <Text style={styles.statLabel}>Total Challenges</Text>
        </View>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/tutorial 1.png')} />
          <Text style={styles.statCount}>576</Text>
          <Text style={styles.statLabel}>Lessons Passed</Text>
        </View>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/Vector.png')} />
          <Text style={styles.statCount}>1879</Text>
          <Text style={styles.statLabel}>Total Lifetime XP</Text>
        </View>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/memorization 1.png')} />
          <Text style={styles.statCount}>1576</Text>
          <Text style={styles.statLabel}>Learned Words</Text>
        </View>
        <View style={styles.statItem}>
          <Image style={styles.statIcon} source={require('../images/Finished Topics Reward.png')} />
          <Text style={styles.statCount}>55</Text>
          <Text style={styles.statLabel}>Top 3 Position</Text>
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.icon} source={require('../images/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.icon} source={require('../images/Top.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.icon} source={require('../images/Challenge.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.icon} source={require('../images/Crown.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.icon} source={require('../images/User_alt_fill.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#650000',
    textAlign: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    right: 50,
    width: 20,
    height: 20,
  },
  notificationIcon: {
    position: 'absolute',
    right: 16,
    width: 20,
    height: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  joinedDate: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  socialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  socialItem: {
    alignItems: 'center',
  },
  socialCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#650000',
  },
  socialLabel: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  editProfileButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  messageButton: {
    borderColor: '#007aff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  buttonText2: {
    color: '#007aff',
  },
  statisticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#650000',
    marginBottom: 16,
    textAlign: 'center',
  },
  statisticsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    width: '45%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 8, 
    borderRadius: 10,
    marginBottom: 15, 
  },
  statIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, 
  },
  statCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#9e9e9e',
  },
  navContainer: {
    marginTop:15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#2c2a3a',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  navItem: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default AccountScreen;
