import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonText, setButtonText] = useState('Check');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = 'My darling';

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
