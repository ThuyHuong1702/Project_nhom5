import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen9 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Check');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = 'late';

  const handleCheckAnswer = () => {
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      setButtonText('Next');
    } else {
      alert('Incorrect answer. Try again!');
    }
  };

  const handleNext = () => {
    if (buttonText === 'Next') {
      navigation.navigate('Screen10');
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
      <Text style={styles.questionTitle}>Hoàn tất bản dịch</Text>

      {/* Character with Speech Bubble */}
      <View style={styles.characterContainer}>
        <Image style={styles.characterImage} source={require('../images/dolphin.png')} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>Đừng đi chơi cùng với anh ấy quá muộn.</Text>
        </View>
      </View>

      {/* Translation Box with Placeholder */}
      <View style={styles.translationBox}>
        <Text style={styles.translationText}>Don’t go out with him too ______!</Text>
      </View>

      {/* Answer Options */}
      <View style={styles.optionsContainer}>
        {['soon', 'early', 'late'].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
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
    width: '70%',
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
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    minHeight: 100,
    justifyContent: 'center',
  },
  translationText: {
    fontSize: 18,
    color: '#000',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fff',
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  selectedOption: {
    borderColor: '#00c3fe',
    backgroundColor: '#e0f7ff',
  },
  optionText: {
    fontSize: 18,
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
    marginLeft: 10,
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

export default Screen9;
