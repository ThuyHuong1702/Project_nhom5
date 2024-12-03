import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';


const CourseScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Check');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = 'My darling';
  const progress = 60;
  const diamonds = 5; 

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
      navigation.navigate('Screen7');
    } else {
      handleCheckAnswer();
    }
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

      {/* Lesson Title */}
      <Text style={styles.title}>Home and Family</Text>

      {/* Narrator Section */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Narratrice / Narrator</Text>
        <View style={styles.row}>
          <Ionicons name="volume-high-outline" size={24} color="#1E90FF" />
          <Text style={styles.sentence}>jean est à la maison avec sa femme, Marion</Text>
        </View>
        <Text style={styles.translation}>see translation</Text>
      </View>

      {/* Dialogue Section 1 */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Jean</Text>
        <View style={styles.row}>
          <Ionicons name="volume-high-outline" size={24} color="#1E90FF" />
          <Text style={styles.sentence}>salut, Marion !</Text>
        </View>
        <Text style={styles.translation}>see translation</Text>
      </View>

      {/* Dialogue Section 2 */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Marion</Text>
        <View style={styles.row}>
          <Ionicons name="volume-high-outline" size={24} color="#1E90FF" />
          <Text style={styles.sentence}>salut, Mon chéri</Text>
        </View>
        <Text style={styles.translation}>see translation</Text>
      </View>

      {/* Question Section */}
      <Text style={styles.question}>What does "Mon chéri" mean?</Text>
      <View style={styles.optionsContainer}>
        {['My colleague', 'My darling', 'My brother', 'My friend'].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionRow,
              selectedOption === option && styles.selectedOptionRow,
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Ionicons
              name={selectedOption === option ? "radio-button-on" : "radio-button-off"}
              size={20}
              color={selectedOption === option ? "#1E90FF" : "#888"}
            />
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

      {/* Check/Next Button */}
      <TouchableOpacity style={styles.checkButton} onPress={handleNext}>
        <Text style={styles.checkButtonText}>{buttonText}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sentence: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  translation: {
    fontSize: 14,
    color: '#1E90FF',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  selectedOptionRow: {
    backgroundColor: '#D0EFFF',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
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
  checkButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  checkButtonText: {
    fontSize: 18,
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default CourseScreen;
