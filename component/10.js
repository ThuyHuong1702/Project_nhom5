import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Screen10 = ({ navigation }) => {
  const progress = 60;
  const diamonds = 5; 
  return (
    <View style={styles.container}>
      {/* Header with Progress Bar and Icons */}
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

      {/* Question Prompt */}
      <Text style={styles.questionTitle}>Dịch câu này</Text>

      {/* Character with Speech Bubble */}
      <View style={styles.characterContainer}>
        <Image style={styles.characterImage} source={require('../images/dolphin.png')} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>Tối nay tôi sẽ đi chơi cùng với bạn.</Text>
        </View>
      </View>

      {/* Translation Input Box */}
      <View style={styles.translationBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập vào bằng Tiếng Anh"
          placeholderTextColor="#9e9e9e"
          textAlignVertical="top" 
          multiline 
        />
        <Image style={styles.micIcon} source={require('../images/Mic_fill.png')} />
      </View>

      {/* Continue Button - Positioned at the bottom */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Screen11')}>
        <Text style={styles.continueButtonText}>TIẾP TỤC</Text>
      </TouchableOpacity>
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
  questionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  speechBubble: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00c3fe',
  },
  speechText: {
    fontSize: 16,
    color: '#000',
  },
  translationBox: {
    backgroundColor: '#fff',
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 40, 
    marginBottom: 20,
    minHeight: 400,
    position: 'relative', 
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  micIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen10;
