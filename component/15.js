import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen15 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const correctOption = 'thư viện';
  const progress = 60;
  const diamonds = 5; 

  const handleOptionSelect = (option) => {
    if (option === correctOption) {
      setShowFeedback(true);
    } else {
      alert('Incorrect answer. Try again!');
    }
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (showFeedback) {
      navigation.navigate('Screen16');
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
      <Text style={styles.questionTitle}>Chọn hình ảnh đúng</Text>

      {/* Audio Prompt */}
      <View style={styles.audioContainer}>
        <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
        <Text style={styles.audioText}>library</Text>
      </View>

      {/* Image Options */}
      <View style={styles.optionsContainer}>
        {[
          { label: 'xe đạp', image: require('../images/image 41.png') },
          { label: 'thư viện', image: require('../images/image 42.png') },
          { label: 'nhà hát', image: require('../images/image 43.png') },
          { label: 'đàn piano', image: require('../images/image 44.png') },
        ].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option.label && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(option.label)}
          >
            <Image style={styles.optionImage} source={option.image} />
            <Text style={styles.optionLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  audioIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  audioText: {
    fontSize: 16,
    color: '#000',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#c6c6c6',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: '#00c3fe',
    backgroundColor: '#e0f7ff',
  },
  optionImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  optionLabel: {
    fontSize: 14,
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
    marginBottom: 50,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen15;
