import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen5 = ({ navigation }) => {
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
      <View style={styles.header}>
        <Ionicons name="close" size={24} color="#444" onPress={() => navigation.goBack()} />
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <View style={styles.pointsContainer}>
          <Ionicons name="heart" size={24} color="#FF5A5F" />
          <Text style={styles.points}>4</Text>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#00A6FF',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
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
