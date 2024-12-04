import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen2 = ({ navigation }) => {
  const progress = 60;
  const diamonds = 5; 
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption] = useState('Cat');
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const options = [
    { id: 1, label: 'Dog', image: require('../images/pet 1.png') },
    { id: 2, label: 'Cat', image: require('../images/g839.png') },
    { id: 3, label: 'Rabbit', image: require('../images/rabbit (1) 1.png') },
    { id: 4, label: 'Bear', image: require('../images/polar-bear 1.png') },
  ];

  const handleSelectOption = (label) => {
    setSelectedOption(label);
    setIsAnswerChecked(false);
  };

  const handleCheckOrContinue = () => {
    if (isAnswerChecked) {
      navigation.navigate('Screen3');
    } else {
      setIsAnswerChecked(true);
    }
  };

  const getBorderColor = (label) => {
    if (isAnswerChecked) {
      return label === correctOption ? 'green' : (label === selectedOption ? 'red' : 'transparent');
    }
    return label === selectedOption ? 'black' : 'transparent';
  };

  return (
    <View style={styles.container}>
      {/* Header */}
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

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.questionText}>Select the right word</Text>

        {/* Sentence with Icon */}
        <View style={styles.sentenceContainer}>
          <Image 
            source={require('../images/bxs-volume-full.svg.png')}
            style={styles.iconImage}
          />
          <Text style={styles.sentence}>Cat</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option,
                { borderColor: getBorderColor(option.label) },
              ]}
              onPress={() => handleSelectOption(option.label)}
            >
              <Image source={option.image} style={styles.image} />
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.checkAnswerButton} onPress={handleCheckOrContinue}>
          <Text style={styles.buttonText}>{isAnswerChecked ? 'Continue' : 'Check Answer'}</Text>
        </TouchableOpacity>
      </ScrollView>
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
  questionText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#444444',
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  iconImage: {
    marginTop: 30,
    width: 20,
    height: 20,
    marginRight: 8,
  },
  sentence: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  optionsContainer: {
    marginTop: 40,
    fontSize: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  option: {
    width: '40%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkAnswerButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 200,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Screen2;
