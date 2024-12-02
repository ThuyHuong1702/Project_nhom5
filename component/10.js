import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Screen10 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Progress Bar and Icons */}
      <View style={styles.header}>
        <TouchableOpacity>
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
      <Text style={styles.questionTitle}>Dịch câu này</Text>

      {/* Character with Speech Bubble */}
      <View style={styles.characterContainer}>
        <Image style={styles.characterImage} source={require('../images/dolphin.png')} />
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>Tối nay tôi sẽ đi chơi cùng với bạn.</Text>
        </View>
      </View>

      {/* Translation Input Box */}
      <View style={styles.translationBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập vào bằng Tiếng Anh"
          placeholderTextColor="#9e9e9e"
          textAlignVertical="top" 
          multiline 
        />
        <Image style={styles.micIcon} source={require('../images/Mic_fill.png')} />
      </View>

      {/* Continue Button - Positioned at the bottom */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Screen11')}>
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
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 40, 
    marginBottom: 20,
    minHeight: 400,
    position: 'relative', 
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  micIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
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

export default Screen10;
