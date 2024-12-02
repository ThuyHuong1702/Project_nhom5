import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen16 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const correctOption = 'kem';

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
      navigation.navigate('Screen17');
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
      <Text style={styles.questionTitle}>Chọn hình ảnh đúng</Text>

      {/* Audio Prompt */}
      <View style={styles.audioContainer}>
        <Image style={styles.audioIcon} source={require('../images/bxs-volume-full.svg.png')} />
        <Text style={styles.audioText}>icecream</Text>
      </View>

      {/* Image Options */}
      <View style={styles.optionsContainer}>
        {[
          { label: 'sô-cô-la', image: require('../images/image 45.png') },
          { label: 'kem', image: require('../images/image 46.png') },
          { label: 'em bé', image: require('../images/image 47.png') },
          { label: 'màu vàng', image: require('../images/image 48.png') },
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
  },
  continueButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen16;
