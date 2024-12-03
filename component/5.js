import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen5 = ({ navigation }) => {
  const progress = 60;
  const diamonds = 5;
  const [selectedWord, setSelectedWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonText, setButtonText] = useState('Check');

  const correctAnswer = 'she buys coffee';

  const handleCheckAnswer = () => {
    if (selectedWord === correctAnswer) {
      setIsCorrect(true);
      setButtonText('Next');
    } else {
      alert('Incorrect answer. Try again!');
    }
  };

  const handleNext = () => {
    if (isCorrect) {
      navigation.navigate('Screen6');
    } else {
      handleCheckAnswer();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section - Matching Screen4 */}
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

      {/* Lesson Information */}
      <Text style={styles.lessonInfo}>Lesson 1 Part 1</Text>
      <Text style={styles.instruction}>Translate this sentence</Text>

      {/* Image Section */}
      <Image source={require('../images/Rectangle 29-1.png')} style={styles.image} />

      {/* Word Options */}
      <View style={styles.wordOptions}>
        {['she buys coffee', 'she buys tea', 'they drink coffee'].map((phrase, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.wordButton,
              selectedWord === phrase && styles.selectedWordButton,
            ]}
            onPress={() => setSelectedWord(phrase)}
          >
            <Text style={styles.wordText}>{phrase}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Section */}
      {isCorrect && (
        <View style={styles.feedbackContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#1E90FF" />
          <Text style={styles.feedbackText}>You are correct! | 2 gold coins</Text>
          <Ionicons name="cash-outline" size={24} color="#FFD700" />
        </View>
      )}

      {/* Check/Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>{buttonText}</Text>
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
  lessonInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  wordOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },
  wordButton: {
    backgroundColor: '#87CEFA',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  selectedWordButton: {
    backgroundColor: '#00BFFF',
  },
  wordText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen5;
