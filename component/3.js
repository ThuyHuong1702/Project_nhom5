import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Screen3({ navigation }) {
  const progress = 60;
  const diamonds = 5; 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const correctAnswer = 'velo';

  const handleCheckAnswer = () => {
    setIsChecked(true);
  };

  const handleContinue = () => {
    navigation.navigate('Screen4'); 
  };

  const getBorderColor = (word) => {
    if (isChecked) {
      return word === correctAnswer ? 'green' : word === selectedAnswer ? 'red' : '#1E90FF';
    }
    return word === selectedAnswer ? 'black' : '#1E90FF'; 
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
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

      {/* Lesson Info */}
      <Text style={styles.lessonInfo}>Lesson 1 Part 2</Text>
      <Text style={styles.newWordText}>New word</Text>

      {/* Image Section */}
      <Image
        source={require('../images/Rectangle 29.png')}
        style={styles.image}
      />

      {/* Question */}
      <Text style={styles.questionText}>Which of these is "bicycle"?</Text>

      {/* Answer Options */}
      <View style={styles.answerOptions}>
        {['velo', 'voiture', 'raquette', 'arbre'].map((word, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              { borderColor: getBorderColor(word) },
            ]}
            onPress={() => setSelectedAnswer(word)}
          >
            <Text style={styles.answerText}>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Section */}
      {isChecked && selectedAnswer === correctAnswer && (
        <View style={styles.feedbackContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#1E90FF" />
          <Text style={styles.feedbackText}>You are correct! | 2 gold coins</Text>
          <Ionicons name="cash-outline" size={24} color="#FFD700" />
        </View>
      )}

      {/* Check/Continue Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={isChecked ? handleContinue : handleCheckAnswer}
      >
        <Text style={styles.nextButtonText}>{isChecked ? 'Continue' : 'Check'}</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  newWordText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  answerOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  answerButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '45%',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
    color: '#1E90FF',
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
