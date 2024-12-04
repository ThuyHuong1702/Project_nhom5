import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Screen1 = ({ navigation }) => {
  const progress = 60;
  const diamonds = 5; 

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Close Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={34} color="#A9A9A9" />
        </TouchableOpacity>

        {/* Progress Bar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <View style={styles.diamondContainer}>
          <Image
            source={require('../images/Favorite_fill.png')} // Đường dẫn đến icon trái tim
            style={styles.diamondIcon}
          />
          <Text style={styles.diamondCount}>{diamonds}</Text>
        </View>
      </View>

      {/* Nội dung khác trong màn hình */}
      <Text style={styles.promptTitle}>Speak this sentence</Text>
      <View style={styles.sentenceContainer}>
        <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
        <Text style={styles.sentenceText}>Bevo caffè e acqua.</Text>
      </View>
      <Text style={styles.translationText}>I drink coffee and water.</Text>
      <Image style={styles.characterImage} source={require('../images/snapedit_1727944725657.png')} />
      <View style={styles.recordingContainer}>
        <Image style={styles.recordingWaveform} source={require('../images/Group 5354.png')} />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.correctContainer}>
          <Text style={styles.correctText}>Correct!</Text>
          <View style={styles.actionIcons}>
            <Image style={styles.icon} source={require('../images/lets-icons_send-fill.png')} />
            <Image style={styles.icon} source={require('../images/lets-icons_chat-fill.png')} />
          </View>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Screen2')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00C3FE',
    borderRadius: 5,
  },
  diamondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diamondIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 5,
  },
  diamondCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF5A5F',
  },
  promptTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#900',
    textAlign: 'center',
    marginVertical: 10,
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  audioIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  sentenceText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  translationText: {
    fontSize: 14,
    color: '#555',
    backgroundColor: '#f0f0f0',
    padding: 6,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
  },
  recordingContainer: {
    borderWidth: 1,
    borderColor: '#00C3FE',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  recordingWaveform: {
    width: 160,
    height: 40,
  },
  bottomSection: {
    backgroundColor: '#00C3FE',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  correctContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  correctText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  actionIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#00C3FE',
    fontWeight: '600',
  },
});

export default Screen1;
