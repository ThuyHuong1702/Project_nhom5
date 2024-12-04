import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech'; 
import { useNavigation } from '@react-navigation/native';

const ProgressBar = () => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/Close_square.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <View style={styles.heartContainer}>
          <Image source={require('../assets/Favorite_fill.png')} style={styles.heartIcon} />
          <Text style={styles.heartText}>4</Text>
        </View>
      </View>
      <Text style={styles.instructionText}>Đọc câu này</Text>
    </View>
  );
};

const SpeakingTask = () => {
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      // Request permissions and set up recording mode
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      // Start recording
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
      console.log("Bắt đầu ghi âm");
    } catch (err) {
      console.error("Không thể bắt đầu ghi âm", err);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Ghi âm đã dừng và được lưu tại", uri);
      setRecording(null);
    } catch (err) {
      console.error("Không thể dừng ghi âm", err);
    }
  };

  const handleSpeakButtonPress = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleVolumeUpPress = () => {
    // Use Speech.speak to read the sentence aloud when the volume-up icon is pressed
    Speech.speak("Our parents don’t want us to come home late.", {
      language: 'en',
      rate: 1,
      pitch: 1,
    });
  };

  return (
    <View style={styles.speakingContainer}>
      <View style={styles.speakingContent}>

        <Image source={require('../assets/mascot.png')} style={styles.animalImage} />
        <ImageBackground
              source={require('../assets/Group 10.png')} // Hình nền
              style={styles.background}
              >
        <View style={styles.speechBubble}>
          <Image source={require('../assets/volume.png')} style={styles.volumeIcon} />
          <Text style={styles.speechText}>Our parents don’t want us to come home late.</Text>
        </View>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.speakButton} onPress={handleSpeakButtonPress}>
        <FontAwesome name="microphone" size={24} color="#00CFFF" />
        <Text style={styles.speakButtonText}>{isRecording ? 'DỪNG GHI ÂM' : 'NHẤN ĐỂ NÓI'}</Text>
      </TouchableOpacity>

    </View>
  );
};

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.cantHearText}>HIỆN KHÔNG NGHE ĐƯỢC</Text>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Lesson3Screen')}
      >
        <Text style={styles.continueButtonText}>TIẾP TỤC</Text>
      </TouchableOpacity>
    </View>
  );
};

const ReadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProgressBar />
      <SpeakingTask />
      <View style={{ flex: 1 }} />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    width: 239,   // Kích thước của hình ảnh
    height: 150,  // Kích thước của hình ảnh
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 50,
  },
  progressBar: {
    flex: 1,
    height: 15,
    width: 256.32,
    backgroundColor: '#C5C4C4',
    borderRadius: 10,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#00CFFF',
    borderRadius: 10,
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartText: {
    color: '#FE5959',
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 42.25,
  },
  instructionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    lineHeight: 21.96,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  closeIcon: {
    width: 35,
    height: 34,
  },
  heartIcon: {
    width: 33,
    height: 30,
  },
  speakingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  speakingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  animalImage: {
    width: 104.36,
    height: 95.53,
    marginRight: 10,
  },
  speechBubble: {
    flexDirection: 'row',  // Đặt các phần tử trong hàng
    maxWidth: '80%',  // Giới hạn độ rộng của speechBubble
    marginLeft: 30,
    marginTop: 40,
  },
  volumeIcon: {
    width: 36,
    height: 36,
    marginRight: 10, // Space between icon and text
  },
  speechText: {
    fontSize: 20,
    color: '#333',
  },
  speakButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 77,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    marginTop: 87,
  },
  speakButtonText: {
    color: '#00CFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 37,
  },
  cantHearText: {
    color: '#A1A1A1',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#BEBEBE',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 120,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReadingScreen;
