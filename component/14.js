import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen14 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Check');
  const [showFeedback, setShowFeedback] = useState(false);
  const correctAnswer = 'không thích John';

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
      navigation.navigate('Screen15');
    } else {
      handleCheckAnswer();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Progress Bar and Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.closeIcon} source={require('../images/Close_square.png')} />
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View style={styles.progressBar} />
          </View>
        </View>
        <View style={styles.favoriteContainer}>
          <Image style={styles.favoriteIcon} source={require('../images/Favorite_fill.png')} />
          <Text style={styles.heartCount}>4</Text>
        </View>
      </View>

      {/* Question Prompt */}
      <Text style={styles.questionTitle}>Đọc và trả lời</Text>

      {/* Audio and Question Bubble */}
      <View style={styles.dialogContainer}>
        <View style={styles.speechBubble}>
          <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
          <Text style={styles.speechText}>
            Why do you want to marry John? He isn’t a good boyfriend. He isn’t friendly. And he watches too much TV!
          </Text>
        </View>
      </View>

      {/* Subtitle Prompt */}
      <Text style={styles.subtitle}>Người nói.....</Text>

      {/* Answer Options */}
      {['không quen John', 'muốn cưới John', 'không thích John'].map((option, index) => (
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
    paddingTop: 40,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressBackground: {
    width: '80%',
    height: 10,
    backgroundColor: '#c5c4c4',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    width: '60%',
    backgroundColor: '#00c3fe',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    width: 30,
    height: 30,
  },
  heartCount: {
    fontSize: 20,
    color: '#fe5959',
    fontFamily: 'Jaldi',
    marginLeft: 5,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogContainer: {
    marginBottom: 20,
  },
  speechBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00c3fe',
  },
  audioIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  speechText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  option: {
    backgroundColor: '#fff',
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
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

export default Screen14;
