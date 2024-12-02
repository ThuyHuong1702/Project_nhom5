import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen2 = ({ navigation }) => {
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

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.questionText}>Select the right word</Text>

        {/* Sentence with Icon */}
        <View style={styles.sentenceContainer}>
          <Image 
            source={require('../images/bxs-volume-full.svg.png')}
            style={styles.iconImage}
          />
          <Text style={styles.sentence}>Gatton</Text>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#FFF',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    marginHorizontal: 70,
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: '#00A6FF',
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
    color: '#00c3fe',
    fontWeight: '600',
  },
});

export default Screen2;
