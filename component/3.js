import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Screen3({ navigation }) {
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
      <View style={styles.header}>
        <Ionicons name="close" size={24} color="#FF5A5F" />
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>462</Text>
          <Image
            source={require('../images/Group 125.png')}
            style={styles.diamondIcon}
          />
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
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#00c3fe',
    borderRadius: 3,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    color: '#00A6FF',
    fontWeight: 'bold',
    marginRight: 5,
  },
  diamondIcon: {
    width: 16,
    height: 16,
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
