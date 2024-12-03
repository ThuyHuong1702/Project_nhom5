import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Screen4 = ({ navigation }) => {
  const progress = 60;
  const diamonds = 5; 
  // Mảng từ cần hoàn thiện
  const [blanks, setBlanks] = useState(['____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____', '____']);
  // Các chữ cái có sẵn
  const [availableLetters, setAvailableLetters] = useState(['chúng', 'ơn', 'phòng', 'Bố', 'xe buýt', 'mẹ', 'muốn', 'không', 'tôi', 'chúng', 'tôi', 'về', 'nhà']);
  // Hàm xử lý khi nhấn vào chữ cái
  const handleLetterPress = (letter) => {
    // Tìm ô trống đầu tiên và điền chữ vào đó
    const newBlanks = [...blanks];
    const blankIndex = newBlanks.indexOf('____');
    if (blankIndex !== -1) {
      newBlanks[blankIndex] = letter;
      setBlanks(newBlanks);
      // Xóa từ vừa chọn khỏi danh sách các từ có sẵn
      const newAvailableLetters = availableLetters.filter((l) => l !== letter);
      setAvailableLetters(newAvailableLetters);
    }
  };

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

      {/* Question Text */}
      <Text style={styles.questionText}>Đọc câu này</Text>

      {/* Sentence Container */}
      <View style={styles.sentenceContainer}>
        <Image
          source={require('../images/dolphin.png')}
          style={styles.iconImage}
        />
        <View style={styles.sentenceBubble}>
          <Ionicons name="volume-high-outline" size={20} color="#00A6FF" />
          <Text style={styles.sentenceText}>
            Our parents don’t want us to come home late.
          </Text>
        </View>
      </View>

      {/* Blanks for Completing Sentence */}
      <View style={styles.blankContainer}>
        {blanks.map((blank, index) => (
          <View key={index} style={styles.blankBox}>
            <Text style={styles.blankText}>{blank}</Text>
          </View>
        ))}
      </View>

      {/* Available Letters */}
      <View style={styles.lettersContainer}>
        {availableLetters.map((letter, index) => (
          <TouchableOpacity key={index} style={styles.letterButton} onPress={() => handleLetterPress(letter)}>
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Screen5')}>
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
  questionText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  sentenceBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  sentenceText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 8,
  },
  blankContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  blankBox: {
    width: 60,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  blankText: {
    fontSize: 16,
    color: '#444',
  },
  lettersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  letterButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
  },
  letterText: {
    fontSize: 14,
    color: '#444',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, 
    left: 20,  
    right: 20,  
  },
  
  continueButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen4;
