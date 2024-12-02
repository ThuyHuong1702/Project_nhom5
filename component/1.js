import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const  Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Icon, Progress, and Diamond Count */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>×</Text>
        </TouchableOpacity>
        <View style={styles.progressBackground}>
          <View style={styles.progressBar} />
        </View>
        <View style={styles.diamondContainer}>
          <Image style={styles.diamondIcon} source={require('../images/Group 125.png')} />
          <Text style={styles.diamondCount}>462</Text>
        </View>
      </View>

      {/* Prompt Title */}
      <Text style={styles.promptTitle}>Speak this sentence</Text>

      {/* Sentence to Speak */}
      <View style={styles.sentenceContainer}>
        <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
        <Text style={styles.sentenceText}>Bevo caffè e acqua.</Text>
      </View>

      {/* Translation */}
      <Text style={styles.translationText}>I drink coffee and water.</Text>

      {/* Character Image */}
      <Image style={styles.characterImage} source={require('../images/snapedit_1727944725657.png')} />

      {/* Voice Recording Visual */}
      <View style={styles.recordingContainer}>
        <Image style={styles.recordingWaveform} source={require('../images/Group 5354.png')} />
      </View>

      {/* Bottom Section with Correct Message and Continue Button */}
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
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backIcon: {
    fontSize: 24,
    color: '#900',
    marginLeft: 10,
  },
  progressBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginHorizontal: 10,
  },
  progressBar: {
    width: '50%', 
    height: '100%',
    backgroundColor: '#00c3fe',
    borderRadius: 3,
  },
  diamondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  diamondIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  diamondCount: {
    fontSize: 14,
    color: '#00c3fe',
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
    borderColor: '#00c3fe',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30,
  },
  recordingWaveform: {
    width: 160,
    height: 40,
  },
  bottomSection: {
    backgroundColor: '#00c3fe',
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
  },
  continueButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default  Screen1;
