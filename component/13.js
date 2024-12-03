import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen13 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Check');
  const [showFeedback, setShowFeedback] = useState(false);
  const correctAnswer = "That’s my older brother.";
  const progress = 60;
  const diamonds = 5; 

  const handleCheckAnswer = () => {
    if (selectedOption === correctAnswer) {
      setShowFeedback(true);
      setButtonText('Next');
    } else {
      alert('Incorrect answer. Try again!');
    }
  };

  const handleNext = () => {
    if (buttonText === 'Next') {
      navigation.navigate('Screen14');
    } else {
      handleCheckAnswer();
    }
  };

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
      <Text style={styles.questionTitle}>Hoàn thành hội thoại</Text>

      {/* Audio and Question Bubble */}
      <View style={styles.dialogContainer}>
        <View style={styles.speechBubble}>
          <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
          <Text style={styles.speechText}>Who is that tall man?</Text>
        </View>
        <View style={styles.emptyBubble}>
          <Text style={styles.emptyText}>________</Text>
        </View>
      </View>

      {/* Answer Options */}
      {["It starts at three o’clock.", "That’s my older brother."].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, selectedOption === option && styles.selectedOption]}
          onPress={() => setSelectedOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {/* Feedback Message */}
      {showFeedback && (
        <View style={styles.feedbackContainer}>
          <Ionicons name="checkmark-circle" size={24} color="#1E90FF" />
          <Text style={styles.feedbackText}>You are correct! | 2 gold coins</Text>
          <Ionicons name="cash-outline" size={24} color="#FFD700" />
        </View>
      )}

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
        <Text style={styles.continueButtonText}>{buttonText}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dialogContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  speechBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00c3fe',
    marginBottom: 10,
    width: '80%',
  },
  audioIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  speechText: {
    fontSize: 16,
    color: '#000',
  },
  emptyBubble: {
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00c3fe',
    width: '80%',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#9e9e9e',
  },
  option: {
    backgroundColor: '#fff',
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: '#00c3fe',
    backgroundColor: '#e0f7ff',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
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

export default Screen13;
